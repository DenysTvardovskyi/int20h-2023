import React, { FC } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Account as AccountLayout } from "../../layouts";
import { Avatar, Button, Form, Input, Select, Upload } from "antd";
import styles from "./Profile.module.scss";

interface IProps {}

export const ProfileEditor: FC<IProps> = (props: IProps): JSX.Element => {
    const onFinish = (values: any) => {
        console.log("Failed:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const profileData = {
        userName: "Daniel123123",
        image: false,
        firstName: "Daniel",
        lastName: "Penis",
        email: "123@123.com",
        github: "git",
        linkedin: "link",
        experience: "2",
    };

    return (
        <div className={styles.profileContent}>
            <div className={styles.profileContainer}>
                {profileData.image ? (
                    <Avatar
                        className={styles.avatar}
                        src={
                            "https://images.pexels.com/photos/11785073/pexels-photo-11785073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                    />
                ) : (
                    <Avatar className={styles.avatar}>U</Avatar>
                )}

                <h5>Update account</h5>
                <Form.Item>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload new avatar</Button>
                    </Upload>
                </Form.Item>
                <Form
                    name='basic'
                    initialValues={profileData}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item name='firstName'>
                        <Input placeholder={"First name"} />
                    </Form.Item>

                    <Form.Item name='lastName'>
                        <Input placeholder={"Last name"} />
                    </Form.Item>

                    <Form.Item name='email'>
                        <Input placeholder='E-mail' />
                    </Form.Item>

                    <Form.Item name='github'>
                        <Input placeholder={"Github"} />
                    </Form.Item>

                    <Form.Item name='linkedin'>
                        <Input placeholder={"Linkedin"} />
                    </Form.Item>

                    <Form.Item name='experience'>
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
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Upload your cv</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Update profile!
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
