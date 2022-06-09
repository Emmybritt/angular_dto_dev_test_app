import { createReducer, on } from "@ngrx/store";
import { CreditCardDetails } from "../../shared/models/credit-card.model";

export const creditCardStates: CreditCardDetails = {
    card_number: "",
    card_holder: "",
    expiration_date: "",
    amount: 0
};

// export const creditCardReducer = createReducer(
//     // creditCardStates, on(pay, ()),
// ) 