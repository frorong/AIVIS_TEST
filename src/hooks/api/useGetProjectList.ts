import { useQuery } from "@tanstack/react-query";

import { get, projectQueryKeys, projectUrl } from "@/libs";
import type { ProjectType } from "@/types";
import { minutesToMs } from "@/utils";

import type { UseQueryOptions } from "@tanstack/react-query";

export const useGetProjectList = (
  initialData?: ProjectType,
  options?: Omit<UseQueryOptions<ProjectType>, "queryKey">
) =>
  useQuery({
    queryKey: projectQueryKeys.getProjectListKey(),
    queryFn: () => get<ProjectType>(projectUrl.getProjectListUrl()),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
    initialData: initialData,
    ...options,
  });
