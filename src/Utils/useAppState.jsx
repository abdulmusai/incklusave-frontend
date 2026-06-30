import { useState } from "react";
import { reducer } from "../reducers/appReducer";

export default function useAppState(init) {
  const [state, setState] = useState(init);

  function dispatch(action) {
    setState((s) => reducer(s, action));
  }

  return [state, dispatch];
}



