import INSTANCE_URL from '../instance';
import {SignupBody, SignupResponse} from '../../../types/postSignup.types';

// 회원가입
export async function apiSignup(body: SignupBody): Promise<SignupResponse> {
  const response = await INSTANCE_URL.post('/users', body);
  return response.data;
}
