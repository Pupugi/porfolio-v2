import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isOpenState } from "../atoms";
import { motion } from "framer-motion";
import imgThree from "../img/3.jpg";
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

const ReactTodolist = () => {
  const isOpen = useRecoilValue(isOpenState);

  return (
    <Wrapper $isOpen={isOpen}>
      <ScreenShot imgUrl={imgThree} />
      <Description>
        <span>투두리스트트</span>
        <span>react, typescript</span>
        <div>
          <span>드래그 앤 드롭</span>
          <span>로컬스토리지 연동</span>
        </div>
        <a href="https://Pupugi.github.io/react-todolist">
          https://Pupugi.github.io/react-todolist
        </a>
        <a href="https://github.com/Pupugi/react-todolist">
          https://github.com/Pupugi/react-todolist
        </a>
      </Description>
    </Wrapper>
  );
};

export default ReactTodolist;
