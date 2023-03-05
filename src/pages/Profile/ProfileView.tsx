import React, { FC, useState } from "react";
import styles from "./Profile.module.scss";
import { ProjectCard } from "../../components/ProjectCard";
import { UserAvatar } from "../../components/Avatar";

interface IProps {
    id: string;
    createdAt?: string;
    gitHubAuthenticated: boolean;
    email: string;
    userName: string;
    avatarImageLink: null | string;
    cvLink?: null | string;
    firstName: string;
    lastName: string;
    experience: string;
    projects: string[];
    requests: string[];
}

export const ProfileView: FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <div className={styles.profileContent}>
            <div className={styles.profileContainerLarge}>
                <h4>
                    {props?.firstName} {props?.lastName}
                </h4>
                <div className={styles.profileInfo}>
                    <UserAvatar className={styles.avatar} image={props?.avatarImageLink} />
                    <div>
                        <p>Username: {props?.userName}</p>
                        <p>Email: {props?.email}</p>
                        <p>Github: {props?.gitHubAuthenticated ? "YES" : "NO"}</p>
                        <p>
                            CV: <a href={props?.cvLink}>Open</a>
                        </p>
                        <p>Experience: {props?.experience}</p>
                    </div>
                </div>
                <div className={styles.profileSection}>
                    <h5>Last 3 projects:</h5>
                    <div className={styles.projectsGrid}>
                        {props?.projects?.slice(0, 3).map((item, index) => (
                            <ProjectCard
                                key={item?.id}
                                id={item?.id}
                                title={item?.title}
                                description={item?.description}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.profileSection}>
                    <h5>Collaborates in:</h5>
                    <div className={styles.projectsGrid}>
                        {props?.projects?.map((item, index) => (
                            <ProjectCard
                                key={item?.id}
                                id={item?.id}
                                title={item?.title}
                                description={item?.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
