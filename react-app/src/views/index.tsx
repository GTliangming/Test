import React from "react"
import PropTypes from "prop-types"
import { ConnectedRouter } from "connected-react-router"
import { Route, Switch } from "react-router"
import routers from "../router/index";
import Layouts from "./layout";


const App = (history:any) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Layouts>
                    {routers.map((r, key) => (
                        <Route
                            component={r.component}
                            exact={!!r.exact}
                            key={key}
                            path={r.path}
                        />
                    ))}
                </Layouts>
            </Switch>
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object,
}

export default App;

