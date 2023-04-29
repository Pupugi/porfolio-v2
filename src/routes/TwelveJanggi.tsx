import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isOpenState } from "../atoms";
import { motion } from "framer-motion";
import imgTwo from "../img/2.jpg";
import { Description, ScreenShot } from "./Portfolio";

const Wrapper = styled(motion.div)<{ $isOpen: boolean }>`
  height: 100vh;
  width: ${(props) => (props.$isOpen ? "90vw" : "100vw")};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

const TwelveJanggi = () => {
  const isOpen = useRecoilValue(isOpenState);

  return (
    <Wrapper $isOpen={isOpen}>
      <Description>
        <span>십이장기 웹 게임</span>
        <span>react, typescript</span>
        <div>
          <span>각 말의 이동과 잡기</span>
          <span>승리 등 게임 구현</span>
          <span>다크모드</span>
        </div>
        <a href="https://Pupugi.github.io/Twelve-Janggi">
          https://Pupugi.github.io/Twelve-Janggi
        </a>
        <a href="https://github.com/Pupugi/Twelve-Janggi">
          https://github.com/Pupugi/Twelve-Janggi
        </a>
      </Description>
      <ScreenShot imgUrl={imgTwo} />
    </Wrapper>
  );
};

export default TwelveJanggi;
