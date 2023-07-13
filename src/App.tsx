import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BiggerBox = styled(motion.div)`
  display: grid;
  width: 520px;
  height: 320px;
  margin: 15px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;
const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariant = {
  hover: (num: number) => ({
    scale: 1.1,
    x: (num === 1 || num === 3) ? -12.5 : (num === 2 || num === 4) ? 12.5 : 0,
    y: (num === 1 || num === 2) ? -7.5 : (num === 3 || num === 4) ? 7.5 : 0
  }),

  

}

function App() {
  const [num, setNum] = useState(0);

  return (
    <Wrapper>
        <AnimatePresence>
          <BiggerBox>
            <Box variants={boxVariant} custom={1} transition={{style:"spring" }} whileHover="hover"/>
            <Box variants={boxVariant} custom={2} transition={{style:"spring" }} whileHover="hover"/>
            <Box variants={boxVariant} custom={3} transition={{style:"spring" }} whileHover="hover"/>
            <Box variants={boxVariant} custom={4} transition={{style:"spring" }} whileHover="hover"/>
          </BiggerBox>
          <button>Switch</button>
        </AnimatePresence>
    </Wrapper>
);


}

export default App;