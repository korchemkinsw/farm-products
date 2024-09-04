import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "/src/components/styled/index";

export const StiledOrderRegistration = styled(Section)`
  margin: 0;
  padding: 0px ${(props) => props.theme.pagePadding};
  padding-top: 40px;
  width: ${(props) => props.theme.pageWidth};
  height: 768px;
  background-color: rgba(246, 246, 246, 1);
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.inner};
`;

export const StyledInputBlock = styled(Section)`
  width: 353px;
  padding: 0;
  gap: ${(props) => props.theme.inner};
`;

export const StyledFieldConteyner = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${(props) => props.theme.inner};
  padding: 24px ${(props) => props.theme.inner};
  padding-bottom: 0;
  width: 313px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 1);
`;

export const StyledSlider = styled(Swiper)`
  position: relative;
  width: 727px;
  height: 768px;
  overflow: hidden;
  margin: 0;
  padding-left: 0;
  .swiper-wrapper {
    display: flex;
    flex-direction: column;
  }

  .swiper-slide {
    width: 727px;
    height: 288px;
    flex-shrink: 1;
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  margin: 0;
  padding: 0;
  height: 288px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  top: ${(props) => (props.prew ? "auto" : "0")};
  bottom: ${(props) => (props.next ? "auto" : "0")};
  background-color: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  z-index: 10;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(0, 0, 0, 1);
  }
`;
