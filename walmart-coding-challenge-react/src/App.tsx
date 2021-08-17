import React from "react";
import { useSelector } from "react-redux";
import { State } from "./redux";
import IsLoggedRouter from "./routers/is-logged-router";
import NotLoggedRouter from "./routers/not-logged-router";

function App() {
  const state = useSelector((state: State) => state.login);

  return (
    <div>
      {state==null?<NotLoggedRouter />:<IsLoggedRouter />}
    </div>
  );
}

export default App;
