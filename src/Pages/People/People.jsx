import React from 'react'
import { Mainsection } from '../../Components/HeroSection/Mainsection'
import Cards from '../../Components/Card'
import ImageCard from '../../Components/CardComponent/ImageCard';
import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
const People = ({activeTab,HeroSectionContent}) => {
       const headingarr = [ ['Employees','/peoplecard1.png','/People/employees'],[ 'Customers','/peoplecard2.png','/People/customers'], ['Supply chain','peoplecard3.png','/People/supply-chain']];
       const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
      });
    
      const containerVariants = {
        hidden: {y:"-100px"},
        visible: {
          y:0,
          transition: {
            staggerChildren: 0.4, duration:0.3 ,ease:easeInOut // Adjust as needed for desired stagger effect
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
 
       <Mainsection
      videolink={"/peoplevideo.mp4"}
      activeTab={activeTab}
      HeroSectionContent={HeroSectionContent}
    />
       {/* <div className='container-sustainability'>
         {headingarr.map((heading, id) => (
           <ImageCard activeTab={activeTab} hoverCardColor={'#DC67B9'} cardsColor={'#F395D2'} key={id} heading={heading} imageurl={heading[1]} /> // Pass the heading directly as a string
         ))}
       </div> */}
       <motion.div
          className="container-sustainability"
          variants={containerVariants}
          initial="hidden"
          animate={"visible"}
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

export default People
