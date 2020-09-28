import React from 'react';
import '../styles/StatisticsSideBar.scss'

const StatisticsSidebar = ({ statistics }) => {
  return (
    <aside id="statistics-sidebar">
      {statistics.map(({ value, caption }, index) => (
        <div className="statistic-block" key={index}>
          <p>
            {caption} : {value}
          </p>
        </div>
      ))}
    </aside>
  );
};

export { StatisticsSidebar };
