import React, { ReactElement } from 'react'
import {ThemeContext} from "../constants/ThemeContext"
import MenuItem from './MenuItem';
import MenusWrapper from './MenusWrapper'
import {BiCalendarAlt, BiCommand, BiHome, BiListUl, BiPackage} from "react-icons/bi"
import { FaAlignRight, FaArrowLeft, FaArrowRight, FaLock, FaTasks, FaUser } from 'react-icons/fa';

interface Props {
    
}

export default function LeftNavbar({ }: Props): ReactElement {
    const {theme} = React.useContext(ThemeContext)
    return (
      <div
        className={`col-span-2 ${theme.background.secondary} shadow h-screen ${theme.text.common}`}
      >
        <div className="text-3xl ml-2 mb-2 mt-1 font-bold">
          <span className="text-purple-700">Store</span><span className="secondary-text">Genius</span>
        </div>
        <MenusWrapper>
            <MenuItem name="Dashboard" icon={<BiHome size="1.3rem" /> } router="/"/>
            <MenuItem name="Liste" icon={<FaTasks size="1.3rem" /> } router="/list"/>
        </MenusWrapper>
        <MenusWrapper>
            <MenuItem name="Composants" icon={<BiCommand size="1.3rem" /> } router="/component"/>
            <MenuItem name="Marques" icon={<FaAlignRight size="1.4rem" /> } router="/marks"/>
            <MenuItem name="Modèles" icon={<BiPackage size="1.4rem" /> } router="/models"/>
        </MenusWrapper>
        <MenusWrapper>
            <MenuItem name="Entrée en Stock" icon={<FaArrowRight size="1.3rem" /> } router="/in"/>
            <MenuItem name="Sortie en Stock" icon={<FaArrowLeft size="1.3rem" /> } router="/out"/>
        </MenusWrapper>
        <MenusWrapper>
            <MenuItem name="Exercice" icon={<BiCalendarAlt size="1.3rem" /> } router="/exercise"/>
        </MenusWrapper>
        <MenusWrapper>
            <MenuItem name="Utilisateurs" icon={<FaUser size="1.3rem" /> } router="/in"/>
            <MenuItem name="Privilèges" icon={<FaLock size="1.3rem" /> } router="/in"/>
        </MenusWrapper>
      </div>
    );
}
