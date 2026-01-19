"use client";

import ContactForm from "@components/ContactForm";
import { useTranslation } from "../../_context/TranslationContext";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* contact */}
      <div className="container-fluid">
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4>{t("contact.title")}</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}

            {/* contact form frame */}
            <div className="art-a art-card">
              <ContactForm />
            </div>
            {/* contact form frame end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* contact end */}
    </>
  );
};
export default ContactSection;
