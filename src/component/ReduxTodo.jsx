import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slice/todo"
import { useEffect } from "react";

export default function Todolists() {
  // console.log("State", state)
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.todo?.data);
  const stateLoading = useSelector((state) => state?.todo?.loading);

  if (stateLoading) {
    return <h1>Loading...</h1>
  }

  useEffect(() => {
    console.log({ state: state })
  }, [state])

  return (
    <div className="px-10">
      <button onClick={(e) => dispatch(fetchTodos())} className="px-6 py-3 bg-blue-500 rounded-xl my-4 text-white">Fetch</button>
      {state?.map((e) => (
        <li>{e.title}</li>
      ))}
    </div>
  )
}