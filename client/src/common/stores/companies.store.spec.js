/* eslint-disable no-undefined */
import 'angular';

import { FETCH_COMPANIES } from 'client/src/common/services/constants';

import { companiesStore } from './companies.store';

describe('Companies store', () => {
    let company1;
    let company2;

    beforeEach(() => {
        company1 = {
            "id": 1,
            "name": "Axial",
            "type": "Corporation",
            "description": "Founded in 2010, Axial is an online professional network connecting entrepreneurs, M&A advisors and capital partners. Members use Axial to discover and exchange business development and investment opportunities, create, manage and promote their company identity and expertise, and expand and engage their business development networks. In 2015, Axial's members signed over 10,000 NDAs and closed over $1.5B in total deal volume. Axial's network is designed to serve CEOs and investment professionals who are contemplating, pursuing, and executing transactions between $5M and $200M in value.",
            "website": "http://www.axial.net",
            "premium": true
        };
        company2 = {
            "id": 2,
            "name": "Saratoga Investment Corp (Ticker: SAR)",
            "type": "Junior Capital Provider",
            "description": "Saratoga Investment Corp. is a publicly traded (NYSE: SAR) business development company (BDC). We provide customized financing solutions for middle market companies located in the United States. Our investment professionals have a combined 80+ years of experience investing over $4 billion in middle market businesses.",
            "website": "http://www.saratogainvestmentcorp.com",
            "premium": true
        };
    });


    function getInitialState(state) {
        return [];
    }

    it('should return the initial state when action.type is not found', () => {
        expect(companiesStore(undefined, {})).toEqual(getInitialState());
    });

    describe('FETCH_COMPANIES', () => {
        it('should set list with fetched companies', () => {
            let state = getInitialState();

            let nextState = companiesStore(state, {
                type: FETCH_COMPANIES,
                payload: [company1, company2]
            });

            expect(nextState).toEqual([company1, company2]);
        });

        it('should set list with empty array if payload is undefined', () => {
            let state = getInitialState();

            let nextState = companiesStore(state, {
                type: FETCH_COMPANIES,
                payload: undefined
            });

            expect(nextState).toEqual([]);
        });
    });
});