import { useMemo, useState } from "react";

const App = () => {
  // 1. Состояние, при изменении которого весь компонент обновляется
  const [state, setState] = useState(0);

  // 2. В теле компонента объявляется функция, производящая сложные вычисления
  const hardCalc = () => {
    console.log( "Сложные вычисления" );
    return 666;
  }

  // 3. Если вызывать её обычным образом, сложные вычисления будут 
  // .. производиться при каждом обновлении компонента
  // const result = hardCalc();

  // 4. Чтобы функция не вызывалась каждый раз, она помещается в "useMemo", 
  // .. который один раз выполняет функцию и запоминает её результат
  const result = useMemo(hardCalc, []);

  return (<>
    <p>Result: {result.length}</p>
    <button onClick={() => setState(state + 1)}>Click</button>
    <p>State: {state}</p>
  </>)
}

export default App;