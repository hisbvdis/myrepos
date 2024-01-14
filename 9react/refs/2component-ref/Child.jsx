import { forwardRef } from "react"

export default forwardRef(
  function Child(props, ref) {
    return (<>
      <input type="text" ref={ref}/>
    </>)
  }
);

// ===========================================================================
// const Child = forwardRef((props, ref) => {
//   return (<>
//     <input type="text" ref={ref}/>
//   </>)
// })

// export default Child;
