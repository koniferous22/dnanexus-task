import { Box } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

type Props = {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Box
      display={"flex"}
      sx={{ flexDirection: 'column' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box mb={'50px'}>
        <nav>
          <Link component={RouterLink} to="/">Go to all notes</Link>
        </nav>
      </Box>
      <Box width={'50vw'}>
        {children}
      </Box>
    </Box>
  )
};
