"use client";

import Data from "@data/sections/history.json";
import ImageView from "@components/ImageView";
import { useTranslation } from "../../_context/TranslationContext";

const HistorySection = ({ paddingTop = 0 }) => {
  const { t } = useTranslation();
  const col1Items = t("history.col1") || [];
  const col2Items = t("history.col2") || [];

  return (
    <section id="history">
      {/* container */}
      <div className="container-fluid">
        {/* row */}
        <div className={paddingTop ? "row p-30-0" : "row"}>
          {/* col */}
          <div className="col-lg-6">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4>{t("history.education")}</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}

            {/* timeline */}
            <div className="art-timeline art-gallery">
              {col1Items.map((item, key) => (
                <div className="art-timeline-item" key={`history-item-${key}`}>
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>{item.title}</h5>
                        <div className="art-el-subtitle">{item.subtitle}</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">{item.date}</span>
                      </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                    {Data.col1.items[key].button && (
                      <>
                        {Data.col1.items[key].button.type == "image" ? (
                          <ImageView src={Data.col1.items[key].button.link} label={item.label} />
                        ) : (
                          <a
                            href={Data.col1.items[key].button.link}
                            target="_blank"
                            className="art-link art-color-link art-w-chevron"
                            rel="noreferrer"
                          >
                            {item.label}
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* timeline end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-lg-6">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4>{t("history.workHistory")}</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}

            {/* timeline */}
            <div className="art-timeline">
              {col2Items.map((item, key) => (
                <div className="art-timeline-item" key={`history-item-2-${key}`}>
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>{item.title}</h5>
                        <div className="art-el-subtitle">{item.subtitle}</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">{item.date}</span>
                      </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                    {Data.col2.items[key].button && (
                      <>
                        {Data.col2.items[key].button.type == "image" ? (
                          <ImageView src={Data.col2.items[key].button.link} label={item.label} />
                        ) : (
                          <a
                            href={Data.col2.items[key].button.link}
                            target="_blank"
                            className="art-link art-color-link art-w-chevron"
                            rel="noreferrer"
                          >
                            {item.label}
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* timeline end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </section>
  );
};

export default HistorySection;
