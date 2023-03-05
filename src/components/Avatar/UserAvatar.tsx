import { Avatar } from "antd";
import React from "react";

interface IProps {
    image: string;
}

export const UserAvatar = ({ image, ...other }: IProps) => {
    return image ? <Avatar {...other} src={image} {...other} /> : <Avatar {...other}></Avatar>;
};
