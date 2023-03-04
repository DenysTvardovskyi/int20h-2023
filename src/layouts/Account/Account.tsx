import React, { FC } from "react";
import styles from "./Account.module.scss";
import { Menu, MenuProps } from "antd";
import { FireOutlined, InboxOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";

interface IProps {
    children?: React.ReactNode | React.ReactNode[];
}

export const Account: FC<IProps> = ({ children }: IProps): JSX.Element => {
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
        <div className={styles.accountLayout}>
            <div className={styles.navigation}>
                <Menu
                    className={styles.navigationEl}
                    defaultSelectedKeys={["1"]}
                    mode='inline'
                    inlineCollapsed={false}
                    items={items}
                />
            </div>
            <div className={styles.accountContent}>{children}</div>
        </div>
    );
};
