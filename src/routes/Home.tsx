import { useState } from "react";
import styled from "styled-components";
import useInterval from "../hooks/setInterVal";
import { motion, AnimatePresence } from "framer-motion";
import imgOne from "../img/1.jpg";
import imgTwo from "../img/2.jpg";
import imgThree from "../img/3.jpg";
import imgFour from "../img/4.jpg";
import backImg from "../img/homeBack.jpg";
import { useRecoilValue } from "recoil";
import { isOpenState } from "../atoms";

const Wrapper = styled(motion.div)<{ $isOpen: boolean }>`
  height: 100vh;
  width: ${(props) => (props.$isOpen ? "90vw" : "100vw")};
  font-size: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: end;
  padding: 5%;
  font-weight: bold;
  background-image: url(${backImg});
  @media all and (max-width: 767px) {
    font-size: 24px;
  }
`;

const Introduce = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: flex-end;
  position: relative;
`;

const IntText = styled(motion.span)`
  margin-right: 305px;
  position: absolute;
  @media all and (max-width: 767px) {
    margin-right: 155px;
  }
`;

const ProjectPreviews = styled.div`
  height: 60%;
  width: 100%;
  background-color: rgba(235, 220, 220, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  position: relative;
  top: 20%;
  button {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid gray;
    :hover {
      background-color: rgba(150, 142, 142, 0.5);
    }
  }
  button:first-child {
    margin-right: 550px;
  }
  button:last-child {
    margin-left: 550px;
  }
  @media all and (max-width: 767px) {
    button:first-child {
      margin-right: 260px;
    }
    button:last-child {
      margin-left: 260px;
    }
  }
`;

const Project = styled(motion.div)<{ imgurl: string }>`
  height: 300px;
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -150px;
  background-image: url(${(props) => props.imgurl});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media all and (max-width: 767px) {
    height: 200px;
    width: 200px;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
`;

const intTextVariant = {
  initial: {
    opacity: 0,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
    },
  },
  end: {
    opacity: 0,
    y: -50,
    rotateX: 180,
    transition: {
      duration: 0.8,
    },
  },
};

const openningVar = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
};

const openingVarChild = {
  initial: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const projectVar = {
  initial: (isback: boolean) => ({
    x: isback ? -200 : 200,
    opacity: 0,
    scale: 0,
  }),
  now: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  end: (isback: boolean) => ({
    x: isback ? 200 : -200,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  }),
};

const Home = () => {
  const intArr = ["신입 프론트엔드 ", "고민하는 ", "긍정적인 "];
  const imgArr = [imgOne, imgTwo, imgThree, imgFour];
  const [arrIndex, setArrIndex] = useState(0);
  const [projectNow, setProjectNow] = useState(2);
  const [isback, setIsback] = useState(false);
  const isOpen = useRecoilValue(isOpenState);

  const changeMsg = () => {
    if (arrIndex === 0 || arrIndex === 1) {
      setArrIndex(arrIndex + 1);
    } else {
      setArrIndex(arrIndex - 2);
    }
  };

  const onClickNextbtn = () => {
    setIsback(false);
    setProjectNow((pre) => (pre === 3 ? pre : pre + 1));
  };
  const onClickPrebtn = () => {
    setIsback(true);
    setProjectNow((pre) => (pre === 0 ? pre : pre - 1));
  };

  useInterval(() => {
    changeMsg();
  }, 2000);

  useInterval(() => {
    projectNow === 3 ? setProjectNow(0) : onClickNextbtn();
  }, 3500);

  return (
    <Wrapper
      $isOpen={isOpen}
      variants={openningVar}
      initial="initial"
      animate="end"
    >
      <Introduce>
        <AnimatePresence>
          {intArr.map((text, index) =>
            arrIndex === index ? (
              <IntText
                variants={intTextVariant}
                initial="initial"
                animate="visible"
                exit="end"
                key={index}
              >
                {text}
              </IntText>
            ) : null
          )}
        </AnimatePresence>
        <motion.span variants={openingVarChild}>개발자 황재하</motion.span>
      </Introduce>
      <hr />
      <motion.span variants={openingVarChild}>방문을 환영합니다</motion.span>
      <ProjectPreviews>
        <AnimatePresence custom={isback}>
          <Project
            custom={isback}
            variants={projectVar}
            initial="initial"
            animate="now"
            exit="end"
            key={projectNow}
            imgurl={imgArr[projectNow]}
          />
        </AnimatePresence>
        <button onClick={onClickPrebtn}>prev</button>
        <button onClick={onClickNextbtn}>next</button>
      </ProjectPreviews>
    </Wrapper>
  );
};

export default Home;
