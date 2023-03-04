import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Projects.module.scss";

interface IProps {}

export const Projects: FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <AccountLayout>
            <div className={styles.profileContent}>projects</div>
        </AccountLayout>
    );
};
