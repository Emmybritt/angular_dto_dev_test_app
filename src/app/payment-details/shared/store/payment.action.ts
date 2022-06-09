import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionTypes";

export const addDetailsAction = createAction(
    ActionTypes.ADDETAILS,
    props<{card_number: string; card_holder: string, expiration_date: string; security_code: string, amount: number}>()
);