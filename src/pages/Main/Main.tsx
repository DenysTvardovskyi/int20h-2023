import React, { FC, useEffect, useState } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Main.module.scss";
import { IProjectCard } from "../../models/projectCard";
import { ProjectCardMobile } from "./ProjectCardMobile";
import { TechnologiesSelect } from "./TechnologiesSelect";
import { ProjectCardDesktop } from "./ProjectCardDesktop";
import { useApi, useAuthorization } from "../../hooks";

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
      technologies: [
        {
          name: "React",
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
  const [ windowWidth, setWindowWidth ] = useState<number>(window.innerWidth);

  const api = useApi();
  const { user } = useAuthorization();

  const handleDecline = (project: IProjectCard) => {
    setProjects((prevState) => prevState.filter((i) => i.id !== project.id));
  };

  const handleApply = (project: IProjectCard) => {
    api.request.apply({ UserId: user.id, ProjectId: project.id })
      .then(() => setProjects((prevState) => prevState.filter((i) => i.id !== project.id)));
  };

  const handleChangeTechnologiesStack = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AccountLayout>
      <div className={styles.container}>
        <div>
          <div>
            <TechnologiesSelect onChange={handleChangeTechnologiesStack} />
          </div>
          <div style={{ margin: "16px 0", textAlign: "center" }}>
            Projects to apply: {projects.length}
          </div>
        </div>
        {windowWidth <= 991
          ? (<ProjectCardMobile projects={projects} onApply={handleApply} onDecline={handleDecline} />)
          : (<ProjectCardDesktop projects={projects} onApply={handleApply} onDecline={handleDecline} />)}
      </div>
    </AccountLayout>
  );
};
