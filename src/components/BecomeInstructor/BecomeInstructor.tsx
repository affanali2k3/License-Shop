import React from "react";
import "./BecomeInstructor.scss";
export const BecomeInstructor = () => {
  return (
    <section className="become-instructor-main">
      <div className="content">
        <h1>Become an Instructor join with Us</h1>
        <p>
          Aliquam mauris leo, mollis tempus semper in, fringilla ac libero. Curabitur id venenatis leo. Aenean id venenatis lectus, ac
          semper lacus. Vestibulum malesuada
        </p>
      </div>
      <div className="image-div">
        <img src="/instructor-1.png" />
      </div>
      <div className="image-div">
        <img src="/instructor-2.png" />
      </div>
      <div className="button-div">
        <div className="join-button">
          <p>JOIN WITH US</p>
          <img src="/arrow-white.png" />
        </div>
      </div>
    </section>
  );
};
