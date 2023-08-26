import { useState } from "react";
import Link from "next/link";

import styles from "../styles/SideNav.module.css";

const SHOWN = "shown";
const HIDDEN = "hidden";

export default function SideNav() {
  const [shownHidden, setShownHidden] = useState(HIDDEN);

  const onClickChevronBtn = () => {
    switch (shownHidden) {
      case HIDDEN:
        setShownHidden(SHOWN);
        break;
      case SHOWN:
        setShownHidden(HIDDEN);
        break;
    }
  };

  interface IPage {
    key: React.Key;
    endpoint: String;
    icon: String;
    label: String;
  }

  const pages = [
    // {
    //   key: 0,
    //   endpoint: "/",
    //   icon: "fa-house-chimney",
    //   label: "Home"
    // },
    {
      key: 1,
      endpoint: "https://github.com/danielxhogan/resume",
      icon: "fa-file",
      label: "Resume"
    }
  ];

  const renderPages = (pages: IPage[]) => {
    return pages.map(page => {
      return (
        <Link key={page.key} href={`${page.endpoint}`} target="_blank">
          <div
            className={`
            ${styles["side-nav-item"]}
            ${styles[shownHidden]}
          `}
            onClick={() => setShownHidden(HIDDEN)}
          >
            <div className={styles["page-icon"]}>
              <i className={`fa-solid fa-2x ${page.icon}`}></i>
            </div>
            <div className={styles["page-label"]}>
              <h2>{page.label}</h2>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className={styles["side-nav"]}>
      <div
        className={`
        ${styles["toggle-container"]}
        ${styles[shownHidden]}
        `}
      >
        <div
          className={`
            ${styles["toggle-button"]}
            ${styles[shownHidden]}
            `}
          onClick={onClickChevronBtn}
        >
          <i className="fa-solid fa-angle-right" />
        </div>

        {renderPages(pages)}

        {/* <div
          className={`
            ${styles["side-nav-item"]}
            ${styles[shownHidden]}
          `}
          onClick={() => setShownHidden(HIDDEN)}
        >
          <div className={styles["page-icon"]}>
            <i className={`fa-solid fa-2x fa-file`}></i>
          </div>
          <div className={styles["page-label"]}>
            <h2>Resume</h2>
          </div>
        </div> */}
        <div
          className={`
          ${styles["page-buttons"]}
          ${styles[shownHidden]}
          `}
        ></div>
      </div>
    </div>
  );
}
