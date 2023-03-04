import React, { FC, useState } from "react";
import styles from "./Profile.module.scss";
import { Avatar, Card } from "antd";
import { shortenNumber } from "../../utils/shortenNumber";
import { StarFilled, StarOutlined } from "@ant-design/icons";

interface IProps {}

export const ProfileView: FC<IProps> = (props: IProps): JSX.Element => {
    const onFinish = (values: any) => {
        console.log("Failed:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const profileData = {
        image: false,
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
                    {profileData.image ? (
                        <Avatar
                            className={styles.avatar}
                            src={
                                "https://images.pexels.com/photos/11785073/pexels-photo-11785073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            }
                        />
                    ) : (
                        <Avatar className={styles.avatar}>
                            {profileData.firstName[0]}
                            {profileData.lastName[0]}
                        </Avatar>
                    )}
                    <div>
                        <p>Username: {profileData.userName}</p>
                        <p>Email: {profileData.email}</p>
                        <p>Github: {profileData.github ? profileData.github : "-"}</p>
                        <p>Linkedin: {profileData.linkedin ? profileData.linkedin : "-"}</p>
                        <p>Experience: {profileData.experience}</p>
                    </div>
                </div>
                <div className={styles.profileSection}>
                    <h5>Your last 3 projects:</h5>
                    <div className={styles.projectsGrid}>
                        {data.slice(0, 3).map((item) => (
                            <Card
                                key={item.id}
                                extra={
                                    <div>
                                        {shortenNumber(item.rating)}
                                        {0 < 1 ? (
                                            <StarOutlined role='button' />
                                        ) : (
                                            <StarFilled role='button' />
                                        )}
                                        <a href={item.linkToLive} style={{ marginLeft: 5 }}>
                                            More
                                        </a>
                                    </div>
                                }
                            >
                                <p>
                                    <strong>{item.title}</strong>
                                </p>
                                <p>{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className={styles.profileSection}>
                    <h5>You starred:</h5>
                    <div className={styles.projectsGrid}>
                        {data.map((item, index) => (
                            <Card
                                key={item.id}
                                extra={
                                    <div>
                                        {shortenNumber(item.rating)}
                                        {0 < 1 ? (
                                            <StarOutlined role='button' />
                                        ) : (
                                            <StarFilled role='button' />
                                        )}
                                        <a href={item.linkToLive} style={{ marginLeft: 5 }}>
                                            More
                                        </a>
                                    </div>
                                }
                            >
                                <p>
                                    <strong>{item.title}</strong>
                                </p>
                                <p>{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className={styles.profileSection}>
                    <h5>You collaborate in:</h5>
                    <div className={styles.projectsGrid}>
                        {data.map((item, index) => (
                            <Card
                                key={item.id}
                                extra={
                                    <div>
                                        {shortenNumber(item.rating)}
                                        {0 < 1 ? (
                                            <StarOutlined role='button' />
                                        ) : (
                                            <StarFilled role='button' />
                                        )}
                                        <a href={item.linkToLive} style={{ marginLeft: 5 }}>
                                            More
                                        </a>
                                    </div>
                                }
                            >
                                <p>
                                    <strong>{item.title}</strong>
                                </p>
                                <p>{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
