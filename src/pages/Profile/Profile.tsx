import React, { FC } from "react";
import type { MenuProps } from "antd";
import { UserOutlined, ProjectOutlined, InboxOutlined, FireOutlined } from "@ant-design/icons";
import { Account as AccountLayout } from "../../layouts";
import { Menu } from "antd";
import styles from "./Profile.module.scss";

interface IProps {}

export const Profile: FC<IProps> = (props: IProps): JSX.Element => {
    type MenuItem = Required<MenuProps>["items"][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: "group",
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem("For you", "1", <FireOutlined />),
        getItem("Requests", "2", <InboxOutlined />),
        getItem("My projects", "3", <ProjectOutlined />),
        getItem("Profile", "4", <UserOutlined />),
        getItem("Log out", "5", null),
    ];

    return (
        <AccountLayout>
            <div className={styles.navigation}>
                <Menu
                    defaultSelectedKeys={["1"]}
                    mode='inline'
                    inlineCollapsed={false}
                    items={items}
                />
            </div>
            <div className={styles.profileContent}></div>
        </AccountLayout>
    );
};
