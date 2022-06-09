export interface CreditCardDetails {
    card_number: string,
    card_holder: string,
    expiration_date: string,
    security_code?:string,
    amount: number,
}