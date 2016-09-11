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
        'companyActions'
    ];

    constructor($ngRedux, companyActions) {
        this.$ngRedux = $ngRedux;
        this.companyActions = companyActions;
    }

    // bind redux state to this component, which subsribes to updates like a one way data binding
    // in return, it provides us with the method to disconnect
    $onInit() {
        this.disconnect = this.$ngRedux.connect(state => ({
            companies: state.companies
        }), this.companyActions)((state, actions) => {
            if (!state.companies.isLoaded) actions.fetchCompanies();
            this.actions = actions;
            this.list = state.companies.list;
        });
    }

    // When the scope is destroyed, we want to disconnect from the store
    $onDestroy() {
        this.disconnect();
    }

    onCompanySelected(company) {
        // console.log(company);
    //     // stateGo();
    //     stateTransitionTo('app.company', { id: company.id })
        // this.$ngRedux.dispatch({
        //     type: 'FETCH_SELECTED_COMPANY', 
        //     payload: {
        //         id: company.id
        //     }
        // });
    //     // this.$state.go('app.company', { id: company.id });
    }
}