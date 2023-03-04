import React, { FC, useState } from "react";
import { Landing as LandingLayout } from "../../layouts";
import styles from "./Main.module.scss";
import { IProjectCard } from "../../models/projectCard";
import { ProjectCardMobile } from "./ProjectCardMobile";
import { TechnologiesSelect } from "./TechnologiesSelect";

interface IProps {}

export const Main: FC<IProps> = (props: IProps): JSX.Element => {
  const [ projects, setProjects ] = useState<IProjectCard[]>([
    {
      id: "qwe",
      title: "JWP",
      rating: 30123,
      linkToLive: "",
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
    },
  ]);
  const [ applied, setApplied ] = useState<IProjectCard[]>([]);

  const handleDecline = (project: IProjectCard) => {
    setProjects((prevState) => prevState.filter((i) => i.id !== project.id));
  };

  const handleApply = (project: IProjectCard) => {
    setProjects((prevState) => prevState.filter((i) => i.id !== project.id));
    setApplied((prevState) => [ ...prevState, project ]);
  };

  const handleChangeTechnologiesStack = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <LandingLayout>
      <div className={styles.container}>
        <div>
          <div>
            <TechnologiesSelect onChange={handleChangeTechnologiesStack} />
          </div>
          <div style={{ margin: "16px 0", textAlign: "center" }}>
            Projects to apply: {projects.length}
          </div>
        </div>
        {window.innerWidth <= 991
          ? (<ProjectCardMobile projects={projects} onApply={handleApply} onDecline={handleDecline} />)
          : <div>main desktop</div>}
      </div>

    </LandingLayout>
  );
};
