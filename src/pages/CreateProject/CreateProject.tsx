import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./CreateProject.module.scss";
import { Button, Empty, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../components/Loader/Loader.animation.json";

interface IProps {}

export const CreateProject: FC<IProps> = (props: IProps): JSX.Element => {
    const navigate = useNavigate();

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

                    <Form
                        name='basic'
                        initialValues={{ name: "", github: "" }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete='off'
                    >
                        <Form.Item
                            name='username'
                            rules={[{ required: true, message: "Please input project name!" }]}
                        >
                            <Input placeholder='Project name' />
                        </Form.Item>

                        <Form.Item
                            name='github'
                            rules={[{ required: true, message: "Please input github repo link!" }]}
                        >
                            <Input placeholder={"Github repository"} />
                        </Form.Item>

                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                Create project
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </AccountLayout>
    );
};
