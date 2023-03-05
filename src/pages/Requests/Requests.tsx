import React, { FC } from "react";
import { Card, Tag } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { Account as AccountLayout } from "../../layouts";
import styles from "./Requests.module.scss";
import { useAuthorization } from "../../hooks";

interface IProps {}

const statuses = [
  (<Tag style={{ marginTop: 5 }} icon={<SyncOutlined spin />} color="processing">Processing</Tag>),
  (<Tag style={{ marginTop: 5 }} icon={<CheckCircleOutlined />} color="success">Approved</Tag>),
  (<Tag style={{ marginTop: 5 }} icon={<CloseCircleOutlined />} color="error">Declined</Tag>),
];

export const Requests: FC<IProps> = (props: IProps): JSX.Element => {
  const { user } = useAuthorization();
  return (
    <AccountLayout>
      <h4>My requests</h4>
      <div className={styles.requestsGrid}>
        {user.requests.map((item) => (
          <Card
            className={styles.requestsGridItem}
            key={item.projectId}
          >
            <div>
              <p>
                <strong>{item.projectId}</strong>
              </p>
            </div>

            <div>{statuses[item.status]}</div>
          </Card>
        ))}
      </div>
    </AccountLayout>
  );
};
