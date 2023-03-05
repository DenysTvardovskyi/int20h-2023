import React, { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import * as Page from "../../pages";

interface IProps {}

// const PageProfileWithCheckAuthorization = withCheckAuthorization(Page.Profile);
// const PageMainWithCheckAuthorization = withCheckAuthorization(Page.Main);
export const Router: FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Page.Home />} />
                <Route path='/sign-in' element={<Page.SignIn />} />
                <Route path='/sign-up' element={<Page.SignUp />} />
                <Route path='/for-you' element={<Page.Main />} />
                <Route path='/profile' element={<Page.Profile />} />
                <Route path='/profile/:id' element={<Page.Profile />} />
                <Route path='/requests' element={<Page.Requests />} />
                <Route path='/projects' element={<Page.Projects />} />
                <Route path='/create-project' element={<Page.CreateProject />} />
                <Route path='/project/:id' element={<Page.Project />} />
                <Route path='/search-projects' element={<Page.SearchProjects />} />
                <Route path='/search-people' element={<Page.SearchPeople />} />
                <Route path='*' element={<Page.NotFound />} />
            </Routes>
        </HashRouter>
    );
};
