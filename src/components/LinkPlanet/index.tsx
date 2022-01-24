import {  ButtonHTMLAttributes } from "react";
import * as s from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string,
    id: string
}

const LinkPlanet : React.FC<Props> = ({onClick, title, id}) => {
    return(
        <s.Link>
            {title}
        </s.Link>
    )
}


export default LinkPlanet;