import React, { FC, useState } from "react";
import { Account as AccountLayout } from "../../layouts";
import { IProject } from "../../models/project";
import { shortenNumber } from "../../utils/shortenNumber";
import {
  CheckCircleOutlined,
  DesktopOutlined,
  GithubOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Avatar, Card, List } from "antd";
import { InfoTab } from "../Main/ProjectCardMobile/InfoTab";
import { CollaboratorList } from "../Main/ProjectCardMobile/CollaboratorList";
import styles from "./Project.module.scss";
import { useAuthorization } from "../../hooks";

interface IProps {}

const TAB_LIST = [
  {
    key: "info",
    tab: "Info",
  },
  {
    key: "about",
    tab: "About",
  },
  {
    key: "settings",
    tab: "Settings",
  },
];

const { Meta } = Card;
export const Project: FC<IProps> = (props: IProps): JSX.Element => {
  const { isAuthorized, user } = useAuthorization();

  const [ project, setProject ] = useState<IProject>({
    id: "qwe",
    title: "JWP",
    rating: 30123,
    linkToLive: "dasdas",
    description: "Description",
    requirements: "req",
    stack: [
      {
        title: "React",
        category: "front-end",
      },
    ],
    collaborators: [
      {
        username: "Nodari",
        profileImg: "",
        role: "FrontEnd",
      },
    ],
    owner: {
      id: "312",
      username: "Denys",
      profileImg: "",
      quote: "sleeping...",
    },
    gitHubInfo: {
      repoUrl: "dasdasdas",
    },
    status: "open",
    goals: [
      {
        title: "finish in time",
        deadline: new Date(),
        status: "new",
      },
      {
        title: "dead in side",
        deadline: new Date(),
        status: "done",
      },
      {
        title: "eat",
        deadline: new Date(),
        status: "new",
      },
    ],
    tasks: [
      {
        title: "Add log in",
        status: "new",
      },
      {
        title: "Add log in",
        status: "in-progress",
      },
      {
        title: "Add log in",
        status: "done",
      },
    ],
  });
  const [ activeTab, setActiveTab ] = useState<"info" | "about" | "settings">("info");

  const onTabChange = (key: string) => {
    setActiveTab(key as "info" | "settings" | "about");
  };

  return (
    <AccountLayout>
      <div className={styles.profileContent}>
        <Card
          title={project.title}
          style={{ overflowY: "auto" }}
          activeTabKey={activeTab}
          extra={<div className={styles.extraHead}>
            <div>{shortenNumber(project.rating)} {0 < 1 ? <StarOutlined /> : <StarFilled />}</div>
            {project.gitHubInfo.repoUrl &&
              <a href={project.gitHubInfo.repoUrl} title="GitHub" target="_blank"><GithubOutlined /></a>}
            {project.linkToLive &&
              <a href={project.linkToLive} target="_blank" title="Check Live"><DesktopOutlined /></a>}
          </div>}
          tabList={(isAuthorized && user.id === project.owner.id) ? TAB_LIST : TAB_LIST.filter((i) => i.key !==
            "settings")}
          onTabChange={onTabChange}
        >
          {activeTab === "info" && (
            <>
              <div className={styles.upperBlock}>
                <div>
                  <div>
                    <span>GitHub Stat</span>
                  </div>
                  <div>
                    <span>Tasks</span>
                    <div
                      id="scrollableDiv"
                      style={{
                        height: 320,
                        overflowY: "auto",
                        overflowX: "hidden",
                      }}
                    >
                      <List
                        dataSource={project.tasks}
                        renderItem={(item) => (
                          <List.Item key={item.title}>
                            <Meta
                              title={item.title}
                              description={item.status}
                            />
                            <div>
                              {item.status === "done" && <CheckCircleOutlined type="success" />}
                              {item.status === "new" && <InfoCircleOutlined />}
                              {item.status === "in-progress" && <LoadingOutlined />}
                            </div>
                          </List.Item>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Collaborators</span>
                    <CollaboratorList collaborators={project.collaborators} />
                  </div>
                  <div>
                    <span>Goals</span>
                    <div
                      id="scrollableDiv"
                      style={{
                        height: 320,
                        overflowY: "auto",
                      }}
                    >
                      <List
                        dataSource={project.goals}
                        renderItem={(item) => (
                          <List.Item key={item.title}>
                            <Meta
                              style={{ textDecoration: item.status === "done" ? "line-through" : "none" }}
                              title={item.title}
                              description={new Date(item.deadline).toLocaleString()}
                            />
                          </List.Item>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>

              </div>
            </>
          )}
          {activeTab === "about" && (
            <div>
              <div>
                <span>Owner</span>
                <Meta
                  avatar={<Avatar src={project.owner.profileImg} />}
                  title={project.owner.username}
                  style={{ marginTop: 16 }}
                  description={project.owner.quote}
                />
              </div>
              <div style={{ marginTop: 16 }}>
                <span>General Info</span>
                <InfoTab project={project} />
              </div>
            </div>

          )}
          {
            activeTab === "settings" && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                add collaborator
                change live url
                change github url
              </div>
            )
          }
        </Card>
      </div>
    </AccountLayout>
  );
};
