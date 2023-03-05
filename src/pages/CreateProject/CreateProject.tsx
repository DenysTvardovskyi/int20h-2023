import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./CreateProject.module.scss";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { TechnologiesSelect } from "../Main/TechnologiesSelect";
import { useAuthorization } from "../../hooks";

interface IProps {}

export const CreateProject: FC<IProps> = (props: IProps): JSX.Element => {
  const navigate = useNavigate();
  const { user } = useAuthorization();

  const onFinish = ({ name, github }: { name: string; github: string }) => {
    console.log(name, github);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AccountLayout>
      <div className={styles.createProject}>
        <div className={styles.createProjectWrap}>
          <h4>Create project</h4>

          {user.gitHubAuthenticated ? <Form
            name="basic"
            initialValues={{ name: "", github: "", tech: [] }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[ { required: true, message: "Please input project name!" } ]}
            >
              <Input placeholder="Project name" />
            </Form.Item>

            <Form.Item
              name="github"
              rules={[ { required: true, message: "Please input github repo link!" } ]}
            >
              <Input placeholder={"Github repository"} />
            </Form.Item>

            <Form.Item
              name="selectTech"
              rules={[ { required: true, message: "Please provide technologies!" } ]}
            >
              <TechnologiesSelect onChange={(e) => console.log(e)} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create project
              </Button>
            </Form.Item>
          </Form> : <Button
            href="https://backend-flu4w4sfwa-lz.a.run.app/api/users/registration/github"
            target="_blank"
          >
            Verify with GitHub First
          </Button>}
        </div>
      </div>
    </AccountLayout>
  );
};
