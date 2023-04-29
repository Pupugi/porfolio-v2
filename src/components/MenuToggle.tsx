import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isOpenState } from "../atoms";
import { motion } from "framer-motion";

const ToggleButton = styled(motion.button)`
  position: fixed;
  font-size: 30px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  top: 10px;
  left: 10px;
  cursor: pointer;
  border: 1px solid gray;
  opacity: 0.6;
  z-index: 10;
  @media all and (max-width: 767px) {
    font-size: 18px;
    height: 30px;
    width: 30px;
    border-radius: 15px;
  }
  :hover {
    background-color: rgba(150, 142, 142, 0.8);
  }
`;

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const onClick = () => setIsOpen((pre) => !pre);

  return <ToggleButton onClick={onClick}>{isOpen ? "X" : "="}</ToggleButton>;
};

export default MenuToggle;
