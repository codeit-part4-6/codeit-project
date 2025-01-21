import { useMutation } from '@tanstack/react-query';
import INSTANCE_URL from '../instance';
import {
  SignupBody,
  SignupResponse,
} from './users.types';

// 회원가입
export function useSignup() {
  return useMutation({
    mutationFn: (body: SignupBody): Promise<SignupResponse> =>
      INSTANCE_URL.post<SignupResponse>('/users', body).then((res) => res.data)
  });
}