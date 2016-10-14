/**
 * Combine all epics in this file and export the combined epic.
 */

import { combineEpics } from 'redux-observable';

// our custom data reducer for the data points
import { fetchCompaniesEpic, fetchCompanyEpic } from './companies.service';

export default combineEpics(
    fetchCompaniesEpic, 
    fetchCompanyEpic
);