import React from 'react';
import { motion } from 'framer-motion';

const Shadedcontainer = () => {
  return (
    <div className='parent-shaded-container'>
      <motion.p className="description-shaded-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        For any feedback, queries or grievances related to our sustainability practices please reach out to 
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, marginLeft: 5 }}> EOHS@tatacommunications.com</motion.span>
      </motion.p>
    </div>
  );
};

export default Shadedcontainer;
