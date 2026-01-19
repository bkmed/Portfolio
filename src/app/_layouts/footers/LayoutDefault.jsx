"use client";

import AppData from "@data/app.json";
import { useTranslation } from "../../_context/TranslationContext";

const DefaultFooter = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* footer */}
        <footer className="footer">
          {/* copyright */}
          <div className="art-copy">{t("footer.copyright")}</div>

          {/* developer */}
          <div>
            {t("common.developedBy")}{" "}
            <a href="https://github.com/bkmed" target="_blank" rel="noreferrer">
              {t("footer.author")}
            </a>
          </div>
        </footer>
        {/* footer end */}
      </div>
      {/* container end */}
    </>
  );
};
export default DefaultFooter;
