import {ReservationListResponse} from '@/types/reservation-list';
import INSTANCE_URL from '../instance';

export async function getReservationList({
  cursorId,
  size,
  status,
}: {
  cursorId?: number;
  size?: number;
  status?: string;
}): Promise<ReservationListResponse> {
  const params = new URLSearchParams({
    ...(cursorId !== undefined && {cursorId: cursorId.toString()}),
    ...(size !== undefined && {size: size.toString()}),
    ...(status && {status}),
  });
  const response = await INSTANCE_URL.get(`/my-reservations?${params}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  });
  return response.data;
}
