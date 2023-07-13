import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App4() {
    const x = useMotionValue(0);
    const trans = useTransform(x, [-400, 0, 400], [-360,0,360]);
    const gradient = useTransform(x, [-400, 0, 400],
        ["linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
        "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
        "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))"]);
    const {scrollY, scrollYProgress} = useScroll();
    const scaleY = useTransform(scrollYProgress, [0,1], [1,10]);

    return (
        <Wrapper style={{background: gradient}}>
            <h1>11</h1>
            <Box style={{ x, rotateZ: trans, scale: scaleY }} drag="x" dragSnapToOrigin/>
        </Wrapper>
    );
}

export default App4;