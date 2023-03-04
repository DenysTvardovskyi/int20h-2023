import React, { FC } from "react";
import styles from "./Account.module.scss";
import { Menu, MenuProps } from "antd";
import { FireOutlined, InboxOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../components/Loader/Loader.animation.json";

interface IProps {
    children?: React.ReactNode | React.ReactNode[];
}

export const Account: FC<IProps> = ({ children }: IProps): JSX.Element => {
    const navigate = useNavigate();

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
                    selectedKeys={[location.hash.replace("#", "")]}
                    onClick={onClick}
                >
                    <Player src={animation} style={{ width: 100 }} autoplay loop />
                    <Menu.Item key='/for-you'>
                        <NavLink to='/for-you'>
                            <FireOutlined />
                            <span>For you</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='/requests'>
                        <NavLink to='/requests'>
                            <InboxOutlined />
                            <span>Requests</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='/projects'>
                        <NavLink to='/projects'>
                            <ProjectOutlined />
                            <span>Projects</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='/profile'>
                        <NavLink to='/profile'>
                            <UserOutlined />
                            <span>Profile</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='/logout'>
                        <NavLink to='/logout'>
                            <span>Log out</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </div>
            <div className={styles.accountContent}>{children}</div>
        </div>
    );
};
