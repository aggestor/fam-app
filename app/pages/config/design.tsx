import React, { ReactElement, useEffect, useState } from "react";
import Router from "next/router";
import { ButtonPrimary } from "../../components/Buttons";
import Headers from "../../components/Headers";
import { FaArrowRight, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../constants/ThemeContext";
import useForm from "../../hooks/useForm";
import ThemeIllustrationCard from "../../components/ThemeIllustrationCard";
interface Props {}

export default function design({}: Props): ReactElement {
    const { theme } = React.useContext(ThemeContext);
    const [selectedTheme, setSelectedTheme] = useState<string>()
    useEffect(() => {
        console.log(selectedTheme)
    },[selectedTheme])
  function handleNextEvent(e) {
    e.preventDefault();
    Router.push("/config/superuser");
  }
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
                          StoreGenius vous offre la possibilité de choisir un thème de votre gouût pour expérience utilisateur
                          riche, et des performances optimisées. Cliquez juste sur la carte correspondant à votre choix.
            </p>
            <img className="w-8/12 h-8/12 mx-auto" src="/assets/design.png" />
          </div>
          <div className="col-span-4 w-10/12 mx-auto flex h-56 flex-col">
            <div
              className={
                `transform w-full transition cursor-pointer duration-500 hover:skew-x-6 hover:scale-75 border-2 rounded p-2 " +
                  ${selectedTheme ===
                              "dark"
                              ? "border-purple-700"
                              : theme.border.common}`
              }
            >
              <h1 className="text-purple-700 flex justify-around items-center text-2xl mb-3 font-bold text-left">
                <span>Thème sombre</span>
                <FaMoon className="mt-1" />
              </h1>
              <ThemeIllustrationCard
                onChoose={(type) => setSelectedTheme(type)}
                isDark={true}
              />
              <div
                className={`${selectedTheme === "dark" && "bg-purple-700"}
                    w-4 h-4 border-purple-700 rounded-full border-2
                `}
              ></div>
            </div>
          </div>
          <div className="col-span-4 w-10/12 mx-auto flex h-56 flex-col">
            <div
                          className={
                              `transform w-full transition cursor-pointer duration-500 hover:skew-x-6 hover:scale-75 border-2 rounded p-2 
                  ${selectedTheme ===
                              "light"
                              ? "border-purple-700"
                              : theme.border.common}`
              }
            >
              <h1 className="text-purple-700 flex justify-around items-center text-2xl mb-3 font-bold text-left">
                <span>Thème claire</span>
                <FaSun className="mt-1" />
              </h1>
              <ThemeIllustrationCard
                onChoose={(type) => setSelectedTheme(type)}
              />
              <div
                className={`${selectedTheme === "light" && "bg-purple-700"}
                    w-4 h-4 border-purple-700 rounded-full border-2
                `}
              ></div>
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
