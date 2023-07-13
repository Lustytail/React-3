import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 150px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale:0
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360
  },
  leaving: {
    opacity: 0,
    y: 30
  }
}

const boxVariants2 = {
  entry: (back: boolean) => ({
    x: back? -300 : 300,
    opacity: 0,
    scale: 0.4
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  leaving: (back: boolean) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0.4
  })
}

function App6() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((cur) => !cur);
  const [number, setNumber] = useState(1);
  const [back, setBack] = useState(false);
  const nextNumber = () => {
    setBack(false);
    setNumber((cur) => cur === 5? 1 : cur+1);
  }
  const prevNumber = () => {
    setBack(true);
    setNumber((cur) => cur === 1? 5 : cur-1);
  }
  return (
    <Wrapper>
        <button style={{margin: "10px"}} onClick={prevNumber}>Prev</button>
        <button style={{margin: "10px"}} onClick={nextNumber}>Next</button>
        <AnimatePresence custom={back}>
          { [0,1,2,3,4,5].map(i => {
            return (i === number ?
            <Box key={i} variants={boxVariants2} custom={back}
            transition={{ default:{duration: 0.5} }} initial="entry" animate="center" exit="leaving">{i}</Box>
            : null);
          })}
        </AnimatePresence>
    </Wrapper>
);


  // return (
  //     <Wrapper>
  //         <button onClick={toggleShowing}>Click</button>
  //         <AnimatePresence>{ showing ? 
  //           <Box variants={boxVariants} transition={{ default:{duration: 0.5} }} initial="initial" animate="visible" exit="leaving"/>
  //           : null}
  //         </AnimatePresence>
  //     </Wrapper>
  // );
}

export default App6;