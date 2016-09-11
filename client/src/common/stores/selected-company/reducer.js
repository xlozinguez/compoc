import {
    FETCH_SELECTED_COMPANY_SUCCESS
} from './action-types';

export const INITIAL_STATE = {
    isLoaded: false,
    company: null
};

export function selectedCompanyReducer(state = INITIAL_STATE, {meta, payload, type}) {
    switch (type) {

        case FETCH_SELECTED_COMPANY_SUCCESS:
            return {
                isLoaded: true,
                company: payload || null
            };

        default:
            return state;
            
    }
}
