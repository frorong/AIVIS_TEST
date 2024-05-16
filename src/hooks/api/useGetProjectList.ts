import { useQuery } from "@tanstack/react-query";

import { get, projectQueryKeys, projectUrl } from "@/libs";
import type { ProjectType, sortType, orderType } from "@/types";
import { minutesToMs } from "@/utils";

import type { UseQueryOptions } from "@tanstack/react-query";

export const useGetProjectList = (
  max: number,
  offset: number,
  sort: sortType,
  order: orderType,
  initialData?: ProjectType,
  options?: Omit<UseQueryOptions<ProjectType>, "queryKey">
) =>
  useQuery({
    queryKey: projectQueryKeys.getProjectListKey(
      offset.toString(),
      max.toString(),
      sort,
      order
    ),
    queryFn: () =>
      get<ProjectType>(
        projectUrl.getProjectListUrl(offset.toString(), max.toString())
      ),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(5),
    initialData: initialData,
    ...options,
  });
