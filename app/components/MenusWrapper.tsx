import { ReactElement } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../constants/ThemeContext'

export default function MenusWrapper({children}:any): ReactElement {
    const {theme} = useContext(ThemeContext)
    return (
      <div
        className={
          theme.background.primary +
          " transform transition duration-500 hover:scale-95 flex flex-col w-11/12 ml-2 my-2 rounded p-2"
        }
      >
        {children}
      </div>
    );
}
