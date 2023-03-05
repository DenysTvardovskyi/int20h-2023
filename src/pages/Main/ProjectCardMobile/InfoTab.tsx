import React, { FC } from "react";
import { Collapse, Space, Tag, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

interface IProps {
  description: string;
  requirements: string;
  technologies: { name: string }[];
}

const { Panel } = Collapse;

export const InfoTab: FC<IProps> = ({ description, requirements, technologies }: IProps): JSX.Element => {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <div
      id="scrollableDiv"
      style={{
        minHeight: 320,
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
          <p>{description}</p>
        </Panel>
        <Panel header="Stack" key="2" style={panelStyle}>
          <Space size={[ 0, 8 ]} wrap>
            {technologies.map((technology) => {
              return <Tag key={technology.name}>{technology.name}</Tag>;
            })}
          </Space>
        </Panel>
        <Panel header="Requirements" key="3" style={panelStyle}>
          <p>{requirements}</p>
        </Panel>
      </Collapse>
    </div>
  );
};