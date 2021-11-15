import { gql, useMutation } from "@apollo/client";
import { Card, CardContent, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { GET_NOTES } from "./NoteListingPage";

type Props = {
  id: string;
  description: string;
}

const DELETE_NOTE = gql`
  mutation CreateNote($id: ID!) {
    deleteNote(id: $id) {
      id
      description
    }
  }
`;


export const Note = ({ id, description }: Props) => {
  const navigate = useNavigate();
  const [mutateFunction, { data, loading, error }] = useMutation(DELETE_NOTE, {
    refetchQueries: [
      {
        query: GET_NOTES
      }
    ]
  })
  return (
    <Card>
      <CardContent onClick={() => navigate(`/note/${id}`)}>
        {description}
      </CardContent>
      <IconButton aria-label="delete" onClick={() => {
        mutateFunction({
          variables: {
            id
          }
        });
        setTimeout(() => {
          navigate('/')
        }, 1000);
      }}>
        <DeleteIcon />
      </IconButton>
    </Card>

  );
}
