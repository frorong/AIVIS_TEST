import { useMutation } from "@tanstack/react-query";

import { authQueryKeys, authUrl, post } from "@/libs";
import type { LoginType, TokenType } from "@/types";

import type { UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export const usePostLogin = (
  options?: UseMutationOptions<TokenType, AxiosError, LoginType>
) =>
  useMutation({
    mutationKey: authQueryKeys.loginKey(),
    mutationFn: (userInfo: LoginType) =>
      post<TokenType>(authUrl.loginUrl(), userInfo),
    ...options,
  });
