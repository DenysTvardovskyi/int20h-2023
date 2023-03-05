import React, { FC, useEffect, useState } from "react";
import { Select } from "antd";
import { useApi } from "../../hooks";

interface IProps {
  onChange: (value: string[]) => void;
}

export const TechnologiesSelect: FC<IProps> = ({ onChange }: IProps): JSX.Element => {
  const [ search, setSearch ] = useState<string>("");
  const [ options, setOptions ] = useState<{ label: string; value: string }[]>([]);

  const api = useApi();

  useEffect(() => {
    if (search) {
      api.technologies.get({ Query: search })
        .then((data) => setOptions(data.map((i) => ({ value: i.name, label: i.name })).reverse()));
    }
  }, [ search ]);

  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="Please select"
      onChange={onChange}
      onSearch={setSearch}
      options={options}
    />
  );
};