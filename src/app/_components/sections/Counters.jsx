"use client";

import Data from "@data/sections/counters.json";
import { useEffect } from "react";
import { CountersBarAnim } from "@common/counters";
import { useTranslation } from "../../_context/TranslationContext";

const CountersSection = () => {
  const { t } = useTranslation();
  useEffect(() => {
    CountersBarAnim();
  }, []);

  // Calculate years of experience from a start date
  const calculateYearsExperience = (startDate) => {
    if (!startDate) return 0;

    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    const monthDiff = now.getMonth() - start.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
      years--;
    }

    return years;
  };

  const counterItems = [
    {
      label: t('counters.experience'),
      value: calculateYearsExperience(Data.items[0].startDate),
      valueAfter: Data.items[0].valueAfter
    },
    {
      label: t('counters.completed'),
      value: Data.items[1].value,
      valueAfter: Data.items[1].valueAfter
    }
  ];

  return (
    <>
      {/* counters */}
      <div className="container-fluid">
        <div className="row p-30-0">
          {counterItems.map((item, key) => {
            return (
              <div className="col-md-3 col-6" key={`counters-item-${key}`}>
                {/* counter frame */}
                <div className="art-counter-frame">
                  <div className="art-counter-box">
                    <span className="art-counter" data-count={item.value}>
                      0
                    </span>
                    <span className="art-counter-plus">{item.valueAfter}</span>
                  </div>
                  <h6>{item.label}</h6>
                </div>
                {/* counter frame end */}
              </div>
            );
          })}
        </div>
      </div>
      {/* counters end */}
    </>
  );
};

export default CountersSection;
