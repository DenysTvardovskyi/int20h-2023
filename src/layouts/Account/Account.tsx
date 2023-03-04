import React, { FC } from "react";
import styles from "./Account.module.scss";
import { Menu, MenuProps } from "antd";
import { FireOutlined, InboxOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface IProps {
    children?: React.ReactNode | React.ReactNode[];
}

export const Account: FC<IProps> = ({ children }: IProps): JSX.Element => {
    type MenuItem = Required<MenuProps>["items"][number];
    const navigate = useNavigate();

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
        getItem("For you", "/for-you", <FireOutlined />),
        getItem("Requests", "/requests", <InboxOutlined />),
        getItem("My projects", "/projects", <ProjectOutlined />),
        getItem("Profile", "/profile", <UserOutlined />),
        getItem("Log out", "/logout", null),
    ];

    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key);
    };

    return (
        <div className={styles.accountLayout}>
            <div className={styles.navigation}>
                <Menu
                    className={styles.navigationEl}
                    defaultSelectedKeys={["1"]}
                    mode='inline'
                    inlineCollapsed={false}
                    items={items}
                    onClick={onClick}
                />
            </div>
            <div className={styles.accountContent}>{children}</div>
        </div>
    );
};
