import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

export const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route path="/" />
        <Route
          path={["/search,", "/images", "/news", "/videos"]}
          element={<Results />}
        />
        <Route path="*" element={<Navigate to="/search" />} />
      </Switch>
    </div>
  );
};
