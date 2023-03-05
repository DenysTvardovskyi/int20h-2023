import React, { FC, useEffect, useState } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Main.module.scss";
import { IProjectCard } from "../../models/projectCard";
import { ProjectCardMobile } from "./ProjectCardMobile";
import { TechnologiesSelect } from "./TechnologiesSelect";
import { ProjectCardDesktop } from "./ProjectCardDesktop/ProjectCardDesktop";

interface IProps {}

export const Main: FC<IProps> = (props: IProps): JSX.Element => {
    const [projects, setProjects] = useState<IProjectCard[]>([
        {
            id: "qwe",
            title: "Cookify",
            rating: 30123,
            linkToLive: "",
            description:
                "It had been a rough day. Things hadn't gone as planned and that meant Hannah got yelled at by her boss. It didn't even matter that it wasn't her fault. When things went wrong at work, Hannah got the blame no matter the actual circumstances. It wasn't fair, but there was little she could do without risking her job, and she wasn't in a position to do that with the plans she had.",
            requirements:
                "Matt told her to reach for the stars, but Veronica thought it was the most ridiculous advice she'd ever received.",
            stack: [
                {
                    title: "React",
                    category: "front-end",
                },
                {
                    title: "TypeScript",
                    category: "front-end",
                },
                {
                    title: "Webpack",
                    category: "front-end",
                },
                {
                    title: "Node.js",
                    category: "back-end",
                },
            ],
            collaborators: [
                {
                    username: "Nodari",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "FrontEnd",
                },
                {
                    username: "Denis",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "FrontEnd",
                },
                {
                    username: "Daniel",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "BackEnd",
                },
            ],
            owner: {
                id: "312",
                username: "Denys",
                profileImg:
                    "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                quote: "Fixing production...",
            },
        },
        {
            id: "qwe1",
            title: "EcoSpace",
            rating: 30123,
            linkToLive: "",
            description:
                "It had been a rough day. Things hadn't gone as planned and that meant Hannah got yelled at by her boss. It didn't even matter that it wasn't her fault. When things went wrong at work, Hannah got the blame no matter the actual circumstances. It wasn't fair, but there was little she could do without risking her job, and she wasn't in a position to do that with the plans she had.",
            requirements:
                "He slowly poured the drink over a large chunk of ice he has especially chiseled off a larger block. He didn't particularly like his drinks cold, but he knew that the drama of chiseling the ice and then pouring a drink over it looked far more impressive than how he actually liked it. It was all about image and he'd managed to perfect the image that he wanted to project.",
            stack: [
                {
                    title: "PHP",
                    category: "back-end",
                },
                {
                    title: "Wordpress",
                    category: "front-end",
                },
                {
                    title: "Javascript",
                    category: "front-end",
                },
                {
                    title: "Nginx",
                    category: "back-end",
                },
            ],
            collaborators: [
                {
                    username: "Nodari",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "FrontEnd",
                },
                {
                    username: "Denis",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "FrontEnd",
                },
                {
                    username: "Daniel",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "BackEnd",
                },
            ],
            owner: {
                id: "312",
                username: "Denys",
                profileImg:
                    "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                quote: "Fixing production...",
            },
        },
        {
            id: "qwe2",
            title: "ExperienceForge or Try not to die",
            rating: 30123,
            linkToLive: "",
            description: "Try not to die",
            requirements:
                "He slowly poured the drink over a large chunk of ice he has especially chiseled off a larger block. He didn't particularly like his drinks cold, but he knew that the drama of chiseling the ice and then pouring a drink over it looked far more impressive than how he actually liked it. It was all about image and he'd managed to perfect the image that he wanted to project.",
            stack: [
                {
                    title: "PHP",
                    category: "back-end",
                },
                {
                    title: "Wordpress",
                    category: "front-end",
                },
                {
                    title: "Javascript",
                    category: "front-end",
                },
                {
                    title: "Nginx",
                    category: "back-end",
                },
            ],
            collaborators: [
                {
                    username: "Nodari",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "FrontEnd",
                },
                {
                    username: "Denis",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "FrontEnd",
                },
                {
                    username: "Daniel",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "BackEnd",
                },
            ],
            owner: {
                id: "312",
                username: "Denys",
                profileImg:
                    "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
                quote: "Fixing production...",
            },
        },
        {
            id: "qwe4",
            title: "KysExpress.com",
            rating: 30123,
            linkToLive: "",
            description: "Try not to die",
            requirements:
                "He slowly poured the drink over a large chunk of ice he has especially chiseled off a larger block. He didn't particularly like his drinks cold, but he knew that the drama of chiseling the ice and then pouring a drink over it looked far more impressive than how he actually liked it. It was all about image and he'd managed to perfect the image that he wanted to project.",
            stack: [
                {
                    title: "PHP",
                    category: "back-end",
                },
                {
                    title: "Wordpress",
                    category: "front-end",
                },
                {
                    title: "Javascript",
                    category: "front-end",
                },
                {
                    title: "Nginx",
                    category: "back-end",
                },
            ],
            collaborators: [
                {
                    username: "Nodari",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "FrontEnd",
                },
                {
                    username: "Denis",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "FrontEnd",
                },
                {
                    username: "Daniel",
                    profileImg:
                        "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                    role: "BackEnd",
                },
            ],
            owner: {
                id: "312",
                username: "Denys",
                profileImg:
                    "https://www.cnet.com/a/img/resize/22b01fa0f0b66f2d66a7fa1b1306f974289bcb33/hub/2023/02/12/3e30ba7d-1fc3-44b3-ad02-85b4c69dc43e/the-flash-copy.png?auto=webp&fit=crop&height=1200&precrop=1638,920,x75,y0&width=1200",
                quote: "Fixing production...",
            },
        },

        {
            id: "qwe42123",
            title: "Die or Die",
            rating: 30123,
            linkToLive: "",
            description: "Die or Die",
            requirements:
                "He slowly poured the drink over a large chunk of ice he has especially chiseled off a larger block. He didn't particularly like his drinks cold, but he knew that the drama of chiseling the ice and then pouring a drink over it looked far more impressive than how he actually liked it. It was all about image and he'd managed to perfect the image that he wanted to project.",
            stack: [
                {
                    title: "Brainfuck",
                    category: "back-end",
                },
                {
                    title: "Chicken",
                    category: "front-end",
                },
            ],
            collaborators: [
                {
                    username: "Nodari",
                    profileImg:
                        "https://cdn.shopify.com/s/files/1/0017/7461/6627/collections/SpongeBob_SquarePants.jpg?v=1657679842",
                    role: "FrontEnd",
                },
                {
                    username: "Denis",
                    profileImg:
                        "https://cdn.shopify.com/s/files/1/0017/7461/6627/collections/SpongeBob_SquarePants.jpg?v=1657679842",
                    role: "FrontEnd",
                },
                {
                    username: "Daniel",
                    profileImg:
                        "https://cdn.shopify.com/s/files/1/0017/7461/6627/collections/SpongeBob_SquarePants.jpg?v=1657679842",
                    role: "BackEnd",
                },
            ],
            owner: {
                id: "312",
                username: "Denys",
                profileImg:
                    "https://cdn.shopify.com/s/files/1/0017/7461/6627/collections/SpongeBob_SquarePants.jpg?v=1657679842",
                quote: "Fixing production...",
            },
        },
    ]);

    const [applied, setApplied] = useState<IProjectCard[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleDecline = (project: IProjectCard) => {
        setProjects((prevState) => prevState.filter((i) => i.id !== project.id));
    };

    const handleApply = (project: IProjectCard) => {
        setProjects((prevState) => prevState.filter((i) => i.id !== project.id));
        setApplied((prevState) => [...prevState, project]);
    };

    const handleChangeTechnologiesStack = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <AccountLayout>
            <div className={styles.container}>
                <div>
                    <div>
                        <TechnologiesSelect onChange={handleChangeTechnologiesStack} />
                    </div>
                    <div style={{ margin: "16px 0", textAlign: "center" }}>
                        Projects to apply: {projects.length}
                    </div>
                </div>
                {windowWidth <= 991 ? (
                    <ProjectCardMobile
                        projects={projects}
                        onApply={handleApply}
                        onDecline={handleDecline}
                    />
                ) : (
                    <ProjectCardDesktop
                        projects={projects}
                        onApply={handleApply}
                        onDecline={handleDecline}
                    />
                )}
            </div>
        </AccountLayout>
    );
};
