import { Avatar, Card } from "antd";
import React from "react";
import { shortenNumber } from "../../utils/shortenNumber";
import { StarFilled, StarOutlined } from "@ant-design/icons";

interface IProps {
    id: string;
    title: string;
    description: string;
}

export const ProjectCard = ({ id, title, description, ...other }: IProps) => {
    return (
        <Card
            {...other}
            key={id}
            extra={
                <div>
                    <a href={`/project/${id}`} style={{ marginLeft: 5 }}>
                        More
                    </a>
                </div>
            }
        >
            <p>
                <strong>{title}</strong>
            </p>
            <p>{description}</p>
        </Card>
    );
};
