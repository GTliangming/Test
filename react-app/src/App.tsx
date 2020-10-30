import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import routers from "./router/index.js";
import ContentBoxs from "./views/ContentBoxs";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
export default class App extends React.Component<{}, {}> {

    render() {
        return (
            <Router history={history}>
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

