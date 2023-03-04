import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Requests.module.scss";

interface IProps {}

export const Requests: FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <AccountLayout>
            <div className={styles.profileContent}>Requests</div>
        </AccountLayout>
    );
};
