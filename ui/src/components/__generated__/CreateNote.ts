/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateNote
// ====================================================

export interface CreateNote_createNote {
  __typename: "Note";
  id: string | null;
  description: string | null;
}

export interface CreateNote {
  createNote: CreateNote_createNote | null;
}

export interface CreateNoteVariables {
  description: string;
}
