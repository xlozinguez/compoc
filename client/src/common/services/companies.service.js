import { Observable } from '@reactivex/rxjs';
import { API_COMPANIES_PATH } from 'client/src/common/api/constants';
import { FETCH_COMPANIES, FETCH_COMPANY } from './constants';
import { Company } from 'client/src/common/models/company.model';

export class CompaniesService {
    static $inject = [
        'APIService',
        '$ngRedux'
    ];

    constructor(api, $ngRedux) {
        this.api = api;
        this.$ngRedux = $ngRedux;
    }

    fetchCompanies() {
        Observable.fromPromise(this.api.fetch(API_COMPANIES_PATH))
            .map(payload => ({ type: FETCH_COMPANIES, payload }))
            .subscribe(action => this.$ngRedux.dispatch(action));
    }

    fetchCompany(id) {
        Observable.fromPromise(this.api.fetch(API_COMPANIES_PATH + '/' + id))
            .map(payload => ({ type: FETCH_COMPANY, payload }))
            .subscribe(action => this.$ngRedux.dispatch(action));
    }
}