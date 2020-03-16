import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ConnectedRouter } from 'connected-react-router'
import history from './store/history'
import './assets/less/reset.css'
import "./assets/less/common.less"  //这里放公共样式
import Home from './routes/Home';
import Mine from './routes/Mine';
import Profile from './routes/Profile';
import Tabs from './components/Tab';

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <main className="main-containter">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mine" exact component={Mine} />
                    <Route path="/profile" exact component={Profile} />
                    <Redirect to="/" />
                </Switch>
            </main>
            <Tabs/>
        </ConnectedRouter>
    </Provider>
), document.getElementById("root"))