type Booking = {
  name: string;
  phone: string;
  checkin: string;
  checkout: string;
  housing: string;
  guests: number;
  comment?: string;
};

export async function appendBookingToSheet(booking: Booking) {
  throw new Error(
    'Configure YANDEX_OAUTH_TOKEN, YANDEX_SHEET_ID, and YANDEX_SHEET_NAME to enable Yandex Sheets sync.'
  );
}
