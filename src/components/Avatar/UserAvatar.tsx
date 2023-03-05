import { Avatar } from "antd";
import React from "react";

interface IProps {
    image: string;
    firstName: string;
    lastName: string;
}

export const UserAvatar = ({ image, lastName, firstName, ...other }: IProps) => {
    return image ? (
        <Avatar {...other} src={image} {...other} />
    ) : (
        <Avatar {...other}>
            <p>
                {firstName[0]}
                {lastName[0]}
            </p>
        </Avatar>
    );
};
