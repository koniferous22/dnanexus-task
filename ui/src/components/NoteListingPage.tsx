import { gql, useQuery } from '@apollo/client';
import { Notes } from './__generated__/Notes';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { Layout } from './Layout';

const GET_NOTES = gql`
  query Notes {
    notes {
      id
      description
    }
  }
`;
export const NoteListingPage = () => {
  const { loading, error, data } = useQuery<Notes>(GET_NOTES);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div>{'Loading...'}</div>
    );
  } 
  if (error || !data?.notes) {
    return (
      <div>
        {`Error! ${error?.message}`};
      </div>
    )
  } 

  return (
    <Layout>
      {data.notes?.map((note) => (
        <Card key={note?.id!}>
          <CardContent onClick={() => navigate(`/note/${note?.id}`)}>
            {note?.description}
          </CardContent>
        </Card>
      ))}
    </Layout>
  )
}

