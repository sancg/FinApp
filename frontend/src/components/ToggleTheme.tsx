import { useTheme } from '../hooks/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggleButton;
