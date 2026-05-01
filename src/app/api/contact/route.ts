import { NextRequest, NextResponse } from 'next/server';

const SPREADSHEET_ID = '1IObyxIgOiUkkmiYXl8Ms-8zgj4y-272JoDeAHDLMqek';
const SHEET_NAME = 'Sheet1';

async function getAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Google OAuth credentials. Please set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN environment variables.');
  }

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  });

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = await response.json();

  if (!response.ok) {
    // Log full error details server-side for debugging
    console.error('Google OAuth token error:', JSON.stringify(data, null, 2));
    console.error('Client ID prefix:', clientId?.substring(0, 20));
    console.error('Refresh token prefix:', refreshToken?.substring(0, 10));

    const detail = data.error_description || data.error || 'Unknown error';
    throw new Error(`Failed to get access token: ${detail} (hint: ensure the refresh token was generated using the same Client ID and Secret currently in your environment variables, and that the OAuth consent screen is published)`);
  }

  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    const timestamp = new Date().toISOString();
    const values = [[timestamp, name, email, company || '', subject || '', message]];

    const sheetsResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values }),
      }
    );

    if (!sheetsResponse.ok) {
      const errorData = await sheetsResponse.json();
      console.error('Google Sheets API error:', JSON.stringify(errorData, null, 2));
      throw new Error(`Google Sheets API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Contact form error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
