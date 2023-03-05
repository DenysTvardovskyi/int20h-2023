import React, { FC, useEffect, useState } from "react";
import styles from "./Account.module.scss";
import { Menu, MenuProps } from "antd";
import {
    FireOutlined,
    InboxOutlined,
    ProjectOutlined,
    UserOutlined,
    ImportOutlined,
    SearchOutlined,
    FileSearchOutlined,
    FileAddOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../components/Loader/Loader.animation.json";

interface IProps {
    children?: React.ReactNode | React.ReactNode[];
}

export const Account: FC<IProps> = ({ children }: IProps): JSX.Element => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth <= 991;

    const desktopMenu = [
        {
            link: "/for-you",
            icon: <FireOutlined />,
            text: "For you",
        },
        {
            link: "/requests",
            icon: <InboxOutlined />,
            text: "Requests",
        },
        {
            link: "/projects",
            icon: <ProjectOutlined />,
            text: "Projects",
        },
        {
            link: "/create-project",
            icon: <FileAddOutlined />,
            text: "Add project",
        },
        {
            link: "/profile",
            icon: <UserOutlined />,
            text: "Profile",
        },
        {
            link: "/search-projects",
            icon: <FileSearchOutlined />,
            text: "Search projects",
        },
        {
            link: "/search-people",
            icon: <SearchOutlined />,
            text: "Search people",
        },
        {
            link: "/logout",
            icon: <ImportOutlined />,
            text: "Log out",
        },
    ];

    const mobileMenu = [
        {
            link: "/requests",
            icon: <InboxOutlined />,
            text: "Requests",
        },
        {
            link: "/projects",
            icon: <ProjectOutlined />,
            text: "Projects",
        },
        {
            link: "/for-you",
            icon: <FireOutlined />,
            text: "For you",
        },
        {
            link: "/profile",
            icon: <UserOutlined />,
            text: "Profile",
        },
        {
            link: "/search-projects",
            icon: <FileSearchOutlined />,
            text: "Search projects",
        },
        {
            link: "/search-people",
            icon: <SearchOutlined />,
            text: "Search people",
        },
        {
            link: "/logout",
            icon: <ImportOutlined />,
            text: "Log out",
        },
    ];

    const getMenu = () => (isMobile ? mobileMenu : desktopMenu);

    return (
        <div className={styles.accountLayout}>
            <div className={styles.navigation}>
                <Menu
                    className={styles.navigationWrap}
                    defaultSelectedKeys={["1"]}
                    mode={isMobile ? "horizontal" : "inline"}
                    inlineCollapsed={isMobile}
                    selectedKeys={[location.hash.replace("#", "")]}
                    onClick={onClick}
                >
                    {!isMobile && <Player src={animation} style={{ width: 100 }} autoplay loop />}
                    {getMenu().map((item) => (
                        <Menu.Item key={item.link}>
                            <NavLink to={item.link}>
                                {item.icon}
                                <span>{item.text}</span>
                            </NavLink>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
            <div className={styles.accountContent}>{children}</div>
        </div>
    );
};
