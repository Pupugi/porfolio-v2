import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isOpenState } from "../atoms";
import { motion } from "framer-motion";
import imgFour from "../img/4.jpg";
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

const CodeDiary = () => {
  const isOpen = useRecoilValue(isOpenState);

  return (
    <Wrapper $isOpen={isOpen}>
      <Description>
        <span>javascript로 CRUD 구현한 게시판</span>
        <span>javascript, node.js, mongoDB, express, pug, fly.io</span>
        <div>
          <span>깃헙로그인</span>
          <span>쿠키와 세션을 이용한 유저인증</span>
          <span>댓글</span>
          <span>유저 프로필</span>
        </div>
        <a href="https://code-diary.fly.dev">https://code-diary.fly.dev</a>
        <a href="https://github.com/Pupugi/codediary">
          https://github.com/Pupugi/codediary
        </a>
      </Description>
      <ScreenShot imgUrl={imgFour} />
    </Wrapper>
  );
};

export default CodeDiary;
