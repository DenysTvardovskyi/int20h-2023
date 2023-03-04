import React, { FC } from "react";
import { Authorization as AuthorizationLayout, Landing as LandingLayout } from "../../layouts";
import { useApi, useAuthorization } from "../../hooks";
import { Button, Form, Input, Select } from "antd";
import animation from "../../components/Loader/Loader.animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

interface IProps {}

export const SignUp: FC<IProps> = (props: IProps): JSX.Element => {
    const api = useApi();
    const { isAuthorized } = useAuthorization();

    const onFinish = (values: any) => {
        console.log("Failed:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return !isAuthorized ? (
        <AuthorizationLayout>
            <Player src={animation} style={{ width: 100 }} autoplay loop />
            <h5>Create account</h5>
            <Form
                name='basic'
                initialValues={{ username: "", password: "", confirmPassword: "", email: "" }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
            >
                <Form.Item
                    name='username'
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <Input placeholder={"Username"} />
                </Form.Item>

                <Form.Item
                    name='First name'
                    rules={[{ required: true, message: "Please input your first name!" }]}
                >
                    <Input placeholder={"First name"} />
                </Form.Item>

                <Form.Item
                    name='First name'
                    rules={[{ required: true, message: "Please input your first name!" }]}
                >
                    <Input placeholder={"Last name"} />
                </Form.Item>

                <Form.Item
                    name='email'
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                    ]}
                >
                    <Input placeholder='E-mail' />
                </Form.Item>

                <Form.Item name='Github'>
                    <Input placeholder={"Github link"} />
                </Form.Item>

                <Form.Item name='Linkedin'>
                    <Input placeholder={"Linkedin"} />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Password' />
                </Form.Item>

                <Form.Item
                    name='confirm'
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("The two passwords that you entered do not match!"),
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirm Password' />
                </Form.Item>

                <Form.Item>
                    <Select
                        placeholder='Years of experience'
                        options={[
                            { value: "0", label: "Less then a year" },
                            { value: "1 - 2", label: "1 - 2 years" },
                            { value: "2 - 5", label: "2 - 5 years" },
                            { value: "> 5 years", label: "More then 5 years" },
                        ]}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Sign up!
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
