import React from "react";
import { useState, useEffect } from "react";
import { SearchPanel } from "./serch-panel";
import { List } from "./list";
import { cleanObject, useMount, useDebounce } from "../../utils";
import { useProjectModal, useProjectsSearchParams } from "./until";

import { ProjectModal } from "./project-modal";
import {
  ButtonNoPadding,
  ErrorBox,
  Row,
  ScreenContainer,
} from "components/lib";
import qs from "qs";
import { useUsers } from "utils/user";
// import { useProjects } from "utils/projects";
import { useAsync } from "utils/use-async";
import { Project } from "types/project";
import { useHttp } from "utils/http";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const { open } = useProjectModal();
  const client = useHttp();
  const [param1, setParam1] = useProjectsSearchParams();

  console.log(param1);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 500);

  const { run, isLoading, error, data: list } = useAsync<Project[]>();
  const { data: users } = useUsers();

  useEffect(() => {
    run(client("projects", { data: cleanObject(debouncedParam) }));
  }, [debouncedParam]);
  return (
    <ScreenContainer>
      <Row marginBottom={2} between={true}>
        <h1>项目列表</h1>
        <ButtonNoPadding type={"link"} onClick={open}>
          创建项目
        </ButtonNoPadding>
      </Row>
      <SearchPanel param={param} setParam={setParam} />
      <List users={users || []} dataSource={list || []} />
      <ProjectModal />
    </ScreenContainer>
  );
};
