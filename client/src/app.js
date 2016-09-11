import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import './styles.scss';

angular.module('pocApp', [
    uiRouter
])
.directive('poc', AppComponent);