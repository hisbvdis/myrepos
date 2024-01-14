import { useEffect, useState } from "react";
import { Menu } from "@/app/ui/components/Menu";
import { Input } from "@/app/ui/components/Input";
import "./ComboBox.css";


export default function ComboBox(props) {
  const { options, onChange, placeholder } = props;
  const [ inputValue, setInputValue ] = useState(options.find(({id}) => id === Number(props.value))?.label ?? "");
  const [ suggestions, setSuggestions ] = useState([]);
  const [ isShowOptions, setIsShowOptions ] = useState(false);
  const [ timeoutId, setTimeoutId ] = useState();

  useEffect(() => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => setSuggestions(options.filter(({label}) => label.toLowerCase().includes(inputValue.toLowerCase()))), 350);
    setTimeoutId(id);
  }, [inputValue])

  return (
    <div className="comboBox">
      <p className="comboBox__inputWrapper">
        <Input className="comboBox__input" value={inputValue} onChangeValue={setInputValue} placeholder={placeholder}/>
        {inputValue
          ? <Button className="comboBox__btn" onClick={() => {setInputValue(""); onChange("")}}>
              <CloseIcon/>
            </Button>
          : null}
      </p>
      {isShowOptions ? <Menu/> : null}
      {isShowOptions ? <div className="comboBox__overlay" onClick={() => closeList()}></div> : null}
    </div>
  )
}
