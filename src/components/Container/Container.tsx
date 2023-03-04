import React, { FC } from "react";
import styles from "./Container.module.scss"

interface IProps {
    children?: React.ReactNode | React.ReactNode[];
}
export const Container:  FC<IProps> = ({ children }: IProps): JSX.Element => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};
