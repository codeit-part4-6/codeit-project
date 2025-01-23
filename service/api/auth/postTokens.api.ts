import INSTANCE_URL from '../instance';

export async function postSignin(refreshToken: string) {
  const response = await INSTANCE_URL.post(
    "auth/tokens",
    {},
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
}
