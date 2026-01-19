"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ImageView from "@components/ImageView";

import { useTranslation } from "../_context/TranslationContext";

const ProjectsMasonryContent = ({ projects, categories, layout = "masonry", columns = 2 }) => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const urlFilter = searchParams.get("filter");

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    import("isotope-layout").then((Isotope) => {
      isotope.current = new Isotope.default(".art-grid", {
        itemSelector: ".art-grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".art-grid-item",
        },
        transitionDuration: ".6s",
      });

      // Apply initial filter if present in URL
      if (urlFilter) {
        setFilterKey(urlFilter);
      }
    });
  }, [urlFilter]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key, e) => {
    e.preventDefault();
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".art-filter a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-filter");
      if (filterValue == key) {
        filter.classList.add("art-current");
      } else {
        filter.classList.remove("art-current");
      }
    });
  };

  return (
    <>
      {/* container */}
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
                <h4>{t("history.workHistory")}</h4>
              </div>
              {/* title frame end */}
              {/* right frame */}
              <div className="art-right-frame">
                {/* filter */}
                <div className="art-filter">
                  {/* filter link */}
                  <a
                    href="#"
                    data-filter="*"
                    onClick={(e) => handleFilterKeyChange("*", e)}
                    className={filterKey === "*" ? "art-link art-current" : "art-link"}
                  >
                    {t("projects.allCategories")}
                  </a>
                  {/* filter link */}
                  {categories.map((item, key) => (
                    <a
                      href="#"
                      key={`projects-filter-item-${key}`}
                      data-filter={`.${item.slug}`}
                      className={
                        filterKey === `.${item.slug}` ? "art-link art-current" : "art-link"
                      }
                      onClick={(e) => handleFilterKeyChange(`.${item.slug}`, e)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* filter end */}
              </div>
              {/* right frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          <div className={`art-grid art-grid-${columns}-col art-gallery`}>
            {/* grid item */}
            {projects.map((item, key) => (
              <div
                className={`art-grid-item ${item.category_slug} id-${item.id}`}
                key={`projects-item-${key}`}
              >
                {/* grid item frame */}
                <a
                  data-fancybox="gallery"
                  href={item.image}
                  className={
                    layout == "masonry"
                      ? `art-a art-portfolio-item-frame art-${
                          columns == 3 && item.masonrySize == "horizontal"
                            ? "square"
                            : item.masonrySize
                        }`
                      : `art-a art-portfolio-item-frame art-${
                          columns == 3 ? "square" : "horizontal"
                        }`
                  }
                >
                  {/* img */}
                  <img src={item.image} alt={item.title} />
                  {/* zoom icon */}
                  <span className="art-item-hover">
                    <i className="fas fa-expand"></i>
                  </span>
                </a>
                {/* grid item frame end */}
                {/* description */}
                <div className="art-item-description">
                  {/* title */}
                  <h5 className="mb-15">{item.title}</h5>
                  {/* button */}
                  <a
                    href={item.description.button.link}
                    className="art-link art-color-link art-w-chevron"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.description.button.label}
                  </a>
                </div>
                {/* description end */}
              </div>
            ))}
            {/* grid item end */}
          </div>
        </div>
        {/* row end */}

        <ImageView />
      </div>
      {/* container end */}
    </>
  );
};

const ProjectsMasonry = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProjectsMasonryContent {...props} />
  </Suspense>
);

export default ProjectsMasonry;
