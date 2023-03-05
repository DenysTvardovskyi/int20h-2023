import React, { FC, useState } from "react";
import { Authorization as AuthorizationLayout, Landing as LandingLayout } from "../../layouts";
import { useApi, useAuthorization } from "../../hooks";
import { Button, Form, Input, message, Result, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadProps } from "antd/lib";
import animation from "../../components/Loader/Loader.animation.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

interface IProps {}

export const SignUp: FC<IProps> = (props: IProps): JSX.Element => {
    const api = useApi();
    const navigate = useNavigate();
    const { isAuthorized, setAuthorization } = useAuthorization();

    const onFinish = (values: any) => {
        api.authorization
            .signUp({ ...values })
            .then(({ refreshToken, jsonWebToken }) => {
                api.account.info
                    .get({ jsonWebToken, loader: "Getting user info..." })
                    .then((user) => setAuthorization(jsonWebToken, user, refreshToken));
            })
            .then(() => {
                navigate("/profile");
            });
    };

    return !isAuthorized ? (
        <AuthorizationLayout>
            <Player src={animation} style={{ width: 100 }} autoplay loop />
            <h5>Create account</h5>
            <Form
                name='basic'
                initialValues={{
                    username: "",
                    firstName: "",
                    lastName: "",
                    password: "",
                    confirmPassword: "",
                    email: "",
                    github: "",
                    linkedin: "",
                    experience: "",
                }}
                onFinish={onFinish}
                autoComplete='off'
            >
                <Form.Item
                    name='username'
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <Input placeholder={"Username"} />
                </Form.Item>

                <Form.Item
                    name='firstName'
                    rules={[{ required: true, message: "Please input your first name!" }]}
                >
                    <Input placeholder={"First name"} />
                </Form.Item>

                <Form.Item
                    name='lastName'
                    rules={[{ required: true, message: "Please input your last name!" }]}
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

                <Form.Item name='github'>
                    <Input placeholder={"Github"} />
                </Form.Item>

                <Form.Item name='linkedin'>
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

                <Form.Item
                    name='experience'
                    rules={[{ required: true, message: "Please select years of experience!" }]}
                >
                    <Select
                        placeholder='Years of experience'
                        options={[
                            { value: "", label: "Not chosen" },
                            { value: 0, label: "Less then a year" },
                            { value: 1, label: "1 - 2 years" },
                            { value: 2, label: "2 - 5 years" },
                            { value: 3, label: "More then 5 years" },
                        ]}
                    />
                </Form.Item>

                <Form.Item
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    <Button type='primary' htmlType='submit'>
                        Sign up!
                    </Button>
                    <p>or</p>
                    <Button
                        href='https://backend-flu4w4sfwa-lz.a.run.app/api/users/registration/github'
                        target='_blank'
                    >
                        Continue with GitHub
                    </Button>
                </Form.Item>
                <p>
                    Already have account? <a onClick={() => navigate("/sign-in")}>Sign in!</a>
                </p>
            </Form>
        </AuthorizationLayout>
    ) : (
        <LandingLayout>
            <Result
                status='success'
                title='You are authorized!'
                extra={[
                    <Button type='primary' onClick={() => navigate("/for-you")}>
                        Proceed
                    </Button>,
                ]}
            />
        </LandingLayout>
    );
};
