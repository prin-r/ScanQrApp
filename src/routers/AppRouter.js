import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const loading = (<div>...loading</div>);

const Page1 = Loadable({
    loader: () => import('../components/Page1'),
    loading: () => loading
});

const Page2 = Loadable({
    loader: () => import('../components/Page2'),
    loading: () => loading
});

const Count = Loadable({
    loader: () => import('../components/Count'),
    loading: () => loading
});

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route component={Count} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;