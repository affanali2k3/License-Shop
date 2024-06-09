import React, { useRef } from "react";
import "./Newsletter.scss";

export const Newsletter = () => {
  // Create a ref for the form
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const email = formData.get("email") as string;
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      } // Example: send the form data to an API
      fetch(formRef.current.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            console.log("Form submitted successfully");
          } else {
            console.error("Form submission error");
          }
        })
        .catch((error) => {
          console.error("Form submission error", error);
        });
    }
    window.location.href = "thank-you";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="newsletter-main">
      <div className="newsletter-secondary">
        <h1>Sign Up For Our 60 Seconds Money Making Video</h1>
        <p className="text">Every week I give you my one money making strategy that will help propell your business</p>
        <div className="inputs">
          <form ref={formRef} method="post" action="https://systeme.io/embedded/18404581/subscription" onSubmit={handleSubmit}>
            <input required={true} type="text" name="surname" placeholder="First Name" />
            <input required={true} type="text" name="email" placeholder="Email" />
            <button type="submit" className="join-button btn">
              JOIN THE COMMUNITY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
