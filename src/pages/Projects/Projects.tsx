import React, { FC } from "react";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Projects.module.scss";
import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../../hooks";

interface IProps {}

export const Projects: FC<IProps> = (props: IProps): JSX.Element => {
  const { user } = useAuthorization();

  const navigate = useNavigate();

  return (
    <AccountLayout>
      <div className={styles.profileContent}>
        <h4>My projects</h4>

        {!user.projects.length && (
          <Empty description="Oops, you have not projects">
            <Button onClick={() => navigate("/create-project")} type="primary">
              Create new project
            </Button>
          </Empty>
        )}
      </div>
    </AccountLayout>
  );
};
