import React, { MouseEventHandler, ReactElement, useEffect } from "react";
import Router from "next/router";
import { ButtonPrimary } from "../../components/Buttons";
import Headers from "../../components/Headers";
import { FaArrowRight, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../constants/ThemeContext";
import Textbox from "../../components/Textbox";
import useForm from "../../hooks/useForm";
import Checkbox from "../../components/Checkbox";
import ThemeIllustrationCard from "../../components/ThemeIllustrationCard";
interface Props {}

export default function design({}: Props): ReactElement {
  const { theme } = React.useContext(ThemeContext);
  //getting application informations
  useEffect(() => {}, []);
  function handleNextEvent(e) {
    e.preventDefault();
    Router.push("/config/superuser");
  }
  const [
    { fullName, username, mail, phone, password1, password2 },
    handleChange,
  ] = useForm({
    fullName: "",
    username: "",
    password1: "",
    password2: "",
    mail: "",
    phone: "",
    owner: "",
  });
  return (
    <>
      <Headers title="Configuration Thème | Store Genius 2.0" />
      <div
        className={`grid overflow-hidden h-screen  ${theme.background.primary}  `}
      >
        <div className="w-full flex justify-end h-12">
          <h1 className="font-bold text-4xl mr-3">
            <span className="text-purple-700">Store</span>
            <span className="secondary-text">Genius</span>
          </h1>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-12">
          <div className="col-span-4 transform w-full transition duration-500 hover:scale-105">
            <h1 className="text-purple-700 text-3xl mb-3 font-bold text-left">
              Configuration Thème
            </h1>
            <p className={"text " + theme.text.common}>
              L'admin ou <span className="font-semibold">SuperUser</span> est le
              maître du système, les informations lui concernant nous seront
              utiles pour permettre de lui differencier des autres
              utilisateurs...{" "}
            </p>
            <img className="w-8/12 h-8/12 mx-auto" src="/assets/design.png" />
          </div>
          <div className="col-span-4 w-full">
            <div
              className={
                "transform w-full transition duration-500 hover:skew-x-6 hover:scale-75 border-2 rounded p-2 " +
                theme.border.common
              }
            >
              <h1 className="text-purple-700 flex justify-around items-center text-2xl mb-3 font-bold text-left">
                <span>Thème sombre</span>
                <FaMoon className="mt-1" />
              </h1>
            </div>
            <ThemeIllustrationCard />
          </div>
          <div className="col-span-4 w-10/12 mx-auto flex h-56 flex-col">
            <div
              className={
                "transform w-full transition duration-500 hover:skew-x-6 hover:scale-75 border-2 rounded p-2 " +
                theme.border.common
              }
            >
              <h1 className="text-purple-700 flex justify-around items-center text-2xl mb-3 font-bold text-left">
                <span>Thème claire</span>
                <FaSun className="mt-1" />
              </h1>
              <ThemeIllustrationCard />
            </div>
            <small className={theme.text.common + " my-3"}>
              Avant de cliquer sur "Suivant", rassurez-vous d'entrer les bonnes
              informations.
            </small>
            <ButtonPrimary
              design="w-1/3 mt-3 transform transition duration-500 hover:scale-95"
              event={handleNextEvent}
            >
              <span className="mr-1">Suivant</span> <FaArrowRight />
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
}
