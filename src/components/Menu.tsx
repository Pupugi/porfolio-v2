import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isOpenState } from "../atoms";

interface INavProps {
  $inHome: boolean;
  $inPortfolio: boolean;
  $inTwelveJanggi: boolean;
  $inReactTodolist: boolean;
  $inCodeDiary: boolean;
}

const Nav = styled(motion.nav)<INavProps>`
  height: 100vh;
  width: 10vw;
  background-color: #f1e0e3;
  text-align: center;
  font-size: 28px;
  font-family: "Droid serif", serif;
  font-weight: 400;
  font-style: italic;
  position: relative;
  @media all and (max-width: 767px) {
    font-size: 15px;
  }
  div {
    position: absolute;
    width: 100%;
    :first-child {
      top: 15%;
      font-weight: ${(props) => (props.$inHome ? "600" : "400")};
      background-color: ${(props) => (props.$inHome ? "#fa6565" : null)};
      transition: ${(props) => (props.$inHome ? "ease-in-out 0.2s" : null)};
    }
    :nth-child(3) {
      top: 45%;
      font-weight: ${(props) => (props.$inPortfolio ? "600" : "400")};
      background-color: ${(props) => (props.$inPortfolio ? "#fa6565" : null)};
      transition: ${(props) =>
        props.$inPortfolio ? "ease-in-out 0.2s" : null};
    }
    :nth-child(4) {
      top: 60%;
      font-weight: ${(props) => (props.$inTwelveJanggi ? "600" : "400")};
      background-color: ${(props) =>
        props.$inTwelveJanggi ? "#fa6565" : null};
      transition: ${(props) =>
        props.$inTwelveJanggi ? "ease-in-out 0.2s" : null};
    }
    :nth-child(5) {
      top: 75%;
      font-weight: ${(props) => (props.$inReactTodolist ? "600" : "400")};
      background-color: ${(props) =>
        props.$inReactTodolist ? "#fa6565" : null};
      transition: ${(props) =>
        props.$inReactTodolist ? "ease-in-out 0.2s" : null};
    }
    :last-child {
      top: 90%;
      font-weight: ${(props) => (props.$inCodeDiary ? "600" : "400")};
      background-color: ${(props) => (props.$inCodeDiary ? "#fa6565" : null)};
      transition: ${(props) =>
        props.$inCodeDiary ? "ease-in-out 0.2s" : null};
    }
    :hover {
      font-weight: 600;
      background-color: #fa6565;
      transition: ease-in-out 0.2s;
    }
  }
`;

const navVar = {
  initial: {
    width: "0vw",
    opacity: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
  visible: {
    width: "10vw",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
  end: {
    width: "0vw",
    opacity: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const navVarChild = {
  initial: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  end: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.1,
    },
  },
};

const menuItems = [
  { link: "portfolio", text: "Portfolio" },
  { link: "twelveJanggi", text: "Twelve-Janggi" },
  { link: "reactTodolist", text: "React-Todolist" },
  { link: "codeDiary", text: "Code-Diary" },
];

const Menu = () => {
  const isOpen = useRecoilValue(isOpenState);
  const inHome = Boolean(useMatch("/"));
  const inPortfolio = Boolean(useMatch("portfolio"));
  const inTwelveJanggi = Boolean(useMatch("twelveJanggi"));
  const inReactTodolist = Boolean(useMatch("reactTodolist"));
  const inCodeDiary = Boolean(useMatch("codeDiary"));

  return (
    <>
      <MenuToggle />
      <AnimatePresence>
        {isOpen ? (
          <Nav
            variants={navVar}
            initial="initial"
            animate="visible"
            exit="end"
            $inHome={inHome}
            $inPortfolio={inPortfolio}
            $inTwelveJanggi={inTwelveJanggi}
            $inReactTodolist={inReactTodolist}
            $inCodeDiary={inCodeDiary}
          >
            <motion.div variants={navVarChild}>
              <Link to="/">
                <span>Home</span>
              </Link>
            </motion.div>
            <br />
            {menuItems.map((i) => (
              <motion.div key={i.text} variants={navVarChild}>
                <Link to={i.link}>
                  <span>{i.text}</span>
                </Link>
              </motion.div>
            ))}
          </Nav>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Menu;
