import INSTANCE_URL from '../instance';
import getAccessToken from './getAccessToken';

export async function postReview(reservationId: number, content: string, rating: number) {
  const accessToken = getAccessToken();
  const response = await INSTANCE_URL.post(
    `/my-reservations/${reservationId}/reviews`,
    {
      rating,
      content,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return response.data;
}
