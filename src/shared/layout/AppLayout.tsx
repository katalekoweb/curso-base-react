import React from "react";
import "./AppLayout.css";
import { NavLink } from "react-router";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout = (props: IAppLayout) => {
  return (
    <div className="layout-base">
      <div className="layout-header">
        <div className="layout-header-container">
          <NavLink to="/">Pagina Inicial</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>
      </div>
      <div className="layout-content">{props.children}</div>
    </div>
  );
};

export default AppLayout;
