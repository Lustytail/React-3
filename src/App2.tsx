import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255,255,255,0.2);
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  place-self: center;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`;
const myVars = {
  start: { scale: 0},
  end: {scale: 1, rotateZ:360, transition: { type: "spring", delay: 0.5}}
};

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring"
    }
  }
}


function App2() {
  return (
    <Wrapper>
      <h1>11</h1>
      {/*<Box transition={{type: "spring", delay: 1}} initial={{ scale: 0}} animate={{ scale: 1, rotateZ: 360}}/>*/}
      {/*<Box variants={myVars} initial="start" animate="end" />*/}
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
      </Box>
    </Wrapper>
  );
}

export default App2;