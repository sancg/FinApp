const lightTheme = {
  background: '#ffffff',
  textColor: '#000000',
  gridColor: '#cccccc',
  lineColors: ['#8884d8', '#82ca9d']
};

const darkTheme = {
  background: '#333333',
  textColor: '#ffffff',
  gridColor: '#555555',
  lineColors: ['#8884d8', '#82ca9d']
};

export const getThemeStyles = (theme: 'light' | 'dark') =>
  theme === 'light' ? lightTheme : darkTheme;
