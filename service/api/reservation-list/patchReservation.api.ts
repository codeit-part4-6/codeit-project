import {Reservation} from '@/types/reservation-list';
import INSTANCE_URL from '../instance';

export async function patchReservationList({reservationId}: {reservationId: number | null}): Promise<Reservation> {
  const response = await INSTANCE_URL.patch(
    `/my-reservations/${reservationId}`,
    {
      status: 'canceled',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    },
  );
  return response.data;
}
