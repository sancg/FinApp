import cModule from '../pages/Home.module.css';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '../hooks/ThemeContext';
import { getThemeStyles } from '../utils/theme';

interface CenteredChartProps {
  passWeek: number[];
  nowWeek: number[];
  weekDays: number[];
}

export default function Chart({ passWeek, nowWeek, weekDays }: CenteredChartProps) {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);

  return (
    <article className={cModule.ctr_chart}>
      <LineChart
        sx={{
          backgroundColor: styles.background,
          color: styles.textColor,
          '& .MuiChartsLegend-root': {
            color: styles.textColor
          },
          '& .MuiChartsLegend-series > text > tspan': {
            fill: styles.textColor
          },
          '& .MuiChartsAxis-root': {
            stroke: styles.textColor
          },
          '& .MuiChartsAxisHighlight-root': {
            stroke: styles.textColor
          },
          '& .MuiChartsAxis-line': {
            stroke: styles.textColor
          },
          '& .MuiChartsAxis-tick': { stroke: styles.textColor },
          maxWidth: 500
        }}
        width={500}
        height={300}
        series={[
          { data: nowWeek, label: 'semana actual', color: styles.lineColors[0] },
          { data: passWeek, label: 'semana anterior', color: styles.lineColors[1] }
        ]}
        xAxis={[
          {
            scaleType: 'point',
            data: weekDays
          }
        ]}
      />
    </article>
  );
}
