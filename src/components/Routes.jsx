import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const Routes = () => {
  const paths = ["/search", "/images", "/news", "/videos"];

  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/" element={<Navigate to="/search" />} />

        {paths.map((path, i) => (
          <Route key={i} path={path} element={<Results />} />
        ))}
      </Switch>
    </div>
  );
};
