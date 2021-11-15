import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoteListingPage } from './components/NoteListingPage';
import { NoteDetailPage } from './components/NoteDetailPage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { NewNoteForm } from './components/NewNoteForm';
import CssBaseline from '@mui/material/CssBaseline';
import { NotFound } from './components/NotFound';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export const App = () => {
  return (
    <ApolloProvider
      client={client}
    >
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes>
            <Route
              path='/'
              element={<NoteListingPage />}
            />
            <Route
              path='note/:id'
              element={<NoteDetailPage />}
            />
            <Route
              path='new-note'
              element={<NewNoteForm />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
