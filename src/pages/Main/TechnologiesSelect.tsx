import React, { FC } from "react";
import { Select, SelectProps } from "antd";

interface IProps {
  onChange: (value: string[]) => void;
}

export const TechnologiesSelect: FC<IProps> = ({ onChange }: IProps): JSX.Element => {

  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="Please select"
      onChange={onChange}
      options={options}
    />
  );
};