import { useHttp } from "utils/http";
import { useQuery } from "@tanstack/react-query";
import { Project } from "types/project";
// import { cleanObject } from "utils/index";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();

  return useQuery<Project[]>(["projects", param], () =>
    client("projects", { data: param })
  );
};
