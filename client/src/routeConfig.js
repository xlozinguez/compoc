/**
 * Add a few basic routes to ui-router for our components
 */

 // TODO: add routes to components level isntead of being defined here

routerConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
];

export function routerConfig($stateProvider, $urlRouterProvider) {
    
    var appState = {
        name: 'app',
        abstract: true,
        views: {
            '': {
                template: '<app></app>'
            }
        }
    }

    var companiesState = {
        name: 'app.companies',
        url: '/companies',
        views: {
            '@app': {
                template: '<companies></companies>'
            },
            // 'content@app': {
            //     template: '<company-details></company-details>'
            // }
            // 'content@app': {
            //     template: 'Select a company...'
            // }
        }
    }

    // var companyState = {
    //     name: 'app.company',
    //     url: '/company/:id',
    //     views: {
    //         'list@app': {
    //             template: '<companies></companies>'
    //         },
    //         'content@app': {
    //             template: '<company-details></company-details>'
    //         }
    //     }
    // }

    var styleState = {
        name: 'app.styles',
        url: '/styles',
        views: {
            '@app': {
                template: '<styles></styles>'
            }
        }
    }

    $stateProvider.state(appState);
    $stateProvider.state(companiesState);
    // $stateProvider.state(companyState);
    $stateProvider.state(styleState);

    $urlRouterProvider.otherwise('/companies');
}