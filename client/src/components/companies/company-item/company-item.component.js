import { Component } from 'client/src/utils';

import template from './company-item.html';
import './company-item.scss';

@Component({
    bindings: {
        company: '<', // incoming object
        selected: '&' // outgoing event
    },
    controllerAs: 'companyItemCtrl',
    template
})

export class CompanyItemComponent {}