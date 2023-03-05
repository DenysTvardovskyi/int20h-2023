import React, { FC } from "react";
import { Card, Result, Tag } from "antd";
import { Account as AccountLayout } from "../../layouts";
import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import styles from "../SearchPeople/SearchPeople.module.scss";
import { UserAvatar } from "../../components/Avatar";
import { ProjectCard } from "../../components/ProjectCard";
const { Search } = Input;

interface IProps {}

const onSearch = (value: string) => console.log(value);

export const SearchProjects: FC<IProps> = (props: IProps): JSX.Element => {
    const result = [
        {
            id: "123",
            title: "123",
            description: "123",
            rating: 123,
        },
    ];

    return (
        <AccountLayout>
            <h4>Search for project</h4>
            <Search placeholder='input search text' onSearch={onSearch} enterButton />
            {!Boolean(result.length) ? (
                <Result icon={<SearchOutlined />} title='Nothing found' />
            ) : (
                <div className={styles.searchGrid}>
                    {result.map((item) => (
                        <ProjectCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </AccountLayout>
    );
};
