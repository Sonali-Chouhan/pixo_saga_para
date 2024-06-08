import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./Redux/Users/User.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
     App
    </div>
  )
}
export default App