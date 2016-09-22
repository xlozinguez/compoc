/* eslint-disable no-undefined */
import 'angular';

import { FETCH_COMPANY } from 'client/src/common/services/constants';

import { currentCompanyStore } from './currentCompany.store';

describe('Current company store', () => {
    let company;

    beforeEach(() => {
        company = {
            "id": 1,
            "name": "Axial",
            "type": "Corporation",
            "description": "Founded in 2010, Axial is an online professional network connecting entrepreneurs, M&A advisors and capital partners. Members use Axial to discover and exchange business development and investment opportunities, create, manage and promote their company identity and expertise, and expand and engage their business development networks. In 2015, Axial's members signed over 10,000 NDAs and closed over $1.5B in total deal volume. Axial's network is designed to serve CEOs and investment professionals who are contemplating, pursuing, and executing transactions between $5M and $200M in value.",
            "website": "http://www.axial.net",
            "premium": true
        };
    });


    function getInitialState(state) {
        return null;
    }

    it('should return the initial state when action.type is not found', () => {
        expect(currentCompanyStore(undefined, {})).toEqual(getInitialState());
    });

    describe('FETCH_COMPANY', () => {
        it('should set the selected company with the fetched company', () => {
            let state = getInitialState();

            let nextState = currentCompanyStore(state, {
                type: FETCH_COMPANY,
                payload: company
            });

            expect(nextState).toEqual(company);
        });

        it('should set the selected company to null if payload is undefined', () => {
            let state = getInitialState();

            let nextState = currentCompanyStore(state, {
                type: FETCH_COMPANY,
                payload: undefined
            });

            expect(nextState).toEqual(null);
        });
    });
});