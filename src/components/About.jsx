import React from "react";
//import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { fade } from "maath/misc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
      >
        I am a 16 years old developer who is interest in both software and hardware developing. 
        I have in-depth study of C, C++, and Python-related programming knowledge. In addition, I am also learning hardware knowledge at Dimwave Tech to develop a touch panel based on NXP. 
        I am engaged in AI research at CGSH's CKCSC, and my expertise is in computer vision and software-hardware interaction. Related successful cases are CGSH's science exhibition, PhantomLight, and the SigmaGO being developed.
      </motion.p>
    </>
  );
};

export default About;
