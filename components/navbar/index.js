// import React from 'react'
// import{Link as LinkR} from "react-router-dom";
// import styled from "styled-components";
// // import{ DiCssdeck } from "react-icons/di";

// const Nav=styled.div`
// background-color:${({theme}) => theme.card_light};
// height:80px;
// display:flex;
// justify-content:center;
// align-items:center;
// font-size:1rem;
// position:sticky;
// top:0;
// z-index:10;
// @media screen and (max-width:960px){
//   transition:0.8s all ease;
// }
// `;
// const NavContainer=styled.div`
// display:flex;
// justify-content:space-between;
// height:60px;
// z-index:1;
// width:100%;
// padding:0 24px;
// max-width:1200px;
// `;
// const NavLogo=styled(LinkR)`
// width:80%;
// padding:0 6px;
// display:flex;
// justify-self:flex-start;
// cursor:pointer;
// text-decoration:none;
// align-items:center;
// @media screen and (max-width:640px){
//   padding:0 0px;
// }
// `;
// const Mobile = styled.div`
// display:none;
// @media screen and(max-width:768px){
//   display:block;
//   position:absolute;
//   top:0;
//   right:0;
//   transform:translate(-100%,50%);
//   font-size:1.5rem;
//   cursor:pointer;
//   color:${({theme})=>theme.text_primary};
// }
// `;
// const NaveItems = styled.ul`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content:center;
//     gap: 32px;
//     padding: 0 6px;
//     list-style: none;

//     @media screen and (max-width: 768px) {
//       display: none;
//     }
// `;
// const NavLink = styled.a`
//     color: ${({ theme }) => theme.text_primary};
//     font-weight: 500;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     &:hover {
//       color: ${({ theme }) => theme.primary};
//     }
// `;
// const ButtonContainer = styled.div`
//   width: 80%;  
//   height: 100%;
//   display: flex;
//   justify-content: end;
//   align-items: center;
//   padding: 0 6px;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// const GithubButton = styled.a`
//   background-color:transperent;
//   border: 1.8px solid ${({ theme }) => theme.primary};
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   height: 70%;
//   border-radius: 20px;
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
//   padding: 0 20px;
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 16px;
//   transition: all 0.6s ease-in-out;
//     &:hover {
//       background-color: ${({ theme }) => theme.primary};
//       color: ${({ theme }) => theme.white};     
//     }
//     @media screen and (max-width: 640px) { 
//     font-size: 0.8rem;
//     }
// `;
// // const Span=styled.span`
// // padding:0 4px;
// // font-weight:bold;
// // font-size:18px;

// const Navbar = () => {
//   return (
//     <Nav>
//       <NavContainer>
//        {/* <NavLogo to='/'>
//           <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
//             <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
//           </a>
//         </NavLogo> */}
//         <Mobile></Mobile>
//         <NaveItems>
//         <NavLink href="#about">About</NavLink>
//           <NavLink href='#skills'>Skills</NavLink>
//           <NavLink href='#experience'>Experience</NavLink>
//           <NavLink href='#projects'>Projects</NavLink>
//           <NavLink href='#education'>Education</NavLink>
//         </NaveItems>
//         <ButtonContainer>
//           <GithubButton>Github profile</GithubButton>
//         </ButtonContainer>
//       </NavContainer>
//     </Nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import logo from './portfolio-logo-black-and-white.png';
import {FaBars} from "react-icons/fa";




const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(Link)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  margin-left:0.05px;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;
const LogoImage = styled.img`
  width: 120px; /* Set the width of the logo */
  height: auto; /* Maintain aspect ratio */
  color: ${({ theme }) => theme.primary};
`;

const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NaveItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;
const MobieMenu=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:16px;
position:absolute;
top:80;
right:0;
width:100%;
padding:10px 40px 24px 40px;
background: ${({ theme }) => theme.card_light+99};
transition: all 0.6s ease-in-out;
transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
border-radius: 0 0 20px 20px;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;
const MobileLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open,setOpen]=React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <LogoImage src={logo} alt='logo'/>
        </NavLogo>
        <Mobile>
          <FaBars 
            onClick={()=>{
              setOpen(!open);
            }}
          />
        </Mobile>
        <NaveItems>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#skills">Skills</NavLink>
          <NavLink to="#experience">Experience</NavLink>
          <NavLink to="#projects">Projects</NavLink>
          <NavLink to="#education">Education</NavLink>
        </NaveItems>
        <ButtonContainer>
          <GithubButton href="#">Github profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open &&<MobieMenu open={open}>
      <MobileLink to="#about" onClick={() => {
              setOpen(!open)
            }}>About</MobileLink>
            <MobileLink to= '#skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileLink>
            <MobileLink to='#experience' onClick={() => {
              setOpen(!open)
            }}>Experience</MobileLink>
            <MobileLink to='#projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileLink>
            <MobileLink to='#education' onClick={() => {
              setOpen(!open)
            }}>Education</MobileLink>
            <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="/" target="_blank">Github Profile</GithubButton>

      </MobieMenu> }
    </Nav>
  );
};

export default Navbar;
