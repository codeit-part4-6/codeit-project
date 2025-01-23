import INSTANCE_URL from '../instance';

export async function postReview(reservationId: number, content: string, rating: number) {
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
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    },
  );
  return response.data;
}
