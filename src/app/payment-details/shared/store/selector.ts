import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loadingStateInterface } from "../models/credit-card.model";

export const detailsFeatureSelector = createFeatureSelector<loadingStateInterface>('details')

export const isSubmittingSelector = createSelector(detailsFeatureSelector, (detailState: loadingStateInterface) => detailState.isSubmitting)