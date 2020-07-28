import React from "react";
import App from "../components/App";
import useTitle from "@4leaf.ysh/use-title";

const Root = () => {
  useTitle("MOVIE LIKE");

  return <App />;
};

export default Root;
