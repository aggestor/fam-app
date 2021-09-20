import React, { ReactElement } from "react";
import { _ThemeIllustrationCard } from "../constants/interfaces";
import { ThemeContext } from "../constants/ThemeContext";
import Textbox from "./Textbox";

function ThemeIllustrationCard({
  isDark,
  onChoose,
}: _ThemeIllustrationCard): ReactElement {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      onClick={() => onChoose(isDark ? "dark" : "light")}
      className={`w-10/12  flex flex-col mx-auto ${
        isDark ? "dark" : "bg-white"
      } h-48 rounded border-2 ${theme.border.common}`}
    >
      <section className="m-2">
        <h1 className=" text-purple-700 text-2xl font-semibold">
          Ceci est un titre
        </h1>
        <p className={isDark ? "text-gray-50" : "text-gray-800"}>
          Lorem ipsum dolor sit amet consectetur{" "}
        </p>
        {isDark ? (
          <input
            value={""}
            placeholder={"Nom du champ"}
            className={`w-full border-gray-700  border-2 caret-purple-700  text-purple-700 h-9 p-3 focus:shadow-none rounded dark focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent`}
          />
        ) : (
          <input
            value={""}
            placeholder={"Nom du champ"}
            className={`w-full border-gray-400  border-2 caret-purple-700  text-purple-700 h-9 p-3 focus:shadow-none rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent`}
          />
        )}
        <br />
        {isDark ? (
          <div className="flex justify-between mt-2">
            <button
              className={`secondary-bg h-9 p-3  rounded text-white  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 flex justify-center items-center`}
            >
              Button
            </button>
            <button
              className={`bg-purple-700 rounded  text-white h-9 p-3 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex justify-center items-center`}
            >
              Boutton 2
            </button>
          </div>
        ) : (
          <div className="flex justify-between mt-2">
            <button
              className={`secondary-bg h-9 p-3 cursor-not-allowed rounded text-white  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 flex justify-center items-center`}
            >
              Button 2
            </button>
            <button
              className={`bg-purple-700 rounded  pointer-events-none text-white h-9 p-3 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex justify-center items-center`}
            >
              Boutton 2
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
ThemeIllustrationCard.defaultProps = {
  isDark: false,
  onChoose: () => {
    //nothing to do
  },
};

export default ThemeIllustrationCard;
