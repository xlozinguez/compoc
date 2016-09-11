import {
  FETCH_COMPANIES_SUCCESS
} from './action-types';

export const INITIAL_STATE = {
    isLoaded: false,
    list: []
};

export function companyReducer(state = INITIAL_STATE, {meta, payload, type}) {
    switch (type) {

        case FETCH_COMPANIES_SUCCESS:
            return {
                isLoaded: true,
                list: payload || []
            };

        default:
            return state;
    }
}
