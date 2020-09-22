import React from "react";
import styled from "styled-components";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import MainContentLeftSidebar from "./MainContentLeftSidebar";
import MainContentRightSidebar from "./MainContentRightSidebar";
import MainContentNoSidebar from "./MainContentNoSidebar";


const MainContentContainerStyling = styled.div`
    background-color: white;
    border-radius: 6px;
    margin-top: 10px;
    width: 100%;
    height: 300px;
`;

const MainContentContainer = () => {
    return (
        <MainContentContainerStyling>
            {/* <Router> */}
            <Switch>
                <Route exact path="/left-sidebar">
                    <MainContentLeftSidebar />
                </Route>
                <Route exact path="/right-sidebar">
                    <MainContentRightSidebar />
                </Route>
                <Route exact path="/no-sidebar">
                    <MainContentNoSidebar />
                </Route>
            </Switch>
            {/* </Router> */}

        </MainContentContainerStyling>



    )
}

export default MainContentContainer;