import { Avatar, Card } from "antd";
import React from "react";
import { shortenNumber } from "../../utils/shortenNumber";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
                  <Link to={`/project/${id}`} style={{ marginLeft: 5 }}>
                    More
                  </Link>
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
