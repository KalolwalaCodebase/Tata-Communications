import React from 'react'
import { Mainsection } from '../../Components/HeroSection/Mainsection';
import Cards from '../../Components/Card';
import Cardimg from './../../Components/Cardimg';
import ImageCard from '../../Components/CardComponent/ImageCard';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
const Community = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ ['Education','/communitycard1.png','/Community/education'], ['Sustainable Livelihoods',"/communitycard2.png",'/Community/sustainable-livelihoods'],['Environment','/communitycard3.png','/Community/environment']];
       const imageurl=["communitycard1.png","communitycard2.png","communitycard3.png"]
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
         <div className="wrapper-community-cards">
           <div className="planet-main">
           <Mainsection videolink={'/Community.mp4'} activeTab={activeTab} HeroSectionContent={HeroSectionContent} />
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
         {/* <div className='container-sustainability'>
           {headingarr.map((heading, id) => (
             <ImageCard activeTab={activeTab} hoverCardColor={'#00B3BD'} cardsColor={'#38D1DA'} key={id} heading={heading} imageurl={heading[1]}  /> // Pass the heading directly as a string
           ))}
         </div> */}
         </div>
         </>
         
       )
}

export default Community
