import SellsTable from '../components/SellsTable';
import WeekList from '../components/WeekList';

export default function Home() {
  return (
    <div>
      <section>
        <h1>Store Name</h1>
        <article>Graph of sells</article>
      </section>
      <WeekList />
      <SellsTable />
    </div>
  );
}
