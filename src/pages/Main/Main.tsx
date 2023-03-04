import { CaretRightOutlined, CloseOutlined, HeartOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Collapse, Empty, List, Select, SelectProps, Space, Tag, theme } from "antd";
import React, { FC, useEffect, useRef, useState } from "react";
import { Landing as LandingLayout } from "../../layouts";
import styles from "./Main.module.scss";
import { useNavigate } from "react-router-dom";

interface IProps {}

const { Meta } = Card;
const { Panel } = Collapse;

export const Main: FC<IProps> = (props: IProps): JSX.Element => {
  const [ projects, setProjects ] = useState([ 1, 2, 3 ]);
  const [ applied, setApplied ] = useState([]);
  const navigate = useNavigate();

  const handleDecline = (project: any) => {
    setProjects((prevState) => prevState.filter((i) => i !== project));
  };

  const handleApply = (project: any) => {
    setProjects((prevState) => prevState.filter((i) => i !== project));
    setApplied(project);
  };
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return window.innerWidth <= 991 ? (
    <LandingLayout>
      <div className={styles.container}>
        <div>
          <div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
          </div>
          <div style={{ margin: "16px 0", textAlign: "center" }}>
            Projects to apply: {projects.length}
          </div>
        </div>
        <div className={styles.cards}>
          {projects.map((project, index) => {
            return <div key={index} className={styles.cardWrapper}><CardItem
              project={project}
              onDecline={handleDecline}
              onApply={handleApply}
            /></div>;
          })}
          {!projects.length && (
            <Empty description="No more projects. Come back later!">
              <Button onClick={() => navigate("/projects")} type="primary">Projects</Button>
            </Empty>
          )}
        </div>
      </div>

    </LandingLayout>
  ) : (
    <LandingLayout>
      main desktop
    </LandingLayout>
  );
};

const CardItem = ({
  onDecline,
  onApply,
  project,
}: { project: any, onDecline: (project: any) => void, onApply: (project: any) => void }) => {
  const [ touchStart, setTouchStart ] = useState(null);
  const [ touchEnd, setTouchEnd ] = useState(null);
  const minSwipeDistance = 50;
  const ref = useRef<HTMLDivElement>(null);
  const [ activeTabKey1, setActiveTabKey1 ] = useState<string>("tab1");

  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState<any[]>([]);

  const { token } = theme.useToken();

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch("https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo")
      .then((res) => res.json())
      .then((body) => {
        setData([ ...data, ...body.results ]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const contentList: Record<string, React.ReactNode> = {
    tab1: <div
      id="scrollableDiv"
      style={{
        height: 320,
        overflowY: "auto",
        width: "100%",
      }}
    >
      <Collapse
        bordered={false}
        defaultActiveKey={[ "1" ]}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        style={{ background: token.colorBgContainer }}
      >
        <Panel header="Description" key="1" style={panelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="Stack" key="2" style={panelStyle}>
          <Space size={[ 0, 8 ]} wrap>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </Space>
        </Panel>
        <Panel header="Requirements" key="3" style={panelStyle}>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>,
    tab2: <div
      id="scrollableDiv"
      style={{
        maxHeight: 320,
        overflowY: "auto",
      }}
    >
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
            />
            <div style={{ marginRight: 12 }}>Role</div>
          </List.Item>
        )}
      />
    </div>,
  };

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => {
    if (touchStart && touchEnd) {
      const distance = touchStart - touchEnd;
      if (ref.current && touchStart && (Math.abs(distance) > minSwipeDistance)) {
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

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

  const tabList = [
    {
      key: "tab1",
      tab: "Info",
    },
    {
      key: "tab2",
      tab: "Collaborators",
    },
  ];

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
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
        title="Project Name"
        activeTabKey={activeTabKey1}
        extra={
          <div>
            3,5k {0 < 1 ? <StarOutlined /> : <StarFilled />}
          </div>}
        tabList={tabList}
        onTabChange={onTab1Change}
        actions={[
          <CloseOutlined key="decline" onClick={() => onDecline(project)} />,
          <HeartOutlined key="apply" onClick={() => onApply(project)} />,
        ]}
      >
        {contentList[activeTabKey1]}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
          <a href="">view demo</a>
        </div>
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
          title="Owner name"
          style={{ marginTop: 16 }}
          description="Owner quote"
        />
      </Card>
    </div>
  );
};
