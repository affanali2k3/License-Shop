import React from "react";
import "./WhyChooseUs.scss";
export const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-main">
      <div className="content">
        <h1>WHY CHOOSE US?</h1>
        <div className="item">
          <h2>CONTENT AND PLATFORM ARE UP TO DATE </h2>
          <p>
            Content is the key to your success, and we’re always updating our courses to stay on top of industry trends. We want you to
            study, grow, and succeed by using the most cutting-edge educational concepts.
          </p>
        </div>
        <div className="item">
          <h2>ONLINE LEARNING</h2>
          <p>
            Classrooms can be inconvenient, and obsolete education can be provided. Online learning solution was created to keep students
            engaged with dynamic content and real-world scenarios.
          </p>
        </div>
        <div className="item">
          <h2>SCHEDULE</h2>
          <p>
            We understand how hectic life can be. You can access your course whenever you want, from wherever you are. You can do it in your
            spare time first thing in the morning or before going to bed. You can pause and resume anytime and continue where you left off!
          </p>
        </div>
        <div className="item">
          <h2>CUSTOMER SERVICE</h2>
          <p>We’re available by phone and email on weekdays.</p>
        </div>
      </div>
      <img src="/why-choose-us.png" />
    </section>
  );
};
