import { Box } from "@mui/material";

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
      <Box width={'50vw'}>
        {children}
      </Box>
    </Box>
  )
};
