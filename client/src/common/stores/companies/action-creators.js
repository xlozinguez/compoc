import {
    API_BASE_URL,
    API_REQUEST
}
from 'client/src/common/api';

import {
    FETCH_COMPANIES_TYPES,
    FETCH_COMPANY_TYPES
}
from './action-types';

export function fetchCompanies() {
    return {
        [API_REQUEST]: {
            types: FETCH_COMPANIES_TYPES,
            config: {
                method: 'get',
                url: `${API_BASE_URL}/companies`
            }
        }
    };
}

export function fetchCompany(company) {
    return {
        [API_REQUEST]: {
            types: FETCH_COMPANY_TYPES,
            config: {
                data: company,
                method: 'get',
                url: `${API_BASE_URL}/companies/${company.id}`
            }
        }
    };
}