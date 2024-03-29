import { useState } from "react";
import Filters from "./Filters";
import Results from "./Results";
import data from "./data.js";

export default () => {
  const [search, setSearch] = useState("");
  const [stock, setStock] = useState(false);
  
  return (<>
    <Filters
      search={search}
      liftSearch={(value) => setSearch(value)}
      stock={stock}
      liftStock={(value) => setStock(value)}
    />
    <Results
      data={data}
      search={search}
      stock={stock}
    />
  </>)
}
