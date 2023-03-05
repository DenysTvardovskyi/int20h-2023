import React, { FC, useEffect, useState } from "react";
import { Card, Input, Result } from "antd";
import { Account as AccountLayout } from "../../layouts";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./SearchPeople.module.scss";
import { UserAvatar } from "../../components/Avatar";
import { Link } from "react-router-dom";
import { IUser } from "../../models";
import { useApi } from "../../hooks";

const { Search } = Input;

interface IProps {}

export const SearchPeople: FC<IProps> = (props: IProps): JSX.Element => {
  const [ search, setSearch ] = useState<string>("");
  const [ data, setData ] = useState<IUser[]>([]);
  const api = useApi();

  useEffect(() => {
    api.users.all({}).then((res) => setData(res.items));
  }, [ search ]);

  return (
    <AccountLayout>
      <h4>Search for people</h4>
      <Search placeholder="Search for people" onSearch={setSearch} enterButton />

      {!Boolean(data.length) ? (
        <Result icon={<SearchOutlined />} title="Nothing found" />
      ) : (
        <div className={styles.searchGrid}>
          {data.map((item) => (
            <Card
              key={item.id}
              className={styles.searchGridItem}
              extra={<Link to={`/profile/${item.id}`}>More</Link>}
            >
              <div className={styles.userInfo}>
                <UserAvatar
                  image={item.avatarImageLink}
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
