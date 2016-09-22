import { FETCH_COMPANIES } from 'client/src/common/services/constants';

export function companiesStore(state = [], { meta, payload, type }) {
    switch (type) {

        case FETCH_COMPANIES:
            return payload || [];

        default:
            return state;
    }
}