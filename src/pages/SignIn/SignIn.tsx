import React, { FC } from "react";
import { Authorization as AuthorizationLayout, Landing as LandingLayout } from "../../layouts";
import { useApi, useAuthorization } from "../../hooks";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../components/Loader/Loader.animation.json";

interface IProps {}

export const SignIn: FC<IProps> = (props: IProps): JSX.Element | null => {
  const api = useApi();
  const navigate = useNavigate();
  const { isAuthorized, setAuthorization } = useAuthorization();

  const onFinish = (values: any) => {
    api.authorization
      .signUp({ ...values })
      .then(({ refreshToken, jsonWebToken }) => {
        api.account.info.get({ jsonWebToken, loader: "Getting user info..." })
          .then((user) => setAuthorization(jsonWebToken, user, refreshToken));
      })
      .then(() => {
        navigate("/profile");
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return !isAuthorized ? (
    <AuthorizationLayout>
      <Player src={animation} style={{ width: 100 }} autoplay loop />
      <h5>Sign in</h5>
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
          <Input placeholder="Username" />
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
        <p>
          Have no account? <a onClick={() => navigate("/sign-up")}>Sign up!</a>
        </p>
      </Form>
    </AuthorizationLayout>
  ) : (
    <LandingLayout>
      <div>You are authorized!</div>
    </LandingLayout>
  );
};
