import {ADD_ORDER} from "../constants/action-types.js";

export const addOrder = order => ({type: ADD_ORDER, payload: order});