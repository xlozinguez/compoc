import {
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANY_SUCCESS
} from './action-types';

export const INITIAL_STATE = {
    isLoaded: false,
    list: [],
    selected: null
};

export function companyReducer(state = INITIAL_STATE, {meta, payload, type}) {
    switch (type) {

        case FETCH_COMPANIES_SUCCESS:
            return {
                isLoaded: true,
                list: payload || [],
                selected: state.selected
            };

        case FETCH_COMPANY_SUCCESS:
            return {
                isLoaded: state.isLoaded,
                list: state.list,
                selected: payload || null
            };

        default:
            return state;
    }
}
