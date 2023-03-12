import React, { FC, useEffect, useState } from "react";
import { Account as AccountLayout } from "../../layouts";
import { Tabs, TabsProps } from "antd";
import { ProfileEditor } from "./ProfileEditor";
import { ProfileView } from "./ProfileView";
import { useParams } from "react-router-dom";
import { useApi, useAuthorization } from "../../hooks";

interface IProps {}

export const Profile: FC<IProps> = (props: IProps): JSX.Element => {
    const params = useParams();
    const api = useApi();
    const [data, setData] = useState(null);
    const { user } = useAuthorization();

    useEffect(() => {
        if (!!params.id) {
            api.users.one({ id: params.id }).then((res) => setData(res));
        } else {
            api.users.one({ id: user.id }).then((res) => setData(res));
        }
    }, [params.id, user.id]);

    const items: TabsProps["items"] = [
        {
            key: "view",
            label: `View mode`,
            children: (
                <ProfileView
                    id={data?.id}
                    userName={data?.userName}
                    gitHubAuthenticated={data?.gitHubAuthenticated}
                    firstName={data?.firstName}
                    lastName={data?.lastName}
                    avatarImageLink={data?.avatarImageLink}
                    email={data?.email}
                    experience={data?.experience}
                    projects={data?.projects}
                />
            ),
        },
        {
            key: "editor",
            label: `Editor mode`,
            children: <ProfileEditor />,
        },
    ];

    return (
        <AccountLayout>
            {params?.id ? (
                <ProfileView
                    id={data?.id}
                    userName={data?.userName}
                    gitHubAuthenticated={data?.gitHubAuthenticated}
                    firstName={data?.firstName}
                    lastName={data?.lastName}
                    avatarImageLink={data?.avatarImageLink}
                    email={data?.email}
                    experience={data?.experience}
                    projects={data?.projects}
                />
            ) : (
                <Tabs defaultActiveKey='view' items={items} />
            )}
        </AccountLayout>
    );
};
