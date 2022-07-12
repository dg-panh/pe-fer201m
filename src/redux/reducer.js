import { BATH_SHOWER } from '../shared/bath_shower';
import { BEDDING } from '../shared/bedding';
import { LIGHTING } from '../shared/lighting';

export const initialState = {
    bath_shower: BATH_SHOWER,
    bedding: BEDDING,
    lighting: LIGHTING
}

export const Reducer = (state = initialState, action) => {
    return state;
}