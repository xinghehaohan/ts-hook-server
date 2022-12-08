import React from "react";
import { Divider, List, Popover, Typography } from "antd";
import styled from "@emotion/styled";
import { useProjects } from "utils/project";
import { ButtonNoPadding } from "components/lib";

export const ProjectPopover = () => {
  const { data: list, refetch } = useProjects();

  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
      <List>
        {list?.map((project) => (
          <List.Item key={project.id}>
            <List.Item.Meta title={project.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
      <ButtonNoPadding type="link" onClick={() => {}}></ButtonNoPadding>
    </ContentContainer>
  );

  return (
    <Popover
      onVisibleChange={() => refetch()}
      placement={"bottom"}
      content={content}
    >
      <span>项目</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
