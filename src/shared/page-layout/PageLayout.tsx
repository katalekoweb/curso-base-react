import React from "react";
import PageLayoutStyles from "./PageLayout.module.css";

interface IPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout = ({ children, title }: IPageLayoutProps) => {
  return (
    <div className={PageLayoutStyles.PageLayoutContainer}>
      <div className={PageLayoutStyles.PageContent}>
        <div>
          <h1 className={PageLayoutStyles.PageTitle}>{title}</h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
