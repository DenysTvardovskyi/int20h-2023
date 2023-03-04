import { CloseOutlined, HeartOutlined } from "@ant-design/icons";
import { Avatar, Card, Skeleton } from "antd";
import React, { FC, useState } from "react";
import { Landing as LandingLayout } from "../../layouts";
import styles from "./Main.module.scss";

interface IProps {}

const { Meta } = Card;

export const Main: FC<IProps> = (props: IProps): JSX.Element => {
  const [ touchStart, setTouchStart ] = useState(null);
  const [ touchEnd, setTouchEnd ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      console.log("swipe", isLeftSwipe ? "left" : "right");
    }
  };

  return (
    <LandingLayout>
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={styles.card}>
        <Card
          hoverable
          loading={loading}
          title="Project Name"
          actions={[
            <CloseOutlined key="decline" />,
            <HeartOutlined key="apply" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>

            <Meta
              avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
              title="Owner name"
              description="Owner quote"
            />
          </Skeleton>
        </Card>
      </div>
    </LandingLayout>
  );
};
