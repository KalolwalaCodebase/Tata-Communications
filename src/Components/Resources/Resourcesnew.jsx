import React, { useState } from "react";
import "./Resources.css";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextAnimation from "../Animatedcounter/TextAnimation";
const Resourcesnew = () => {
  const [btnId, setBtnId] = useState(1);
const tabHeadings=['Compliance','Corporate Social Responsibility',' Certifications',' Public Consultation']
  const handleButtonClick = (id) => {
    setBtnId(id);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: "10px" },
    visible: { opacity: 1, y: "0px" },
  };
  return (
    <>
      <motion.b
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="heading-main-section-down"
      >
        RESOURCES
      </motion.b>
      <br />
      <br />
      <div className="parent-resources-component">
        <motion.div
          transition={{ staggerChildren: 0.1 }}
          className="resources-heading-tab"
        >
          {tabHeadings.map((heading, index) => (
            <motion.div
              key={index}
              className="resources-heading-tab-heading"
              style={{
                background: btnId === index + 1 ? "#5CA4E3" : "",
                color: btnId === index + 1 ? "white" : "#3D86C6",
                textTransform:"uppercase"
              }}
              initial={{ opacity:0,x: -100 }}
              whileInView={{ opacity:1,x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              onClick={() => handleButtonClick(index + 1)}
            >
              {heading}
            </motion.div>
          ))}
        </motion.div>

        <div className="resources-main-section-tab-container">
          {btnId == 1 && (
            <>
              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2023/03/ec-certificate-expansion-2022.pdf"
                      }
                    >
                      {" "}
                      Environmental Clearance 2022
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2022/08/Post-EC-compliance_-July-To-December-2021_MoEF.pdf"
                      }
                    >
                      {" "}
                      Post EC compliance July To December 2021-MoEF
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2023/03/six-monthly-post-ec-compliance-report-tata-comm-jul-dec-2022-mpcb.pdf"
                      }
                    >
                      {" "}
                      Six Monthly Post EC Compliance Report - July 2022 to
                      December 2022 - To MPCB
                    </Link>
                  </motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 1, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>
              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2023/03/ec-certificate-expansion-2022.pdf"
                      }
                    >
                      {" "}
                      Environmental Clearance 2011
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2022/08/Post-EC-compliance_-January-to-June-2022.pdf"
                      }
                    >
                      Post EC compliance - January to June 2022
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2022/10/six-monthly-post-ec-compliance-report-july-2021-to-december-2021-to-moef.pdf"
                      }
                    >
                      Six Monthly Post EC Compliance Report - July 2021 to
                      December 2021- To MOEF
                    </Link>
                  </motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 0.5, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>

              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2022/08/Environment-Clearance-Revalidation-2018.pdf"
                      }
                    >
                      Six Monthly Post EC Compliance Report - July 2021 to
                      Environment Clearance Revalidation 2018
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2022/10/post-ec-compliance-report-january-2022-to-june-2022-to-moef.pdf"
                      }
                    >
                      Six Monthly Post EC Compliance Report - July 2021 to Post
                      EC Compliance Report - January 2022 to June 2022 - To MOEF
                    </Link>
                  </motion.span>
                  <motion.span variants={childVariants}></motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 0.5, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>
            </>
          )}
          {btnId == 2 && (
            <>
              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/composition-of-the-csr-committee/"
                      }
                    >
                      Composition of the CSR Committee
                    </Link>
                  </motion.span>
                  <motion.span variants={childVariants}></motion.span>
                  <motion.span variants={childVariants}></motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 1, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>
              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/corporate-social-responsibility-policy/"
                      }
                    >
                      Corporate Social Responsibility Policy
                    </Link>
                  </motion.span>

                  <motion.span variants={childVariants}></motion.span>
                  <motion.span variants={childVariants}></motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 0.5, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>
              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/list-of-csr-projects/"
                      }
                    >
                      List of CSR projects
                    </Link>
                  </motion.span>
                  <motion.span variants={childVariants}></motion.span>
                  <motion.span variants={childVariants}></motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 0.5, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>
            </>
          )}
          {btnId == 3 && (
            <>
              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2023/02/business-and-human-rights-policy.pdf"
                      }
                    >
                      Six Monthly Post EC Compliance Report - July 2021 to
                      Business and Human Rights Policy
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2023/06/iso-45001-2018-occupational-health-and-safety-management-system-certificate.pdff"
                      }
                    >
                      Six Monthly Post EC Compliance Report - July 2021 to ISO
                      45001:2018 – Occupational Health and Safety Management
                      System Certificate
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2022/11/supplier-code-of-conduct-tata-comms.pdf"
                      }
                    >
                      Six Monthly Post EC Compliance Report - July 2021 to
                      Supplier Code of Conduct
                    </Link>
                  </motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 0.5, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>

              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/environment-policy/"
                      }
                    >
                      Environment Policy
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/occupational-health-safety-policy/"
                      }
                    >
                      Occupational Health & Safety Policy
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2024/04/sustainability-linked-loan-framework-2024.pdf"
                      }
                    >
                      Sustainability Linked Loan Framework
                    </Link>
                  </motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 1, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>

              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2023/06/iso-14001-2015-environmental-management-system-certificate.pdf"
                      }
                    >
                      ISO 14001:2015 – Environmental Management System
                      Certificate
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://gamma.tatacommunications.com/assets/wp-content/uploads/2022/11/sustainable-supply-chain-policy-tata-comms.pdf"
                      }
                    >
                      Sustainable Supply Chain Policy
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  ></motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 1, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>
            </>
          )}
          {btnId == 4 && (
            <>
              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/climate-resilient-village-program-stakeholder-consultation/"
                      }
                    >
                      Climate Resilient Village Program Stakeholder Consultation
                      Report
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/mpowering-households-in-odhisa-stakeholder-consultation/"
                      }
                    >
                      Smart Cookstove Programme_ Mpowered Odisha_Stakeholder
                      Consultation Report
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/an-induction-initiative-for-households-in-jharkhand/"
                      }
                    >
                      Smart Cookstove Programme_ Mpowered Jharkhand_VPA Design
                      Document
                    </Link>
                  </motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 1, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>

              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/climate-resilient-village-program-stakeholder-consultation/"
                      }
                    >
                      Climate Resilient Village Program_VPA Design Document
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/empowering-households-with-cooking-solutions-in-odhisa/"
                      }
                    >
                      Smart Cookstove Programme_ Mpowered Odisha_VPA Design
                      Document
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/tackling-household-pollution-with-a-smart-cookstove-program/"
                      }
                    >
                      Smart Cookstove Program by Tata Communications Design
                      Consultation Report
                    </Link>
                  </motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 1, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>

              <div className="resources-content-container">
                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/impact-assessment-report-of-project-anew/"
                      }
                    >
                      Impact Assessment report of Project ANEW
                    </Link>
                  </motion.span>
                  <motion.span
                    className="link-class-simple"
                    variants={childVariants}
                  >
                    <Link
                      to={
                        "https://www.tatacommunications.com/resource/corporate-resources/sustainability/an-induction-initiative-in-jharkhand-stakeholder-consultation/"
                      }
                    >
                      Smart Cookstove Programme_ Mpowered Jharkhand_Stakeholder
                      Consultation Report
                    </Link>
                  </motion.span>
                  <motion.span variants={childVariants}></motion.span>
                </motion.div>
                <motion.img
                  src="/verticalline.png"
                  alt=""
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%", transition: easeInOut }}
                  transition={{ delay: 1, duration: 10 }} // Delay image animation to start after span animation
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Resourcesnew;
