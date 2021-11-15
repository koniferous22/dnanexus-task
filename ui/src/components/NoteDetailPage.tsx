import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Note, NoteVariables } from './__generated__/Note';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const GET_NOTE = gql`
  query Note($id: ID!) {
    note(id: $id) {
      id
      description
    }
  }
`;

export const NoteDetailPage = () => {

  const { id } = useParams()
  const { loading, error, data } = useQuery<Note, NoteVariables>(GET_NOTE, {
    variables: {
      id: id!,
    }
  });

  if (loading) {
    return (
      <div>{'Loading...'}</div>
    );
  } 
  if (error || !data) {
    return (
      <div>
        {`Error! ${error?.message}`};
      </div>
    )
  } 

  if (!data.note) {
    return (
      <div>
        {'Not found'}
      </div>
    );
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {data.note?.description}
      </CardContent>
    </Card>
  )
}

