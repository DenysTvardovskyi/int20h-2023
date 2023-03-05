import React, { FC, useEffect, useState } from "react";
import { Input, Result } from "antd";
import { Account as AccountLayout } from "../../layouts";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./SearchProjects.module.scss";
import { ProjectCard } from "../../components/ProjectCard";
import { useApi } from "../../hooks";
import { IProject } from "../../models/project";

const { Search } = Input;

interface IProps {}

export const SearchProjects: FC<IProps> = (props: IProps): JSX.Element => {
  const [ search, setSearch ] = useState<string>("");
  const [ data, setData ] = useState<IProject[]>([]);
  const api = useApi();

  useEffect(() => {
    api.projects.all({ UserNameContains: search }).then((res) => setData(res.items));
  }, [ search ]);

  return (
    <AccountLayout>
      <h4>Search for project</h4>
      <Search placeholder="Search for projects" onSearch={setSearch} enterButton />
      {!Boolean(data.length) ? (
        <Result icon={<SearchOutlined />} title="Nothing found" />
      ) : (
        <div className={styles.searchGrid}>
          {data.map((item) => (
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
