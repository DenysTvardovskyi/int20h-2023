import React, { FC } from "react";
import { Card, Result, Tag } from "antd";
import { Account as AccountLayout } from "../../layouts";
import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { boolean } from "yup";
const { Search } = Input;

interface IProps {}

const onSearch = (value: string) => console.log(value);

export const SearchPeople: FC<IProps> = (props: IProps): JSX.Element => {
    const result = [];

    return (
        <AccountLayout>
            <h4>Search for people</h4>
            <Search placeholder='input search text' onSearch={onSearch} enterButton />

            {!Boolean(result.length) && <Result icon={<SearchOutlined />} title='Nothing found' />}
        </AccountLayout>
    );
};
