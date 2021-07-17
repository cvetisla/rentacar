import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from "../../../assets/images/car-logo-dark.png";


const LogoContainer = styled.div `
${tw `
flex
items-center
`};
`;

const LogoText = styled.div `
${tw `
text-xs
md:text-base
font-bold
italic
text-black
text-lg
m-2
mb-7
`};
`;

const Image = styled.div `
width: auto;
${tw` h-4 md:h-7 mb-4`};

img {
    width: auto;
    height: 100%;
}
`;

export function Logo() {
return (
<LogoContainer>
<Image>
    <img src={CarLogoImg} alt='pate'/>
</Image>
<LogoText>Slav's car rental</LogoText>

</LogoContainer>


)




}