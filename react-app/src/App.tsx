import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routers from "./router/index.js";
import ContentBoxs from "./views/ContentBoxs";
export default class AppBox extends React.Component<{}, {}> {

    render() {
        return (
            <Router>
                <Switch>
                    <ContentBoxs>
                        {routers.map((r, key) => (
                            <Route
                                component={r.component}
                                exact={!!r.exact}
                                key={key}
                                path={r.path}
                            />
                        ))}
                    </ContentBoxs>
                </Switch>
            </Router>
        );
    }
}

