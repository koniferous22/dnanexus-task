/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Notes
// ====================================================

export interface Notes_notes {
  __typename: "Note";
  id: string | null;
  description: string | null;
}

export interface Notes {
  notes: (Notes_notes | null)[] | null;
}
