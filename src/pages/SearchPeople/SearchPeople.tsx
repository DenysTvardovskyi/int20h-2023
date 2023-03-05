import React, { FC } from "react";
import { Card, Result, Tag } from "antd";
import { Account as AccountLayout } from "../../layouts";
import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
import styles from "./SearchPeople.module.scss";
import { UserAvatar } from "../../components/Avatar";

interface IProps {}

const onSearch = (value: string) => console.log(value);

export const SearchPeople: FC<IProps> = (props: IProps): JSX.Element => {
    const result = [
        {
            id: "someid",
            image: "123",
            firstName: "hello",
            lastName: "world",
        },
        {
            id: "someid",
            image: "",
            firstName: "hello",
            lastName: "world",
        },
        {
            id: "someid",
            image: "123",
            firstName: "hello",
            lastName: "world",
        },
        {
            id: "someid",
            image: "",
            firstName: "hello",
            lastName: "world",
        },
    ];

    return (
        <AccountLayout>
            <h4>Search for people</h4>
            <Search placeholder='input search text' onSearch={onSearch} enterButton />

            {!Boolean(result.length) ? (
                <Result icon={<SearchOutlined />} title='Nothing found' />
            ) : (
                <div className={styles.searchGrid}>
                    {result.map((item) => (
                        <Card
                            key={item.id}
                            className={styles.searchGridItem}
                            extra={<a href={item.id}>More</a>}
                        >
                            <div className={styles.userInfo}>
                                <UserAvatar
                                    image={item.image}
                                    lastName={item.lastName}
                                    firstName={item.firstName}
                                />
                                <p>
                                    <strong>{item.firstName + " " + item.lastName}</strong>
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </AccountLayout>
    );
};
