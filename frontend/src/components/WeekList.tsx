import React from 'react';

export default function WeekList() {
  const nowDay = new Date().getDate();
  const weekDays = [
    ...Array.from({ length: 3 }, (_, index) => nowDay + index),
    ...Array.from({ length: 3 }, (_, index) => index + 1).map((i) => nowDay - i)
  ].sort();

  return (
    <section>
      <h3>Days of the week</h3>
      {weekDays.map((d) => (
        <div key={d}>{d == nowDay ? <span> YES </span> : d}</div>
      ))}
    </section>
  );
}
