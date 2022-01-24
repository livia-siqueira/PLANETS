import * as s from './styles'

interface PropsDetails {
    titleInformation: string,
    information: string
}

const Details : React.FC<PropsDetails> = ({titleInformation, information}) => {
    return (
        <s.Container>
            <s.Title>
            {titleInformation}
            </s.Title>
            <s.Information>
            {information}
            </s.Information>
        </s.Container>
    )
}

export default Details;