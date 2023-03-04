import React, { FC } from "react";
import { Avatar, Button, Card, Empty } from "antd";
import { IProjectCard } from "../../../models/projectCard";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectCardDesktop.module.scss";
import { shortenNumber } from "../../../utils/shortenNumber";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { InfoTab } from "../ProjectCardMobile/InfoTab";
import { CollaboratorList } from "../ProjectCardMobile/CollaboratorList";

interface IProps {
  projects: IProjectCard[];
  onDecline: (project: IProjectCard) => void;
  onApply: (project: IProjectCard) => void;
}

const { Meta } = Card;

export const ProjectCardDesktop: FC<IProps> = ({ projects, onApply, onDecline }: IProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.cards}>
      {projects.map((project, index) => {
        return (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.card}>
              <Card
                title={project.title}
                extra={(
                  <div>{
                    shortenNumber(project.rating)} {0 < 1
                    ? <StarOutlined role="button" />
                    : <StarFilled role="button" />
                  }</div>
                )}
              >
                <Meta
                  avatar={<Avatar src={project.owner.profileImg} />}
                  title={project.owner.username}
                  style={{ marginTop: 16 }}
                  description={project.owner.quote}
                />
                <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                  {!!project.linkToLive && <a href={project.linkToLive} target="_blank">view demo</a>}
                </div>
                <div className={styles.info}>
                  <div>
                    <span>Info</span>
                    <InfoTab project={project} />
                  </div>
                  <div>
                    <span>Collaborators</span>
                    <CollaboratorList collaborators={project.collaborators} />
                  </div>
                </div>
                <div>
                  <Button type="default" onClick={() => onDecline(project)}>Decline</Button>
                  <Button type="primary" style={{ marginLeft: 8 }} onClick={() => onApply(project)}>Apply</Button>
                </div>
              </Card>
            </div>
          </div>
        );
      })}
      {!projects.length && (
        <Empty description="No more projects. Come back later!">
          <Button onClick={() => navigate("/projects")} type="primary">Projects</Button>
        </Empty>
      )}
    </div>
  );
};