import React, { Suspense } from "react";
import "./styles/main.scss";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "app/Providers/ThemeProvider";
import { AppRouter } from "app/Providers/router";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
