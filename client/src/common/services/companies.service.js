import {
    ajax
}
from 'rxjs/Rx';

import {
    API_BASE_URL,
    API_COMPANIES_PATH
}
from 'client/src/common/api/constants';

import {
    FETCH_COMPANIES,
    FETCH_COMPANIES_FULFILLED,
    FETCH_COMPANY,
    FETCH_COMPANY_FULFILLED
}
from './constants';

// import { Company } from 'client/src/common/models/company.model';

// Action Creators
const fetchCompanies = payload => ({
    type: FETCH_COMPANIES,
    payload
});
const fetchCompaniesFullfilled = payload => ({
    type: FETCH_COMPANIES_FULLFILLED,
    payload
});

const fetchCompany = company_id => ({
    type: FETCH_COMPANY,
    payload: company_id
});
const fetchCompanyFullfilled = payload => ({
    type: FETCH_COMPANY_FULLFILLED,
    payload
});

// Epics
export function fetchCompaniesEpic (action$) {
    return action$
        .ofType(FETCH_COMPANIES)
        .mergeMap(action =>
            ajax.getJSON(`${API_BASE_URL}${API_COMPANIES_PATH}`)
                .map(fetchCompaniesFullfilled)
        );
}

export function fetchCompanyEpic (action$) {
    return action$
        .ofType(FETCH_COMPANY)
        .mergeMap(action =>
            ajax.getJSON(`${API_BASE_URL}${API_COMPANIES_PATH}/${action.payload}`)
                .map(fetchCompanyFullfilled)
        );
}

// export class CompaniesService {
//     static $inject = [
//         'APIService',
//         '$ngRedux'
//     ];

//     constructor(api, $ngRedux) {
//         this.api = api;
//         this.$ngRedux = $ngRedux;
//     }

//     fetchCompanies() {
//         // Observable.fromPromise(this.api.fetch(API_COMPANIES_PATH))
//         //     .filter(r => r.name === "Axial")
//         //     .map(payload => ({ type: FETCH_COMPANIES, payload }))
//         //     .subscribe(action => this.$ngRedux.dispatch(action));
//     }

//     fetchCompany(id) {
//         // Observable.fromPromise(this.api.fetch(API_COMPANIES_PATH + '/' + id))
//         //     .map(payload => ({ type: FETCH_COMPANY, payload }))
//         //     .subscribe(action => this.$ngRedux.dispatch(action));
//     }
// }