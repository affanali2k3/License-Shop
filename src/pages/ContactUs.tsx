import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { ContactOptions } from "../components/ContactOptions/ContactOptions";

export const ContactUs = () => {
  return (
    <>
      <PageHeader heading="Contact Us" subHeading="Contact" />
      <ContactOptions />
    </>
  );
};
