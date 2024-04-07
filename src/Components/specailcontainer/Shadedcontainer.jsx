import React from 'react';
import { motion } from 'framer-motion';
import TextAnimation from '../Animatedcounter/TextAnimation';
import Textanimation2 from '../Animatedcounter/Textanimation2';

const Shadedcontainer = () => {
  return (
    <div className='parent-shaded-container'>
      <motion.p className="description-shaded-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Textanimation2 text={'For any feedback, queries or grievances related to our sustainability practices please reach out to '}/> 
        <motion.span className='email-span' initial={{ opacity: 0,y:"-1000px",}} whileInView={{ opacity: 1, y: 0}} transition={{delay:1.5, ease:"easeIn"}}> EOHS@tatacommunications.com</motion.span>
      </motion.p>
    </div>
  );
};

export default Shadedcontainer;
