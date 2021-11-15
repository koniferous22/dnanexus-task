/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Note
// ====================================================

export interface Note_note {
  __typename: "Note";
  id: string | null;
  description: string | null;
}

export interface Note {
  note: Note_note | null;
}

export interface NoteVariables {
  id: string;
}
