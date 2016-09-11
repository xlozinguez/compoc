// import { Component } from 'client/src/utils';

// import template from './company-details.html';
// import './company-details.scss';

// @Component({
//     bindings: {
//         company: '<'
//     },
//     controllerAs: 'companyDetailsCtrl',
//     template
// })

// export class CompanyDetailsComponent {}

import { Component } from 'client/src/utils';

import template from './company-details.html';

import './company-details.scss';

@Component({
    template,
    controllerAs: 'companyDetailsCtrl'
})

export class CompanyDetailsComponent {
    static $inject = [
        '$ngRedux',
        'selectedCompanyActions'
    ];

    constructor($ngRedux, selectedCompanyActions) {
        this.$ngRedux = $ngRedux;
        this.selectedCompanyActions = selectedCompanyActions;
        this.disconnect = null;
    }

    // bind redux state to this component, which subsribes to updates like a one way data binding
    // in return, it provides us with the method to disconnect
    $onInit() {
        this.disconnect = this.$ngRedux.connect(state => ({
            selectedCompany: state.selectedCompany,
            router: state.router
        }))(this);
        // , this.selectedCompanyActions)((state, actions) => {
        //     if (!state.selectedCompany.isLoaded && this.$state.params.id) actions.fetchCompany(this.$state.params.id);
        //     this.actions = actions;
        //     this.company = state.selectedCompany.company;
        // });
    }

    // When the scope is destroyed, we want to disconnect from the store
    $onDestroy() {
        this.disconnect();
    }
}