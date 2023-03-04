import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Profile.module.scss";

interface IProps {}

export const Profile: FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <AccountLayout>
            <div className={styles.profileContent}>profile content</div>
        </AccountLayout>
    );
};
