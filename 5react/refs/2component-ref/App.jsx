import { useRef } from "react"
import Child from "./Child"

export default function App() {
  const child = useRef();

  return (<>
    Typed text appears in "Child" component via its "ref":<br/>
    <input type="text" onChange={(e) => child.current.value = e.target.value}/>

    <hr/>

    "Child" component with "ref":<br/>
    <Child ref={child}/>
  </>)
}
