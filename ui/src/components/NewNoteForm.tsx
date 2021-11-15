import { gql, useMutation } from "@apollo/client";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Layout } from "./Layout";
import { GET_NOTES } from "./NoteListingPage";

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
  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_NOTE, {
    refetchQueries: [
      {
        query: GET_NOTES
      }
    ]
  })
  const navigate = useNavigate();
  return (
    <Layout>
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
        <Box
          display={"flex"}
          sx={{ flexDirection: 'column' }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: 200 }}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box mt={'20px'}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Layout>
  )
};

