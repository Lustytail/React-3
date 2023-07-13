import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    hover: {scale: 1.2, rotateZ:90},
    click: {scale: 0.7, borderRadius: "100px"},
    drag: {backgroundColor: "rgba(2, 3, 1, 10)", transition: {duration: 1}}
};



function App3() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <h1>11</h1>
      <BiggerBox ref={biggerBoxRef}>
        <Box drag dragSnapToOrigin dragElastic={0.5} dragConstraints={biggerBoxRef} variants={boxVariants} whileHover="hover" whileTap="click" whileDrag="drag"/>
      </BiggerBox>
    </Wrapper>
  );
}

export default App3;