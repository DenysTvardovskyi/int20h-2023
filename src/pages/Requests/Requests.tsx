import React, { FC } from "react";
import { Card, Tag } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Requests.module.scss";

interface IProps {}

const statuses = {
    processing: (
        <Tag style={{ marginTop: 5 }} icon={<SyncOutlined spin />} color='processing'>
            Processing
        </Tag>
    ),
    approved: (
        <Tag style={{ marginTop: 5 }} icon={<CheckCircleOutlined spin />} color='success'>
            Approved
        </Tag>
    ),
    declined: (
        <Tag style={{ marginTop: 5 }} icon={<CloseCircleOutlined spin />} color='error'>
            Declined
        </Tag>
    ),
};

const data = [
    {
        name: "123123123",
        description: "!23123123",
        status: "processing",
    },
    {
        name: "123123123",
        description: "!23123123",
        status: "approved",
    },
    {
        name: "123123123",
        description: "!23123123",
        status: "declined",
    },
    {
        name: "123123123",
        description: "!23123123",
        status: "processing",
    },
];

const getStatus = (status: string) => {
    if (status === "declined") {
        return statuses.declined;
    }
    if (status === "processing") {
        return statuses.processing;
    }
    if (status === "approved") {
        return statuses.approved;
    }
};

export const Requests: FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <AccountLayout>
            <h4>My requests</h4>
            <div className={styles.requestsGrid}>
                {data.map((item) => (
                    <Card className={styles.requestsGridItem} key={item.name}>
                        <div>
                            <p>
                                <strong>Project name</strong>
                            </p>
                            <p>Project description</p>
                        </div>

                        <div>{getStatus(item.status)}</div>
                    </Card>
                ))}
            </div>
        </AccountLayout>
    );
};
