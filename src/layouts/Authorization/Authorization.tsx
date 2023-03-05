import React, { FC } from "react";
import { Container } from "../../components";
import styles from "./Authorization.module.scss"

interface IProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Authorization: FC<IProps> = ({ children }: IProps): JSX.Element => {
  return (
      <div className={styles.authorization}>
          <div className={styles.authContainer}>
              {children}
          </div>
      </div>
  );
};
