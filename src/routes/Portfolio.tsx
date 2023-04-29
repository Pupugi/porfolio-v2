import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isOpenState } from "../atoms";
import { motion } from "framer-motion";
import imgOne from "../img/1.jpg";

const Wrapper = styled(motion.div)<{ $isopen: boolean }>`
  height: 100vh;
  width: ${(props) => (props.$isopen ? "90vw" : "100vw")};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ScreenShot = styled.div<{ imgUrl: string }>`
  width: 40%;
  height: 50%;
  border-radius: 5%;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  border: 1px solid gray;
  @media all and (max-width: 767px) {
    width: 60%;
    height: 30%;
  }
`;

export const Description = styled.div`
  width: 45%;
  background-color: #f1c7a0;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 24px;
  border-radius: 15px;
  span {
    margin-bottom: 24px;
    text-align: center;
  }
  > span:first-child {
    font-weight: 700;
  }
  a {
    margin-bottom: 24px;
    font-size: 20px;
  }
  div {
    margin-bottom: 24px;
    span {
      border-radius: 15px / 50%;
      background-color: whitesmoke;
      margin-right: 5px;
      font-size: 16px;
      padding: 5px;
    }
  }
  @media all and (max-width: 767px) {
    width: 60%;
    height: 40%;
    font-size: 16px;
    padding: 5px;
    span,
    a,
    div {
      margin-bottom: 10px;
    }
    div {
      line-height: 35px;
    }
    a {
      font-size: 14px;
    }
  }
`;

const Portfolio = () => {
  const isOpen = useRecoilValue(isOpenState);

  return (
    <Wrapper $isopen={isOpen}>
      <ScreenShot imgUrl={imgOne} />
      <Description>
        <span>포트폴리오</span>
        <span>react, typescript, framer-motion</span>
        <div>
          <span>메뉴 애니메이션</span>
          <span>슬라이드 애니메이션</span>
          <span>반응형 웹</span>
        </div>
        <a href="https://Pupugi.github.io/portfolio-v2">
          https://Pupugi.github.io/portfolio-v2
        </a>
        <a href="https://github.com/Pupugi/portfolio-v2">
          https://github.com/Pupugi/portfolio-v2
        </a>
      </Description>
    </Wrapper>
  );
};

export default Portfolio;
