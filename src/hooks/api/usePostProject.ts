import { useMutation } from "@tanstack/react-query";

import { projectUrl, projectQueryKeys, post } from "@/libs";
import type { ProjectRequestType, TokenType } from "@/types";

import type { UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export const usePostProject = (
  options?: UseMutationOptions<TokenType, AxiosError, ProjectRequestType>
) =>
  useMutation({
    mutationKey: projectQueryKeys.postProject(),
    mutationFn: (userInfo: ProjectRequestType) =>
      post<TokenType>(projectUrl.postProjectUrl(), userInfo),
    ...options,
  });
