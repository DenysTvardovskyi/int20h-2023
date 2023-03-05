import React, { FC, useState } from "react";
import styles from "./Profile.module.scss";
import { shortenNumber } from "../../utils/shortenNumber";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { ProjectCard } from "../../components/ProjectCard";
import { UserAvatar } from "../../components/Avatar";

interface IProps {}

export const ProfileView: FC<IProps> = (props: IProps): JSX.Element => {
    const onFinish = (values: any) => {
        console.log("Failed:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const profileData = {
        image: "",
        userName: "Daniel123123",
        firstName: "Daniel",
        lastName: "Penis",
        email: "123@123.com",
        github: "git",
        linkedin: "link",
        experience: "2",
    };

    const data = [
        {
            id: "qw233333e",
            title: "JWP",
            rating: 30123,
            linkToLive: "",
            description: "Description",
        },
        {
            id: "qww2e",
            title: "JWP",
            rating: 30123,
            linkToLive: "",
            description: "Description",
        },
        {
            id: "qwe2",
            title: "JWP",
            rating: 30123,
            linkToLive: "",
            description: "Description",
        },
        {
            id: "qwe",
            title: "JWP",
            rating: 30123,
            linkToLive: "",
            description: "Description",
        },
        {
            id: "qw313e",
            title: "JWP",
            rating: 30123,
            linkToLive: "",
            description: "Description",
        },
    ];

    return (
        <div className={styles.profileContent}>
            <div className={styles.profileContainerLarge}>
                <h4>First name and last name</h4>
                <div className={styles.profileInfo}>
                    <UserAvatar
                        className={styles.avatar}
                        image={profileData.image}
                        lastName={profileData.lastName}
                        firstName={profileData.firstName}
                    />
                    <div>
                        <p>Username: {profileData.userName}</p>
                        <p>Email: {profileData.email}</p>
                        <p>Github: {profileData.github ? profileData.github : "-"}</p>
                        <p>Linkedin: {profileData.linkedin ? profileData.linkedin : "-"}</p>
                        <p>Experience: {profileData.experience}</p>
                    </div>
                </div>
                <div className={styles.profileSection}>
                    <h5>Last 3 projects:</h5>
                    <div className={styles.projectsGrid}>
                        {data.slice(0, 3).map((item) => (
                            <ProjectCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.profileSection}>
                    <h5>Starred:</h5>
                    <div className={styles.projectsGrid}>
                        {data.map((item, index) => (
                            <ProjectCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.profileSection}>
                    <h5>Collaborates in:</h5>
                    <div className={styles.projectsGrid}>
                        {data.map((item, index) => (
                            <ProjectCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
