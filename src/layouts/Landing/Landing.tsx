import React, { FC } from "react";
import styles from "./Landing.module.scss"

interface IProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Landing: FC<IProps> = ({ children }: IProps): JSX.Element => {
  return (
    <div className={styles.landing}>
        {children}
    </div>
  );
};
