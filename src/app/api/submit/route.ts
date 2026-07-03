import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) || {};
    const missing = ['name', 'phone', 'checkin', 'checkout', 'housing', 'guests'].filter((f) => !String(body[f] ?? '').trim());
    if (missing.length) {
      return NextResponse.json({ error: `Missing: ${missing.join(',')}` }, { status: 422 });
    }

    // TODO server-side secure integrations regarding keys:
    // Telegram: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
    // Yandex Sheets: YANDEX_OAUTH_TOKEN / YANDEX_SERVICE_ACCOUNT + YANDEX_SHEET_ID
    console.log('booking', { body });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('submit error', error);
    return NextResponse.json({ error: 'Ошибка отправки заявки' }, { status: 500 });
  }
}
