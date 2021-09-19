import React, { ReactElement, useEffect } from "react";
import Router from "next/router";
import { ButtonPrimary } from "../../components/Buttons";
import Headers from "../../components/Headers";
import { FaArrowRight } from "react-icons/fa";
import { ThemeContext } from "../../constants/ThemeContext";
import Textbox from "../../components/Textbox";
import useForm from "../../hooks/useForm";
interface Props {}

export default function config({}: Props): ReactElement {
  const { theme } = React.useContext(ThemeContext);
  //getting application informations
  useEffect(() => {}, []);
    function handleNextEvent(e): void {
      e.preventDefault()
    Router.push("/config/superuser");
  }
  const [{ name, mail, website, owner }, handleChange] = useForm({
    name: "",
    mail: "",
      website: "",
      owner:""
  });
  return (
    <>
      <Headers title="Configuration Entreprise | Store Genius 2.0" />
      <div
        className={`grid overflow-hidden h-screen  ${theme.background.primary}  `}
      >
        <div className="w-full flex justify-end h-20">
          <h1 className="font-bold text-4xl mr-3">
            <span className="text-purple-700">Store</span>
            <span className="secondary-text">Genius</span>
          </h1>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-12">
          <div className="col-span-6 transform w-full transition duration-500 hover:scale-125">
            <p className={"text " + theme.text.common}>
              Ces informations nous permettrons d'identifier vorte entreprise,
              créer des entêtes pour vos documents, apparences dans des biens
              commerciaux,etc...{" "}
            </p>
            <img className="w-8/12 h-8/12 mx-auto" src="/assets/company.png" />
          </div>
          <div className="col-span-6 w-10/12 mx-auto flex h-56 flex-col">
            <form className="w-10/12 mx-auto">
              <h1 className="text-purple-700 text-3xl mb-3 font-bold text-left">
                Configuration Entreprise
              </h1>
              <Textbox
                value={name}
                name="name"
                design="my-1"
                label="Nom de l'Entreprise"
                event={handleChange}
              />
              <Textbox
                value={mail}
                name="mail"
                design="my-1"
                label="Téléphone"
                event={handleChange}
              />
              <Textbox
                value={mail}
                name="mail"
                design="my-1"
                label="E-Mail (facultatif)"
                event={handleChange}
              />

              <Textbox
                value={website}
                name="website"
                design="my-1"
                label="Site web (facultatif)"
                event={handleChange}
              />
              <Textbox
                value={owner}
                name="owner"
                design="my-1"
                label="Propriétaire (facultatif)"
                event={handleChange}
                          />
                          <small className={theme.text.common}>Avant de cliquer sur "Suivant", rassurez-vous d'entrer les bonnes informations.</small>
              <ButtonPrimary
                design="w-1/3 mt-3 transform transition duration-500 hover:scale-95"
                event={handleNextEvent}
              >
                <span className="mr-1">Suivant</span> <FaArrowRight />
              </ButtonPrimary>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
