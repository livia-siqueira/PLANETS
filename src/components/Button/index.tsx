import { ButtonHTMLAttributes } from "react";
import * as s from './styles'




const Button : React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({title}) => {
    return (
        <s.Container>
            {title}
        </s.Container>
    )
}

export default Button;