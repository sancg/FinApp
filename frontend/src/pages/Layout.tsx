import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ThemeToggleButton from '../components/ToggleTheme';
import { getThemeStyles } from '../utils/theme';
import { useTheme } from '../hooks/ThemeContext';
import MobileBar from '../components/MobileBar';
import { Box, Paper } from '@mui/material';

export default function Layout() {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);
  return (
    <div
      style={{ backgroundColor: styles.background, color: styles.textColor, height: '100vh' }}
    >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/extra">Extra</Link>
        <ThemeToggleButton />
      </nav>
      <main>
        <Box sx={{ bgcolor: styles.background, mb: '50px' }}>
          <Outlet />
        </Box>
        <Paper square sx={{ pb: '50px', mb: '50px', bgcolor: styles.background }}></Paper>
      </main>
      <MobileBar />
    </div>
  );
}
