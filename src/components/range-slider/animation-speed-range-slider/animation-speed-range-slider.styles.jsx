import styled from "styled-components";

export const AnimationSpeedRangeSliderComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  margin-bottom: 2%;
  border-radius: 50vh;
  /* background-image: linear-gradient(
    to bottom,
    rgba(100, 100, 250, 0.9),
    rgba(100, 100, 250, 0.5),
    rgba(100, 100, 250, 0.9)
  ); */
  background: linear-gradient(to top right, #000 0%, #191919 100%);
  &:hover {
    opacity: 1;
  }
`;
export const TextComponent = styled.p`
  color: white;
  font-size: large;
  @media only screen and (max-width: 820px) {
    font-size: small;
  }

  @media only screen and (max-width: 510px) {
    font-size: x-small;
  }

  @media only screen and (max-width: 320px) {
    font-size: xx-small;
  }
`;
