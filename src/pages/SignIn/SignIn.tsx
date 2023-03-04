import React, { FC } from "react";
import { Authorization as AuthorizationLayout, Landing as LandingLayout } from "../../layouts";
import { useApi, useAuthorization } from "../../hooks";
import { Button, Form, Input } from "antd";

interface IProps {}

export const SignIn: FC<IProps> = (props: IProps): JSX.Element | null => {
  const api = useApi();
  const { isAuthorized, setAuthorization } = useAuthorization();

  const onFinish = ({ username, password }: { username: string; password: string }) => {
    api.authorization.signIn({ username, password, loader: "Process sign in..." })
      .then(({ accessToken, refreshToken, user }) => {
        setAuthorization(accessToken, user, refreshToken);
      })
      .catch(() => {
        // TODO: Add notification!
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return !isAuthorized ? (
    <AuthorizationLayout>
      <Form
        name="basic"
        initialValues={{ username: "", password: "" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[ { required: true, message: "Please input your username!" } ]}
        >
          <Input placeholder="Username"/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[ { required: true, message: "Please input your password!" } ]}
        >
          <Input.Password placeholder={"Password"} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </AuthorizationLayout>
  ) : (
    <LandingLayout>
      <div>You are authorized!</div>
    </LandingLayout>
  );
};
