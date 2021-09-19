import React, { ReactElement, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { _Checkbox } from "../constants/interfaces"
import {ThemeContext} from "../constants/ThemeContext"

function Checkbox({ onChangeValue, label }: _Checkbox): ReactElement {
    const {theme} = React.useContext(ThemeContext)
  const checkBoxRef = useRef();
    const [checked, setChecked] = useState<boolean>(false);
    
    const onHandleClick = (): void => {
        if (checked) {
            setChecked(false)
        } else setChecked(true)
    }
  return (
      <div onClick={() => {
          onHandleClick()
          onChangeValue(checked)
    }} className="grid place-items-center">
      <input
        ref={checkBoxRef}
        type="checkbox"
        style={{ display: "none" }}
        defaultChecked={false}
      />
      <div className="flex w-full cursor-pointer">
        <div
                  className={`w-6 h-6 cursor-pointer border-2 border-purple-700 grid place-items-center  ${checked ? "bg-purple-700 text-white " : theme.background.primary}
           rounded`}
        >
          {checked && <FaCheck className="text-white-500" />}
              </div>
              <div className={theme.text.primary+" ml-4 font-semibold"}>
                  {label}
              </div>
      </div>
    </div>
  );
}
Checkbox.defaultProps = {
    label: "aggee",
    onChangeValue: (value) => {
        console.log(value)
    }
}

export default Checkbox
