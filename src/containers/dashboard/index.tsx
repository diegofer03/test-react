/* eslint-disable @typescript-eslint/no-unused-vars */
import { CssBaseline, Stack } from "@mui/material";
import CommentsListComponent from "../../components/commentsList";
import AppTheme from "../../shared/shared-theme/AppTheme";
import styled from "styled-components";
import NavbarComponent from "../../components/navbar";

const DashboardContainer = styled(Stack)(({ theme }) => ({
  maxHeight: '800px',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    backgroundRepeat: 'no-repeat',
  },
}));

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
        {/* <CssBaseline enableColorScheme /> */}
        <DashboardContainer direction="column" justifyContent="space-between">
          <NavbarComponent/>
          <CommentsListComponent/>
        </DashboardContainer>
    </AppTheme>
  )
}
