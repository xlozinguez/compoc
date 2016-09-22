import { Component } from 'client/src/utils';

import template from './company-details.html';

import './company-details.scss';

@Component({
    bindings: {
        company: '<', // incoming object
    },
    controllerAs: 'companyDetailsCtrl',
    template
})

export class CompanyDetailsComponent {}