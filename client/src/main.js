import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router'; // https://github.com/neilff/redux-ui-router#listener

// Core
import { apiMiddleware } from './common/api';
import { companyActions } from './common/stores/companies';
import { selectedCompanyActions } from './common/stores/selected-company';

// Router
import { routerConfig } from './routeConfig';

// Store
import reduxConfig from './reduxConfig';

// Components
import { AppComponent } from './components/app';
import { CompanyItemComponent, CompanyDetailsComponent, CompaniesComponent } from './components/companies';

// Styles
import './styles/styles.scss';

const app = angular.module('app', [
    ngRedux,
    uiRouter,
    ngReduxUiRouter
]);

app.factory('apiMiddleware', apiMiddleware);

app.value('companyActions', companyActions);
app.value('selectedCompanyActions', selectedCompanyActions);

app.component('app', AppComponent);
app.component('companyItem', CompanyItemComponent);
app.component('companies', CompaniesComponent);
app.component('companyDetails', CompanyDetailsComponent);

// Load config for ui-router
app.config(routerConfig);

// Load Redux config
app.config(reduxConfig);