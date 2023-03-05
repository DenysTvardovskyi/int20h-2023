import { Avatar, Card } from "antd";
import React from "react";
import { shortenNumber } from "../../utils/shortenNumber";
import { StarFilled, StarOutlined } from "@ant-design/icons";

interface IProps {
    id: string;
    rating: number;
    title: string;
    description: string;
}

export const ProjectCard = ({ id, rating, title, description, ...other }: IProps) => {
    return (
        <Card
            {...other}
            key={id}
            extra={
                <div>
                    {shortenNumber(rating)}
                    {0 < 1 ? <StarOutlined role='button' /> : <StarFilled role='button' />}
                    <a href={id} style={{ marginLeft: 5 }}>
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
