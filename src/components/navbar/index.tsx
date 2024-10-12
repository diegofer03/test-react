import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useApp } from '../../hooks/useProviderApp';
import { useNavigate } from 'react-router-dom';

export default function NavbarComponent() {
  const { signOut } = useApp()!;
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut()
    navigate("/login");
  }

  return (
    <AppBar position="static" sx={{background: 'unset', borderRadius: '20px'}}>
    <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        ProDashboard
        </Typography>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
    </Toolbar>
    </AppBar>
    
  )
}
