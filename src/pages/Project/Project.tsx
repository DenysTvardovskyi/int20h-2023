import React, { FC, useEffect, useState } from "react";
import { Account as AccountLayout } from "../../layouts";
import { IProject } from "../../models/project";
import { GithubOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import { InfoTab } from "../Main/ProjectCardMobile/InfoTab";
import { CollaboratorList } from "../Main/ProjectCardMobile/CollaboratorList";
import styles from "./Project.module.scss";
import { useApi, useAuthorization } from "../../hooks";
import { useParams } from "react-router-dom";

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
  const params = useParams();
  const api = useApi();
  const [ data, setData ] = useState<IProject>();

  useEffect(() => {
    if (!!params.id) {
      api.projects.one({ id: params.id }).then((res) => setData(res));
    } else {
      api.projects.one({ id: user.id }).then((res) => setData(res));
    }
  }, [ params ]);

  const goals = [
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
  ];
  const [ activeTab, setActiveTab ] = useState<"info" | "about" | "settings">("info");

  const onTabChange = (key: string) => {
    setActiveTab(key as "info" | "settings" | "about");
  };

  return (
    <AccountLayout>
      <div className={styles.profileContent}>
        {data && <Card
          title={data.title}
          style={{ overflowY: "auto" }}
          activeTabKey={activeTab}
          extra={<div className={styles.extraHead}>
            {data.link &&
              <a href={data.link} title="GitHub" target="_blank"><GithubOutlined /></a>}
          </div>}
          tabList={(isAuthorized && user.id === data.ownerId) ? TAB_LIST : TAB_LIST.filter((i) => i.key !==
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
                </div>
                <div>
                  <div>
                    <span>Collaborators</span>
                    <CollaboratorList collaborators={data.collaborators} />
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
                        dataSource={goals}
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
                <span>Owner Info</span>
              </div>
              <div style={{ marginTop: 16 }}>
                <span>General Info</span>
                <InfoTab
                  requirements={data?.requirements}
                  description={data?.description}
                  technologies={data.technologies}
                />
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
        </Card>}
      </div>
    </AccountLayout>
  );
};
