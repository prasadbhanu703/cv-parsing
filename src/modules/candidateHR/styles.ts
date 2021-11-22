import styled from 'styled-components'
import { screenSizes } from '../../shared/styles/theme'

export const Input = styled.input`
height : 30px;
width:500px;
border-radius : 4px;
border:none; 
font-size:18px;
 ::placeholder {
    padding : 10px;
     font-size:18px;
 }
`

export const Image = styled.img`
height : 100%;
width:100%;
@media (min-width: ${screenSizes.mediaS}px) {
height : 400px;
// width: 1511px;
}
`


export const GridContainer = styled.div`
padding : 20px;
display : grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 40px;
img {
    border-radius:4px;
    height : 300px;
    width: 100%;
}
`
export const Grid = styled.div`
display : grid;
grid-template-columns: repeat(2, 1fr);
`

export const FlexContainer = styled.div`
padding : 20px;
display : grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 30px;
img {
    border-radius:4px;
    height : 300px;
    width: 400px;
}
`