import React, { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { withCheckAuthorization } from "../../hocs";
import * as Page from "../../pages";

interface IProps {}

// const PageProfileWithCheckAuthorization = withCheckAuthorization(Page.Profile);
const PageProjectWithCheckAuthorization = withCheckAuthorization(Page.Project);
const PageRequestsWithCheckAuthorization = withCheckAuthorization(Page.Requests);
const PageProjectsWithCheckAuthorization = withCheckAuthorization(Page.Projects);
const PageSearchProjectsWithCheckAuthorization = withCheckAuthorization(Page.SearchProjects);
const PageSearchPeopleWithCheckAuthorization = withCheckAuthorization(Page.SearchPeople);
const PageMainWithCheckAuthorization = withCheckAuthorization(Page.Main);
export const Router: FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="/sign-in" element={<Page.SignIn />} />
        <Route path="/sign-up" element={<Page.SignUp />} />
        <Route path="/profile" element={<Page.Profile />} />
        <Route path="/for-you" element={<PageMainWithCheckAuthorization />} />
        <Route path="/requests" element={<PageRequestsWithCheckAuthorization />} />
        <Route path="/projects" element={<PageProjectsWithCheckAuthorization />} />
        <Route path="/project/:id" element={<PageProjectWithCheckAuthorization />} />
        <Route path="/search-projects" element={<PageSearchProjectsWithCheckAuthorization />} />
        <Route path="/search-people" element={<PageSearchPeopleWithCheckAuthorization />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </HashRouter>
  );
};
