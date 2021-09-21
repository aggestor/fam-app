import React, { ReactElement } from "react";
import Router, { useRouter } from "next/router";
import { _MenuItem } from "../constants/interfaces";
import { ThemeContext } from "../constants/ThemeContext";

export default function MenuItem({
  router,
  name,
  icon,
}: _MenuItem): ReactElement {
  const { pathname } = useRouter();
  const {
    theme: { text },
  } = React.useContext(ThemeContext);
  return (
    <div
      onClick={() => Router.push(router)}
      className={
        pathname === router
          ? "hover:bg-purple-700 rounded transition-all duration-500 ease-in-out transform hover:animate-pulse bg-purple-700 cursor-pointer p-2 my-1 flex text-white "
          : text.common +
            " rounded hover:bg-purple-700 transition-all duration-500 ease-in-out hover:scale-105 hover:text-white cursor-pointer p-2 my-1 flex"
      }
    >
      <div>{icon}</div>
      <div className="ml-2">{name}</div>
    </div>
  );
}
