/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

// the built-in reducer for redux-ui-router
import { router } from 'redux-ui-router';

// our custom data reducer for the data points
import { companyReducer } from './companies';

export default combineReducers({
    router,
    companies: companyReducer
});