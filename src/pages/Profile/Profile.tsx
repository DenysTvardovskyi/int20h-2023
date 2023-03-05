import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import { Tabs, TabsProps, Upload } from "antd";
import { ProfileEditor } from "./ProfileEditor";
import { ProfileView } from "./ProfileView";
import { useParams } from "react-router-dom";

interface IProps {}

export const Profile: FC<IProps> = (props: IProps): JSX.Element => {
    const params = useParams();

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
            {params?.id ? <ProfileView /> : <Tabs defaultActiveKey='view' items={items} />}
        </AccountLayout>
    );
};
