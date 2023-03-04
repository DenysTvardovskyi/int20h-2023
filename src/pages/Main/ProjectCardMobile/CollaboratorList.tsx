import React, { FC } from "react";
import { Avatar, List } from "antd";
import { ICollaborator } from "../../../models/projectCard";

interface IProps {
  collaborators: ICollaborator[];
}

export const CollaboratorList: FC<IProps> = ({ collaborators }: IProps): JSX.Element => {
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 320,
        overflowY: "auto",
      }}
    >
      <List
        dataSource={collaborators}
        renderItem={(item) => (
          <List.Item key={item.username}>
            <List.Item.Meta
              avatar={<Avatar src={item.profileImg} />}
              title={<p style={{ margin: "4px 0" }}>{item.username}</p>}
            />
            <div style={{ marginRight: 12 }}>{item.role}</div>
          </List.Item>
        )}
      />
    </div>
  );
};