import cModule from './Home.module.css';
import SellsTable from '../components/SellsTable';
import WeekList from '../components/WeekList';

import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '../hooks/ThemeContext';
import { getThemeStyles } from '../utils/theme';

export default function Home() {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);

  const nowDay = new Date().getDate();
  const weekDays = [
    ...Array.from({ length: 3 }, (_, index) => nowDay + index),
    ...Array.from({ length: 3 }, (_, index) => index + 1).map((i) => nowDay - i)
  ].sort();

  const uData = [4000, 3000, 2000, 2780, 1890, 2390];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800];

  return (
    <div>
      <section>
        <h1>Store Name</h1>
        <article className={cModule.ctr_chart}>
          <LineChart
            sx={{
              margin: 'auto',
              backgroundColor: styles.background,
              color: styles.textColor
            }}
            height={300}
            series={[
              { data: pData, label: 'semana anterior' },
              { data: uData, label: 'semana actual' }
            ]}
            xAxis={[{ scaleType: 'point', data: weekDays }]}
          />
        </article>
      </section>
      <WeekList weekDays={weekDays} nowDay={nowDay} />
      <SellsTable />
    </div>
  );
}
