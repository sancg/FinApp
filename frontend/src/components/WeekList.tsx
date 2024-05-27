type props = {
  weekDays: number[];
  nowDay: number;
};
export default function WeekList({ weekDays, nowDay }: props) {
  return (
    <section>
      <h3>Days of the week</h3>
      {weekDays.map((d) => (
        <div key={d}>{d == nowDay ? <span> YES </span> : d}</div>
      ))}
    </section>
  );
}
