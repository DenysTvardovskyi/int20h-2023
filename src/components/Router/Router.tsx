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
                <Route path='/for-you' element={<Page.ForYou />} />
                <Route path='/profile' element={<Page.Profile />} />
                <Route path='/requests' element={<Page.Requests />} />
                <Route path='/projects' element={<Page.Projects />} />
                <Route path='/main' element={<Page.Main />} />
                <Route path='*' element={<Page.NotFound />} />
            </Routes>
        </HashRouter>
    );
};
