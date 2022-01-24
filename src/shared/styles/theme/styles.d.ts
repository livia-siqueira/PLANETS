import 'styled-components'
import themePlanetsScreen from '.'


type theme = typeof themePlanetsScreen;


declare module 'styled-components'{
    export interface DefaultTheme extends theme{}
}