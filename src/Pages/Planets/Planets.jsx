import React from 'react'
import { Mainsection } from '../../Components/HeroSection/Mainsection'
import './Planets.css'
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import ImageCard from '../../Components/CardComponent/ImageCard';
const Planets = ({activeTab,HeroSectionContent}) => {
  const headingarr = [ ['ENERGY & CLIMATE CHANGE','/Planetimg01.png','/Planet/energy-&-climate-change'], ['WASTE MANAGEMENT','Planetimg02.png','/Planet/waste-management'], ['WATER MANAGMENT','Planetimg03.png','/Planet/water-managment']];
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const containerVariants = {
    hidden: {y:"-100px"},
    visible: {
      y:0,
      transition: {
        staggerChildren: 0.4, duration:0.3 ,ease:"easeInOut" // Adjust as needed for desired stagger effect
      },
     
    },
  };

  const cardVariants = {
    hidden: { y: "-100px", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7, // Adjust as needed
      },
    },
  };
  return (
    <>
    <div className="planet-main">
      <Mainsection videolink={'/Planetmainsection.mp4'} activeTab={activeTab} HeroSectionContent={HeroSectionContent} />
    </div>
    <motion.div
          className="container-sustainability"
          ref={ref1}
          variants={containerVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          style={{marginTop:"200px"}}
        >
          {headingarr.map((heading, id) => (
            <motion.div
              key={id}
              variants={cardVariants}
              style={{ marginBottom: "50px", width:"27%" }} // Adjust as needed
            >
              <ImageCard
                activeTab={activeTab} hoverCardColor={'#DC67B9'} cardsColor={'#F395D2'} key={id} heading={heading} imageurl={heading[1]}
              />
            </motion.div>
          ))}
        </motion.div>
    </>
    
  )
}

export default Planets
