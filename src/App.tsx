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

const Grid = styled(motion.div)`
  display: grid;
  width: 500px;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin: 30px;
`;

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariant = {
  hover: (num: string) => ({
    scale: 1.1,
    x: (num === "1" || num === "3") ? -12.5 : (num === "2" || num === "4") ? 12.5 : 0,
    y: (num === "1" || num === "2") ? -7.5 : (num === "3" || num === "4") ? 7.5 : 0, 
  })
}

const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled(motion.button)`
  width: 60px;
  height: 20px;
  background-color: rgb(15 214 255);
  border-width: 0;
`;

const BtnVariant = {
  switching: (switching: boolean) => ({
    scale: switching ? 1 : 1.5,
    color: switching ? "rgb(0 0 0)" : "rgb(255 255 255)"
  })
}
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayVariant = {
  invisible: {backgroundColor: "rgba(0, 0, 0, 0)"},
  visible: {backgroundColor: "rgba(0, 0, 0, 0.5)"}
}

const OverlayBox = styled(motion.div)`
  width: 247.5px;
  height: 150px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
`;

function App() {
  const [switching, setSwitching] = useState(true);
  const onSwitching = () => setSwitching((cur) => !cur);
  const [id, setId] = useState<null|string>(null);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => <Box variants={boxVariant} whileHover="hover" transition={{style: "spring"}} custom={n} onClick={() => setId(n)} key={n} layoutId={n}>
            {n === "2" && switching ? <Circle layoutId="switcing"/> : null}
            {n === "3" && !switching ? <Circle layoutId="switcing"/> : null}
        </Box>)}
      </Grid>
      <Button variants={BtnVariant} custom={switching} animate="switching" onClick={onSwitching}>Switch</Button>
        
      <AnimatePresence>
        {
          id ? (
          <Overlay variants={overlayVariant} initial="invisible" animate="visible" exit="invisible">
            <OverlayBox layoutId={id} onClick={() => setId(null)} />
          </Overlay>)
          : null
        }
      </AnimatePresence>
    </Wrapper>
);


}

export default App;