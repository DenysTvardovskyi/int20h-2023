import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Profile.module.scss";
import { Tabs, TabsProps, Upload } from "antd";
import { ProfileEditor } from "./ProfileEditor";
import { ProfileView } from "./ProfileView";

interface IProps {}

export const Profile: FC<IProps> = (props: IProps): JSX.Element => {
    const items: TabsProps["items"] = [
        {
            key: "view",
            label: `View mode`,
            children: <ProfileView />,
        },
        {
            key: "editor",
            label: `Editor mode`,
            children: <ProfileEditor />,
        },
    ];

    return (
        <AccountLayout>
            <Tabs defaultActiveKey='view' items={items} />
        </AccountLayout>
    );
};
