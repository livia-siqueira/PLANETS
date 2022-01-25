import {  ButtonHTMLAttributes } from "react";
import * as s from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string,
    id: string,
    event: (id: string) => void
}

const LinkPlanet : React.FC<Props> = ({title, id, event}) => {
    return(
        <s.Link onClick={event?.bind(null, id)}>
            {title}
        </s.Link>
    )
}


export default LinkPlanet;