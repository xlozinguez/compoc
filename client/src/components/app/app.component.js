import { Component } from 'client/src/utils';

import template from './app.html';
import './app.scss';

@Component({
    template: template,
    controllerAs: 'appCtrl'
})

export class AppComponent {
    static $inject = [
        '$ngRedux'
    ];

    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
        this.currentCompany = Observable.from([]);
    }

    $onInit() {
        // Connect to the store
        this.disconnect = this.$ngRedux.connect(state => ({
            currentCompany: state.currentCompany
        }))((state, actions) => {
            this.currentCompany = state.currentCompany;
        });
    }

    $onDestroy() {
        // Disconnect from the store
        this.disconnect();
    }

}