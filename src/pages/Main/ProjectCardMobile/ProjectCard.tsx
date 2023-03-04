import React, { useRef, useState } from "react";
import { Avatar, Card } from "antd";
import { CloseOutlined, HeartOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { CollaboratorList } from "./CollaboratorList";
import { InfoTab } from "./InfoTab";
import { IProjectCard } from "../../../models/projectCard";
import { shortenNumber } from "../../../utils/shortenNumber";
import styles from "../Main.module.scss";

const { Meta } = Card;

interface IProps {
  project: IProjectCard;
  onDecline: (project: any) => void;
  onApply: (project: any) => void;
}

const MIN_SWIPE_DISTANCE = 50;

const TAB_LIST = [
  {
    key: "info",
    tab: "Info",
  },
  {
    key: "collaborators",
    tab: "Collaborators",
  },
];

export const ProjectCard = ({ onDecline, onApply, project }: IProps) => {
  const [ touchStart, setTouchStart ] = useState(null);
  const [ touchEnd, setTouchEnd ] = useState(null);
  const [ activeTab, setActiveTab ] = useState<"info" | "collaborators">("info");
  const ref = useRef<HTMLDivElement>(null);

  const contentList: Record<string, React.ReactNode> = {
    info: <InfoTab project={project} />,
    collaborators: <CollaboratorList collaborators={project.collaborators} />,
  };

  const onTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => {
    if (touchStart && touchEnd) {
      const distance = touchStart - touchEnd;
      if (ref.current && touchStart && (Math.abs(distance) > MIN_SWIPE_DISTANCE)) {
        ref.current.style.transform = touchStart <= e.targetTouches[0].clientX ? "rotate(10deg)" : "rotate(-10deg)";
      }
    }

    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe) {
      onDecline(project);
    }

    if (isRightSwipe) {
      onApply(project);
    }

    if (ref.current) {
      ref.current.style.transform = "rotate(0)";
    }
  };

  const onTabChange = (key: string) => {
    setActiveTab(key as "info" | "collaborators");
  };

  return (
    <div
      ref={ref}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={styles.card}
    >
      <Card
        title={project.title}
        activeTabKey={activeTab}
        extra={<div>{shortenNumber(project.rating)} {0 < 1 ? <StarOutlined /> : <StarFilled />}</div>}
        tabList={TAB_LIST}
        onTabChange={onTabChange}
        actions={[
          <CloseOutlined key="decline" onClick={() => onDecline(project)} />,
          <HeartOutlined key="apply" onClick={() => onApply(project)} />,
        ]}
      >
        {contentList[activeTab]}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
          {!!project.linkToLive && <a href={project.linkToLive} target="_blank">view demo</a>}
        </div>
        <Meta
          avatar={<Avatar src={project.owner.profileImg} />}
          title={project.owner.username}
          style={{ marginTop: 16 }}
          description={project.owner.quote}
        />
      </Card>
    </div>
  );
};