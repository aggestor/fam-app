import React, { ReactElement, useEffect } from "react";
import { _Textbox } from "../constants/interfaces";
import { ThemeContext } from "../constants/ThemeContext";
function Textbox({
  label,
  event,
  design,
  type,
  designParent,
  value,
  readOnly,
  name
}: _Textbox): ReactElement {
    const { theme } = React.useContext(ThemeContext);
  return (
    <div className={"w-auto my-2 " + designParent}>
      <input
        readOnly={readOnly}
        value={value}
        placeholder={label}
        type={type}
        onChange={event}
        name={name}
        className={`w-full ${theme.border.common} border-2 caret-purple-700  ${theme.text.primary} h-9 p-3 focus:shadow-none rounded ${theme.background.primary} focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent ${design}`}
      />
    </div>
  );
}
export default Textbox;
