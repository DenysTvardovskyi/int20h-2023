import React, { FC } from "react";
import styles from "../Main.module.scss";
import { Button, Empty } from "antd";
import { ProjectCard } from "./ProjectCard";
import { IProjectCard } from "../../../models/projectCard";
import { useNavigate } from "react-router-dom";

interface IProps {
  projects: IProjectCard[];
  onDecline: (project: IProjectCard) => void;
  onApply: (project: IProjectCard) => void;
}

export const ProjectCardMobile: FC<IProps> = ({ projects, onDecline, onApply }: IProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.cards}>
      {projects.map((project, index) => {
        return (
          <div key={index} className={styles.cardWrapper}>
            <ProjectCard
              project={project}
              onDecline={onDecline}
              onApply={onApply}
            />
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