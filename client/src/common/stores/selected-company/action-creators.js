import {
    API_BASE_URL,
    API_REQUEST
}
from 'client/src/common/api';

import {
    FETCH_SELECTED_COMPANY_TYPES
}
from './action-types';

export function fetchCompany(company_id) {
    return {
        [API_REQUEST]: {
            types: FETCH_SELECTED_COMPANY_TYPES,
            config: {
                data: company_id,
                method: 'get',
                url: `${API_BASE_URL}/companies/${company_id}`
            }
        }
    };
}