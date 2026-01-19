"use client";

import Data from "@data/sections/contact-info.json";
import { useTranslation } from "../../_context/TranslationContext";

const ContactInfoSection = () => {
  const { t } = useTranslation();
  const contactItems = t("contactInfo.items") || [];

  return (
    <>
      {/* contact info */}
      <div className="container-fluid">
        {/* row */}
        <div className="row p-30-0">
          {/* col */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4>{t("contactInfo.title")}</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          {contactItems.map((item, key) => (
            <div className="col" key={`contact-info-item-${key}`}>
              {/* contact card */}
              <div className="art-a art-card">
                <div className="art-table p-15-15">
                  <ul>
                    {item.info.map((info_item, info_key) => (
                      <li key={`contact-info-item-${key}-info-${info_key}`}>
                        <h6>{info_item.label}:</h6>
                        <span>{info_item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* contact card end */}
            </div>
          ))}
        </div>
        {/* row end */}
      </div>
      {/* contact info end */}
    </>
  );
};

export default ContactInfoSection;
