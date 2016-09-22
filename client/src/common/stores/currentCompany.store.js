import { FETCH_COMPANY } from 'client/src/common/services/constants';

export function currentCompanyStore(state = null, { meta, payload, type }) {
    switch (type) {

        case FETCH_COMPANY:
            return payload || null;

        default:
            return state;
    }
}