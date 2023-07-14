import {http} from '../http';
import { ENDPOINTS } from '../constant';

export const getAreaList = () => {
    return http.get (ENDPOINTS.GET_AREAS)
}

export const getAreaFooditems = (area) => {
    return http.get (`${ENDPOINTS.FILTER_FOOD_BY_AREAS}?a=${area}`)
}