import React, { ReactElement, useEffect } from "react";
import Router from "next/router"
import { ButtonPrimary } from "../components/Buttons";
import Headers from "../components/Headers";
import { FaArrowRight} from "react-icons/fa"
import { ThemeContext } from "../constants/ThemeContext";
import { setInitAppConfig } from "../api/_app.config";


export default function config({}): ReactElement {
  const { theme } = React.useContext(ThemeContext);
  //getting application informations
    //getting user informations
    function handleNextEvent(): void{
      const { platform, userAgent } = navigator
      
      //setInitAppConfig(platform, userAgent).then(()=>{})
    Router.push("/config/company");
  }
  return (
    <>
      <Headers title="Configuration | Store Genius 2.0" />
      <div
        className={`grid overflow-hidden h-screen  ${theme.background.primary}  `}
      >
        <div className="w-full flex justify-end mr-3 h-20">
          <h1 className="font-bold text-4xl">
            <span className="text-purple-700">Store</span>
            <span className="secondary-text">Genius</span>
          </h1>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-12">
          <div className="col-span-6 transform w-full transition duration-500 hover:scale-125">
            <img className="w-8/12 h-8/12 mx-auto" src="/assets/config.png" />
          </div>
          <div className="col-span-6 w-10/12 mx-auto mt-5 flex h-56 flex-col">
            <h1 className="text-purple-700 text-3xl font-bold text-left">
              Configuration de l'Application
            </h1>
            <p className={"text-xl mt-5 " + theme.text.common}>
              Bienvenu sur Store Genius 2.0 votre application de gestion. <br />
              Store Genius vous permet de faire une gestion intelligence,
              efficace, instatentanée de tout genre de stockage, où que vous
              soyez sur votre ordinateur ou votre téléphone. <br /> <br />
              Maintenant procéder à la configuration de votre application en
              cliquant sur le boutton ci-bas et en suivant les consignes donnés
              !
            </p>
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
