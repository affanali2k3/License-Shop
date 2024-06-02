import React from "react";
import "./CompanyStats.scss";
export const CompanyStats = () => {
  return (
    <section className="company-stats-main">
      <div className="stat-1 stat">
        <img src="/stat-1.png" />
        <h1>120k+</h1>
        <p>Total Courses</p>
      </div>
      <div className="stat-2 stat">
        <img src="/stat-1.png" />
        <h1>120+</h1>
        <p>Expert Instructors</p>
      </div>
      <div className="stat-3 stat">
        <img src="/stat-1.png" />
        <h1>119k+</h1>
        <p>Happy Students</p>
      </div>
      <div className="stat-4 stat">
        <img src="/stat-1.png" />
        <h1>119+</h1>
        <p>National Awards</p>
      </div>
    </section>
  );
};
