import React from "react";
import "./CourseOverview.scss";
export const CourseOverview = () => {
  return (
    <section className="course-overview-main">
      <h1>Course Overview</h1>
      <p className="para">
        Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem.
        Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam
        nec porta turpis, ac aliquet sem. Pellentesque porttitor enim finibus magna rhoncus, sed hendrerit ante suscipit. In tempor eu urna
        in posuere. Etiam vel lectus elit
      </p>
      <p className="para">
        Aenean bibendum lorem purus, ut malesuada purus dignissim in. Etiam ornare suscipit ipsum vel auctor. Proin malesuada risus sem.
        Aliquam erat volutpat. Duis rhoncus tincidunt ullamcorper. Aliquam sodales elit nec eros iaculis, et facilisis augue sagittis. Nam
        nec porta turpis
      </p>
      <div className="course-attributes">
        <h1>What you will learn?</h1>
        <div className="course-attributes-secondary">
          <div className="attribute">
            <div className="icon">
              <img src="/tick.png" />
            </div>
            <p>Web-based learning promotes active and independent learning.</p>
          </div>
          <div className="attribute">
            <div className="icon">
              <img src="/tick.png" />
            </div>
            <p>You can study your Courses anytime and anywhere.</p>
          </div>
          <div className="attribute">
            <div className="icon">
              <img src="/tick.png" />
            </div>
            <p>You can study your Courses anytime and anywhere.</p>
          </div>
          <div className="attribute">
            <div className="icon">
              <img src="/tick.png" />
            </div>
            <p>It promotes a self-paced learning process.</p>
          </div>
          <div className="attribute">
            <div className="icon">
              <img src="/tick.png" />
            </div>
            <p>You can access the study material unlimited times.</p>
          </div>
        </div>
      </div>

      <div className="course-requirements">
        <h1>Requirements</h1>
        <div className="attribute">
          <div className="icon">
            <img src="/tick.png" />
          </div>
          <p>Web-based learning promotes active and independent learning.</p>
        </div>
        <div className="attribute">
          <div className="icon">
            <img src="/tick.png" />
          </div>
          <p>You can study your Courses anytime and anywhere.</p>
        </div>
        <div className="attribute">
          <div className="icon">
            <img src="/tick.png" />
          </div>
          <p>You can study your Courses anytime and anywhere.</p>
        </div>
        <div className="attribute">
          <div className="icon">
            <img src="/tick.png" />
          </div>
          <p>It promotes a self-paced learning process.</p>
        </div>
        <div className="attribute">
          <div className="icon">
            <img src="/tick.png" />
          </div>
          <p>You can access the study material unlimited times.</p>
        </div>
      </div>
    </section>
  );
};
