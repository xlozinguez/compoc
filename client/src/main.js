import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router'; // https://github.com/neilff/redux-ui-router#listener

// Core
import { APIService } from './common/api/api-service';

// Services
import { CompaniesService } from './common/services/companies.service';

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

app.component('app', AppComponent);
app.component('companyItem', CompanyItemComponent);
app.component('companies', CompaniesComponent);
app.component('companyDetails', CompanyDetailsComponent);

app.service('APIService', APIService);
app.service('CompaniesService', CompaniesService);

// Load config for ui-router
app.config(routerConfig);

// Load Redux store config
app.config(reduxConfig);