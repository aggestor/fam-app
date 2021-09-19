import React, { ReactElement } from "react";
import { _Button } from "../constants/interfaces";
import { ThemeContext } from "../constants/ThemeContext";

/**
 * Button with primary color with or without outlies
 * @param param0 Props
 * @returns JSXElement.Button
 */
function ButtonPrimary({
  outlines,
  design,
  children,
  event,
  data,
}: _Button): ReactElement {
  const { theme } = React.useContext(ThemeContext);
  if (!outlines) {
    return (
      <button
        data-display={data ? data : ""}
        onClick={event}
        className={`bg-purple-700 rounded text-white h-9 p-3 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex justify-center items-center ${design}`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        data-display={data ? data : ""}
        onClick={event}
        className={`${theme.background.primary} h-9 p-3 border-2 ${theme.border.primary} rounded ${theme.text.primary} hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex justify-center items-center ${design}`}
      >
        {children}
      </button>
    );
  }
}

ButtonPrimary.defaultProps = {
  outlines: false,
  data: "",
};
/**
 * Button with secondary color with or without outlies
 * @param param0 Props
 * @returns JSXElement.Button
 */
function ButtonSecondary({
  outlines,
  data,
  design,
  event,
  children,
}: _Button): ReactElement {
    if (!outlines) {
      const {theme} = React.useContext(ThemeContext)
    return (
      <button
        data-display={data ? data : ""}
        onClick={event}
        className={`secondary-bg h-9 p-3 rounded text-white  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 flex justify-center items-center ${design}`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        data-display={data ? data : ""}
        onClick={event}
        className={`bg-green-500 rounded text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 flex justify-center items-center ${design}`}
      >
        {children}
      </button>
    );
  }
}
/**
 * Button with common color with or without outlies
 * @param param0 Props
 * @returns JSXElement.Button
 */
function ButtonCommon({
  data,
  event,
  children,
  design,
  outlines,
}: _Button): ReactElement {
  if (outlines) {
    return (
      <button
        data-display={data ? data : ""}
        onClick={event}
        className={`bg-green-500 rounded text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 flex justify-center items-center ${design}`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        data-display={data ? data : ""}
        onClick={event}
        className={`bg-green-500 rounded text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 flex justify-center items-center ${design}`}
      >
        {children}
      </button>
    );
  }
}

export { ButtonPrimary, ButtonCommon, ButtonSecondary };
