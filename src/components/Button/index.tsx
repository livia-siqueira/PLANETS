import { ButtonHTMLAttributes } from "react";
import * as s from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    event: (number: number) => void;
    number: number;
    isActive: boolean
}


const Button : React.FC<Props> = ({title, event, number, isActive}) => {
    return (
        <s.Container onClick={event.bind(null, number)} isActive={isActive}>
            {title}
        </s.Container>
    )
}

export default Button;