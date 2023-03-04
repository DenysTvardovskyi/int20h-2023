import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./ForYou.module.scss";

interface IProps {}

export const ForYou: FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <AccountLayout>
            <div className={styles.profileContent}>For you content</div>
        </AccountLayout>
    );
};
