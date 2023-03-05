import React, { FC, useEffect, useRef, useState } from "react";
import { Select } from "antd";
import { useApi } from "../../hooks";
import { debounce } from "lodash";

interface IProps {
  onChange: (value: string[]) => void;
}

export const TechnologiesSelect: FC<IProps> = ({ onChange }: IProps): JSX.Element => {
  const [ search, setSearch ] = useState<string>("");
  const [ options, setOptions ] = useState<{ label: string; value: string }[]>([]);

  const debouncedSearch = useRef(
    debounce(async (text: string) => {
      setSearch(text);
    }, 300),
  ).current;

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
      onSearch={debouncedSearch}
      options={options}
    />
  );
};