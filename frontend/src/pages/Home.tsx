import Chart from '../components/Chart';
import SellsTable from '../components/SellsTable';
import WeekList from '../components/WeekList';

export default function Home() {
  const nowDay = new Date().getDate();
  const weekDays = [
    ...Array.from({ length: 3 }, (_, index) => nowDay + index),
    ...Array.from({ length: 3 }, (_, index) => index + 1).map((i) => nowDay - i)
  ].sort();

  const uData = [4000, 3000, 2000, 2780, 1890, 2390];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800];
  const chartProps = {
    weekDays,
    passWeek: uData,
    nowWeek: pData
  };

  return (
    <div>
      <section>
        <h1>Store Name</h1>
        <Chart {...chartProps} />
      </section>
      <WeekList weekDays={weekDays} nowDay={nowDay} />
      <SellsTable />
    </div>
  );
}
