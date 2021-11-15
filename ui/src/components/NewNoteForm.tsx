import { gql, useMutation } from "@apollo/client";
import { Button, Input, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const CREATE_NOTE = gql`
  mutation CreateNote($description: String!) {
    createNote(description: $description) {
      id
      description
    }
  }
`;

export const NewNoteForm = () => {
  const [description, setDescription] = useState('');
  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_NOTE)
  const navigate = useNavigate();
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      mutateFunction({
        variables: {
          description
        }
      });
      setTimeout(() => {
        navigate('/');
      }, 1000)
    }}>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ width: 200 }}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="contained-button">
        <Input id="contained-button" type="submit" />
        <Button variant="contained" component="span">
          Submit
        </Button>
      </label>
    </form>
  )
};

