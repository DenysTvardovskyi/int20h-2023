import React, { FC } from "react";
import styles from "./Account.module.scss";

interface IProps {
    children?: React.ReactNode | React.ReactNode[];
}

export const Account: FC<IProps> = ({ children }: IProps): JSX.Element => {
    return <div className={styles.accountLayout}>{children}</div>;
};
