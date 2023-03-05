import React, { FC, useEffect, useState } from "react";
import { Account as AccountLayout } from "../../layouts";
import { Tabs, TabsProps } from "antd";
import { ProfileEditor } from "./ProfileEditor";
import { ProfileView } from "./ProfileView";
import { useParams } from "react-router-dom";
import { useApi, useAuthorization } from "../../hooks";
import { IUser } from "../../models";

interface IProps {}

export const Profile: FC<IProps> = (props: IProps): JSX.Element => {
  const params = useParams();
  const api = useApi();
  const [ data, setData ] = useState<IUser | null>(null);
  const { user } = useAuthorization();
  console.log(params.id, user.id);
  useEffect(() => {
    if (!!params.id) {
      api.users.one({ id: params.id }).then((res) => setData(res));
    } else {
      api.users.one({ id: user.id }).then((res) => setData(res));
    }

  }, [ params ]);

  const items: TabsProps["items"] = [
    {
      key: "view",
      label: `View mode`,
      children: <ProfileView />,
    },
    {
      key: "editor",
      label: `Editor mode`,
      children: <ProfileEditor />,
    },
  ];

  return (
    <AccountLayout>
      {params?.id ? <ProfileView /> : <Tabs defaultActiveKey="view" items={items} />}
    </AccountLayout>
  );
};
