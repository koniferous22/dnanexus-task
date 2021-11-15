import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Note, NoteVariables } from './__generated__/Note';

import { Layout } from './Layout';
import { Typography } from '@mui/material';
import { Note as NoteComponent } from './Note';

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
    <Layout>
      <Typography variant="h1" component="h2">
        {`Detail of "${data.note.description}"`}
      </Typography>;
      <NoteComponent id={data.note.id!} description={data.note.description!} />
    </Layout>
  )
}

