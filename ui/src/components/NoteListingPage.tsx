import { gql, useQuery } from '@apollo/client';
import { Notes } from './__generated__/Notes';

import { Link as RouterLink } from 'react-router-dom';
import { Layout } from './Layout';
import { Box, Link } from '@mui/material';
import { Note } from './Note';

export const GET_NOTES = gql`
  query Notes {
    notes {
      id
      description
    }
  }
`;
export const NoteListingPage = () => {
  const { loading, error, data } = useQuery<Notes>(GET_NOTES);

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
      <Box
        display={"flex"}
        sx={{ flexDirection: 'column' }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box>
          {data.notes?.map((note) => (
            <Box mt={'10px'} key={note?.id!}>
              <Note id={note?.id!} description={note?.description!} />
            </Box>
          ))}
        </Box>
        <Box mt={'20px'}>
          <Link component={RouterLink} to='/new-note'>{'Create a new note'}</Link>
        </Box>
      </Box>
    </Layout>
  )
}

