import { Observable } from '@reactivex/rxjs';
import { Component } from 'client/src/utils';

import template from './companies.html';

import './companies.scss';

@Component({
    template,
    controllerAs: 'companiesCtrl'
})

export class CompaniesComponent {

    static $inject = [
        '$ngRedux',
        'CompaniesService'
    ];

    constructor($ngRedux, CompaniesService) {
        this.$ngRedux = $ngRedux;
        this.companiesService = CompaniesService;
        this.list = Observable.from([]);
        this.currentCompany = Observable.of({});
    }

    $onInit() {
        // Connect to the store
        this.disconnect = this.$ngRedux.connect(state => ({
            companies: state.companies,
            currentCompany: state.currentCompany
        }))((state, actions) => {
            this.actions = actions;
            this.list = state.companies;
            this.currentCompany = state.currentCompany;
        });

        // Fetch Companies
        this.companies = this.companiesService.fetchCompanies();
    }

    $onDestroy() {
        // Disconnect from the store
        this.disconnect();
    }

    onCompanySelected(company) {
        this.companiesService.fetchCompany(company.id);
    }
}