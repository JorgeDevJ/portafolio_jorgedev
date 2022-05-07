import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styled from "styled-components";
export const ContainerCard = styled.div`
  background-color: var(--secondary-color);
  padding: 20px 20px 30px 20px;
  margin: 0 0 20px 0;
  border-radius: 10px;
  @media (min-width: 1000px) {
    margin: 0;
  }
`;
const ImageCont = styled.div`
  margin: 0 0 10px 0;
  .image {
    transform: scale(1);
    border-radius: 5px;
    transition: all cubic-bezier(0.79, 0.33, 0.14, 0.53) 0.2s;
  }
  .image:hover {
    transform: scale(1.2);
    border-radius: 0px;
  }
`;
const InfoCont = styled.div``;
const Title = styled.h3`
  font-size: 20px;
  margin: 0 0 10px 0;
`;
const DivLinks = styled.div`
  display: flex;
  .buttonLink {
    background-color: var(--primary-color);
    padding: 10px 15px;
    margin: 0 15px 0 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;
const Links = styled.a`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;
const CardProyects = ({
  srcImage,
  nameProyect,
  linkPoryectPage,
  linkPoryectGithub,
}) => {
  return (
    <ContainerCard>
      <ImageCont>
        <Image className="image" src={srcImage} alt={nameProyect} />
      </ImageCont>
      <InfoCont>
        <Title>{nameProyect}</Title>
        <DivLinks>
          <div className="buttonLink">
            <Links href={linkPoryectPage} target="blank">
              View demo
            </Links>
          </div>
          <div className="buttonLink">
            <Links href={linkPoryectGithub} target="blank">
              Github repo
            </Links>
          </div>
        </DivLinks>
      </InfoCont>
    </ContainerCard>
  );
};

CardProyects.propTypes = {
  srcImage: PropTypes.string,
  nameProyect: PropTypes.string,
  linkPoryectPage: PropTypes.string,
  linkPoryectGithub: PropTypes.string,
};

export default CardProyects;