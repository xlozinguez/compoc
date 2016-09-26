/**
 * Create the store with middlewares:
 *
 * ngUiRouter: intercepts route change methods from ui-router.
 * logger: outputs every action in the system https://github.com/evgenyrodionov/redux-logger
 * devToolsExtension: use the chrome browser extension
 */

import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './common/stores/rootReducer';
import epics from './common/services/rootEpic';

store.$inject = ['$ngReduxProvider'];

export default function store($ngReduxProvider) {

    const logger = createLogger({
        level: 'info',
        collapsed: true
    });

    const epicMiddleware = createEpicMiddleware(epics);

    const middlewares = [epicMiddleware, 'ngUiRouterMiddleware', logger];

    const enhancers = [ window.devToolsExtension ? window.devToolsExtension() : f => f ];

    $ngReduxProvider.createStoreWith(reducers, middlewares, enhancers);
}