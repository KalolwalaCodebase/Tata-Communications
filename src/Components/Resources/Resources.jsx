import "./Resources.css";
import React,{useEffect,useRef, useState} from "react";
const Resources = () => {
  const containerRef = useRef(null);
const [btnId,setBtnId]=useState(1);
  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class to trigger the animation when in view
            container.classList.add('animate-in-up');
          } else {
            //container.classList.remove('animate-in-up');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold based on when you want the animation to start
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <div className="frame-resources">
      <div ref={containerRef} className="frame-certifications1">
        <div className="resources">resources</div>
        <div className="certifications-frame-wrapper-parent">
          <div className="certifications-frame-wrapper">
            <div className="frame-post-e-ccompliance-july">
              <div className={`rectangle-compliance1 ${btnId===1&&'active-btn'}`}>
                <div className="rectangle-compliance-item" />
                <span onClick={()=>setBtnId(1)} className={`compliance`}>compliance</span>
              </div>
              <div className={`corporate-social-responsibilit-wrapper ${btnId===2&&'active-btn'}`}>
                <div onClick={()=>setBtnId(2)} className={`corporate-social-responsibilit`}>
                  corporate social responsibility
                </div>
              </div>
            </div>
            <div className={`"certifications-frame-and-publi ${btnId===3&&'active-btn'}`}>
              <div onClick={()=>setBtnId(3)} className={`certifications `}>certifications</div>
            </div>
            <div className={`certifications-frame-and-publi1 ${btnId===4&&'active-btn'}`}>
              <div  onClick={()=>setBtnId(4)} className={`public-consultaion `}>public consultaion</div>
            </div>
          </div>
          <div className="frame-environmental-clearance">
            
            {
              btnId===1&& 
              <>
              <div className="rectangleframe" />
              <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              
              <div className="post-ec-compliance">
                Post EC compliance  July To<br/> December 2021-MoEF
              </div>
              
              <div className="post-ec-compliance">
                Six Monthly Post EC Compliance Report -<br/> July 2022 to December
                2022 - To MPCB
              </div>
              
            </div>
            <img src="/verticalline.png" alt="" />
            <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              

              <div className="post-ec-compliance">
                Post EC compliance July To <br/>December 2021-MoEF
              </div>
              
              <div className="post-ec-compliance">
                Six Monthly Post EC Compliance Report - <br/>July 2022 to December
                2022 - To MPCB
              </div>
            </div>
            <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              
              <div className="post-ec-compliance">
                Post EC compliance July To<br/> December 2021 - MoEF
              </div>
              
              <div className="post-ec-compliance">
                Six Monthly Post EC Compliance Report - <br/>July 2022 to December
                2022 - To MPCB
              </div>
            </div>
              </>
            }
            {
              btnId===2&& 
              <>
              <div className="rectangleframe" />
              <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                 Lorem, ipsum dolor.
                </span>
              </div>
              
              <div className="post-ec-compliance">
               Lorem ipsum dolor sit.<br/> Lorem ipsum dolor sit.
              </div>
              
              <div className="post-ec-compliance">
                Lorem ipsum dolor sit amet. -<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              
            </div>
            <img src="/verticalline.png" alt="" />
            <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Lorem, ipsum dolor.
                </span>
              </div>
              

              <div className="post-ec-compliance">
                Lorem ipsum dolor sit. <br/>December 2021 - MoEF
              </div>
              
              <div className="post-ec-compliance">
                Six Monthly Post EC Compliance Report - <br/>July 2022 to December
                2022 - To MPCB
              </div>
            </div>
            <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              
              <div className="post-ec-compliance">
                Post EC compliance July To<br/> December 2021 - MoEF
              </div>
              
              <div className="post-ec-compliance">
                Six Monthly Post EC Compliance Report - <br/>July 2022 to December
                2022 - To MPCB
              </div>
            </div>
              </>
            }
            {
              btnId===3&& 
              <>
              <div className="rectangleframe" />
              <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              
              <div className="post-ec-compliance">
                Post EC compliance  July To<br/> December 2021 - MoEF
              </div>
              
            </div>
            <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              

              <div className="post-ec-compliance">
                Post EC compliance July To <br/>December 2021 - MoEF
              </div>
              
              
            </div>
            <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              
              <div className="post-ec-compliance">
                Post EC compliance July To<br/> December 2021 - MoEF
              </div>
              
              <div className="post-ec-compliance">
                Six Monthly Post EC Compliance Report - <br/>July 2022 to December
                2022 - To MPCB
              </div>
            </div>
              </>
            }
            {
              btnId===4&& 
              <>
              <div className="rectangleframe" />
              <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              
              <div className="post-ec-compliance">
                Post EC compliance  July To<br/> December 2021 - MoEF
              </div>
              
              
              
            </div>
            <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              

              <div className="post-ec-compliance">
                Post EC compliance July To <br/>December 2021 - MoEF
              </div>
              
              <div className="post-ec-compliance">
                Six Monthly Post EC Compliance Report - <br/>July 2022 to December
                2022 - To MPCB
              </div>
            </div>
            <div className="environmental-clearance-2022-parent">
              <div className="environmental-clearance-2022-container">
                <span>
                  Environmental Clearance 2022
                </span>
              </div>
              
              <div className="post-ec-compliance">
                Post EC compliance July To<br/> December 2021 - MoEF
              </div>
              
              <div className="post-ec-compliance">
                Six Monthly Post EC Compliance Report - <br/>July 2022 to December
                2022 - To MPCB
              </div>
            </div>
              </>
            }
            
            
          </div>
        </div>
      </div>
      <i className="for-enquiries-feedback-container">
        <span>{`For enquiries, feedback, or any grievances related to our environmental, health, and safety practices, please get in touch with us at `}</span>
        <span className="eohstatacommunicationscom">
          EOHS@tatacommunications.com
        </span>
      </i>
    </div>
  );
};

export default Resources;
