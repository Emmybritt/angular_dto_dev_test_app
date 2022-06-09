import { Action, createReducer, on } from "@ngrx/store";
import { CreditCardDetails, loadingStateInterface } from "../../shared/models/credit-card.model";
import { addDetailsAction } from "./payment.action";

// export const creditCardStates: CreditCardDetails = {
//     card_number: "",
//     card_holder: "",
//     expiration_date: "",
//     amount: 0
// };

export const initialState: loadingStateInterface = {
    isSubmitting: false,
}


const LoadingReducer = createReducer(
    initialState, 
    on(addDetailsAction, 
    (state): loadingStateInterface => ({
    ...state,
    isSubmitting: true,
})));

export function reducers(state: loadingStateInterface, action: Action){
    return LoadingReducer(state, action);
}