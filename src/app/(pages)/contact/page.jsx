import React from "react";
import AppData from "@data/app.json";

import ContactInfoSection from "@components/sections/ContactInfo";
import ContactFormSection from "@components/sections/Contact";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

const ContactPage = () => {
  return (
    <>
      <ContactInfoSection paddingTop={1} />
      <ContactFormSection />
    </>
  );
};
export default ContactPage;
