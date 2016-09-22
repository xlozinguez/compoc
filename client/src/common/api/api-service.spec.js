import { APIService } from './api-service';
import { API_BASE_URL } from './constants';

describe('APIService', () => {
    let api;
    let endpoints;
    let httpBackend;


    beforeEach(() => {
        endpoints = {
            BASE_URL: API_BASE_URL,
            RESOURCE_URL: `${API_BASE_URL}/resource`
        };

        angular.mock.module($provide => {
            $provide.service('APIService', APIService);
        });

        inject(($httpBackend, APIService) => {
            httpBackend = $httpBackend;
            api = APIService;
        });
    });


    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    describe('Fetching resources', () => {
        it('should send GET request to server', () => {
            httpBackend.expectGET(endpoints.RESOURCE_URL).respond(200, []);
            api.fetch('/resource');
            httpBackend.flush();
        });

        it('should fulfill promise with an array of resources', () => {
            let responseData = [{}, {}];
            httpBackend.whenGET(endpoints.RESOURCE_URL).respond(200, responseData);

            api.fetch('/resource')
                .then(data => {
                    expect(data).toEqual(responseData);
                });

            httpBackend.flush();
        });
    });


    describe('Creating a resource', () => {
        it('should send POST request to server', () => {
            let resource = {};
            httpBackend.expectPOST(endpoints.RESOURCE_URL, resource).respond(200);
            api.create('/resource', resource);
            httpBackend.flush();
        });

        it('should fulfill promise with the newly created resource', () => {
            let resource = {};
            httpBackend.whenPOST(endpoints.RESOURCE_URL).respond(200, resource);

            api.create('/resource', resource)
                .then(data => {
                    expect(data).toEqual(resource);
                });

            httpBackend.flush();
        });
    });


    describe('Deleting a resource', () => {
        it('should send DELETE request to server', () => {
            httpBackend.expectDELETE(`${endpoints.RESOURCE_URL}/123`).respond(204);
            api.delete('/resource/123');
            httpBackend.flush();
        });
    });


    describe('Updating a resource', () => {
        it('should send PUT request to server', () => {
            let resource = {};
            httpBackend.expectPUT(`${endpoints.RESOURCE_URL}/123`, resource).respond(200);
            api.update('/resource/123', resource);
            httpBackend.flush();
        });

        it('should fulfill promise with the updated resource', () => {
            let resource = {};
            httpBackend.whenPUT(`${endpoints.RESOURCE_URL}/123`, resource).respond(200, resource);

            api.update('/resource/123', resource)
                .then(data => {
                    expect(data).toEqual(resource);
                });

            httpBackend.flush();
        });
    });

});