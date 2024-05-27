import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ThemeToggleButton from '../components/ToggleTheme';
import { getThemeStyles } from '../utils/theme';
import { useTheme } from '../hooks/ThemeContext';

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
        <Outlet />
      </main>
    </div>
  );
}
