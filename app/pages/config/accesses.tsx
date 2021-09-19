import React, { MouseEventHandler, ReactElement, useEffect } from "react";
import Router from "next/router";
import { ButtonPrimary } from "../../components/Buttons";
import Headers from "../../components/Headers";
import { FaArrowRight } from "react-icons/fa";
import { ThemeContext } from "../../constants/ThemeContext";
import Textbox from "../../components/Textbox";
import useForm from "../../hooks/useForm";
import Checkbox from "../../components/Checkbox";
interface Props {}

export default function accesses({}: Props): ReactElement {
  const { theme } = React.useContext(ThemeContext);
  //getting application informations
  useEffect(() => {}, []);
  function handleNextEvent(e) {
    e.preventDefault();
    Router.push("/config/design");
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
      <Headers title="Configuration des accès | Store Genius 2.0" />
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
          <div className="col-span-6 transform w-full transition duration-500 hover:scale-125">
            <p className={"text " + theme.text.common}>
              L'admin ou <span className="font-semibold">SuperUser</span> est le
              maître du système, les informations lui concernant nous seront
              utiles pour permettre de lui differencier des autres
              utilisateurs...{" "}
            </p>
            <img
              className="w-8/12 h-8/12 mx-auto"
              src="/assets/superuser-bot.png"
            />
          </div>
          <div className="col-span-6 w-10/12 mx-auto flex h-56 flex-col">
            <form className="w-10/12 mx-auto">
              <h1 className="text-purple-700 text-3xl mb-3 font-bold text-left">
                Configuration Admin
              </h1>
              <div className="grid-cols-12 grid w-full">
                <div className="col-span-5 mt-3">
                  <div className="w-36 h-36 rounded-full border"></div>
                </div>
                <div className="col-span-7">
                  <Textbox
                    value={fullName}
                    name="fullName"
                    design="my-1"
                    label="Nom complet"
                    event={handleChange}
                  />
                  <Textbox
                    value={username}
                    name="username"
                    design="my-1"
                    label="@pseudo"
                    event={handleChange}
                  />
                  <Textbox
                    value={phone}
                    name="phone"
                    design="my-1"
                    label="Téléphone (facultatif)"
                    event={handleChange}
                  />
                </div>
              </div>
              <Textbox
                value={mail}
                name="mail"
                design="my-1"
                label="E-Mail (facultatif)"
                event={handleChange}
              />
              <Textbox
                value={password1}
                name="password1"
                design="my-1"
                label="Mot de passe"
                event={handleChange}
              />
              <Textbox
                value={password2}
                name="password2"
                design="my-1"
                label="Confirmer mot de passe"
                event={handleChange}
              />
              <Checkbox label="Afficher mot de paase" />

              <small className={theme.text.common + " my-3"}>
                Avant de cliquer sur "Suivant", rassurez-vous d'entrer les
                bonnes informations.
              </small>
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
