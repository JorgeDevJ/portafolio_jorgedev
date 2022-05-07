import { useState, useEffect } from "react";
import { useWindowSize } from "../hooks/useWindow";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = styled.nav`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.bg};
  /* border-bottom: 1px solid var(--secondary-color); */
  position: relative;
`;
const Logo = styled.span`
  font-size: 30px;
  font-family: var(--rubik);
`;
const UlItems = styled.ul`
  display: ${(props) => props.visible};
  position: absolute;
  padding: 15px;
  top: 5rem;
  flex-direction: column;
  right: 0;
  width: 100%;
  background-color: ${(props) => props.bg};

  border-radius: 0 0 15px 15px;
  @media (min-width: 1000px) {
    position: inherit;
    top: 0;
    flex-direction: row;
    border-radius: 0;
    width: auto;
  }
`;
const ListNav = styled.li`
  margin: ${(props) => props.margin};
  font-size: 35px;
  color: var(--primary-color);
  font-weight: 300;
  @media (min-width: 1000px) {
    margin: ${(props) => props.marginMobile};
    font-size: 25px;
  }
`;
const Navigation = () => {
  const { width } = useWindowSize();
  const [toggle, setToggle] = useState(false);
  const ShowItems = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    if (width >= 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [width]);
  return (
    <Nav bg={toggle ? "var(--secondary-color)" : "var(--bg-primary)"}>
      <Logo>JORGEDEV</Logo>
      {width <= 1000 ? (
        <FontAwesomeIcon onClick={ShowItems} className="fa-xl" icon={faBars} />
      ) : null}

      <UlItems
        visible={toggle ? "flex" : "none"}
        bg={toggle ? "var(--secondary-color)" : "var(--bg-primary)"}
      >
        <ListNav margin="0 0 3rem 0" marginMobile="0 2rem 0 0">
          About me
        </ListNav>
        <ListNav margin="0 0 3rem 0" marginMobile="0 2rem 0 0">
          Projects
        </ListNav>
        <ListNav>Contact me</ListNav>
      </UlItems>
    </Nav>
  );
};

export default Navigation;