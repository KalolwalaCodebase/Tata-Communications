import React from "react";
import HeadBar from "../../Components/Headbar/HeadBar";
import "./People.css";
import { motion } from 'framer-motion';
import TextAnimation from "../../Components/Animatedcounter/TextAnimation";
const PeopleSupplychain = () => {
  return (
    <div className="people-supply-chain-intro-parent-container">
      <HeadBar
        icon={"/SupplyChain.svg"}
        heading={"EMPLOYEE"}
        theme={"#AD3088"}
        headiconstyle={'#E036AE'}
      />
      <div className="climate-change-intro-container people-main-parent-container">
        <div className="climate-change-intro-paragraph-inside-container">
          <p className="paragraph-inside-climate-change people-paragraph-style1">
            Recognising the pivotal role of our supply chain in shaping our
            reputation and broader impact, we actively engage with suppliers to
            foster transparency, sustainability and ethical conduct. Tata
            Communications has initiated efforts to evaluate the Environmental,
            Social, and Governance (ESG) parameters of our primary suppliers.
          </p>
          <p className="paragraph-inside-climate-change people-paragraph-style2">
            Our commitment to ethical business practices, human rights, employee
            well-being, and environmental protection is enforced through a
            robust management strategy across our network of 1515 SCM-managed
            suppliers.
          </p>
          <p className="paragraph-inside-climate-change people-paragraph-style2">
            We ensure supplies from OEMs or authorized distributors and engage
            contractors for general services, holding all to high standards as
            per our Supplier Code of Conduct and Mandatory Safety Standards.
            This accountability extends through our supply chains, demanding
            risk management and the upholding of our principles at every level.{" "}
          </p>
        </div>
        <div className="climate-change-intro-photos-inside-container">
          <img
            className="intro-climate-image intro-people-image"
            src="/peoplesupplychain.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="planet-climate-last-section-parent">
        <div className="main-section-climate-change">
          <div className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
              Responsible Sourcing
            </b>
            <br />
            <br />
            <b
              className="heading-main-section-climate-change people-heading-main"
              style={{ fontWeight: "300" }}
            >
              SCM Managed Suppliers
            </b>
            <p
              className="bigger-paragraph-people-descriptions specail-description-heading"
              style={{ width: "100%" }}
            >
              Our spend is spread across various categories based on business
              and customer needs:{" "}
            </p>
          </div>
          <div className="svg-group-supplychain-container">
            <img src="/supplychain01.svg" alt="" />
            <img src="/supplychain02.svg" alt="" />
            <img src="/supplychain03.svg" alt="" />
            <img src="/supplychain04.svg" alt="" />
            <img src="/supplychain05.svg" alt="" />
          </div>
          <div className="image-container-supply-chain">
            <div className="image-container-div">
              <p className="image-desc-supply-chain">
                We also categorise our suppliers based on their wallet share of
                spend in Tata Communications. Suppliers are divided into 3
                categories, where the percentage of suppliers in each category
                is:
              </p>
              <img src="/circle-graph-people01.svg" alt="" />
            </div>
            <div className="line"></div>
            <div className="image-container-div">
              <p className="image-desc-supply-chain">
                We spend USD 795 Million (INR 6,591 Crores) for the procurement
                of equipment and services, with over 1,500+ direct suppliers
                around the world geographically to support our operations and
                meet customer needs:
              </p>
              <img src="/circle-graph-people02.svg" alt="" />
            </div>
          </div>
          <div className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
              Sustainable Supply Chain Framework
            </b>
            <br />
            <br />
            <h6 className="heading-black-supply-chain">
              Supplier Code of Conduct
            </h6>
            <div className="image-description-and-image-container">
              <p className="description-mage-conatiner-supply-chain">
                We have implemented a comprehensive supplier code of conduct,
                aligned with our core values of sustainability, innovation and
                technology. This policy embodies our commitment to upholding the
                highest standards of sustainable and ethical practices.
              </p>{" "}
              <img src="/supplychain-img04.svg" alt="" />
            </div>
          </div>
          <div className="supply-chain-container-pink">
            <h6 className="heading-black-supply-chain">
              Supplier Code of Conduct
            </h6>
            <p className="description-mage-conatiner-supply-chain">
              We have implemented a comprehensive supplier code of conduct,
              aligned with our core values of sustainability, innovation and
              technology. This policy embodies our commitment to upholding the
              highest standards of sustainable and ethical practices.
            </p>
          </div>
          <div className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
              Supplier Diversity
            </b>
            <h6
              className="bigger-paragraph-people-descriptions specail-description-heading"
              style={{ width: "100%" }}
            >
              We remain committed to promote vendor diversity within our supply
              chain.
            </h6>
            <p
              className="description-mage-conatiner-supply-chain"
              style={{ width: "100%", textAlign: "left" }}
            >
              It not only helps to create a more inclusive and equitable
              business environment but also creates indirect employment for
              historically marginalised communities, women entrepreneurs and
              businesses operated by people with disabilities (PWD). These
              endeavours help to nurture a more diverse and representative
              network of suppliers while concurrently contributing to the
              economic empowerment of underrepresented groups.
            </p>
          </div>
          <div
            className="image-description-and-image-container"
            style={{ padding: "1rem" }}
          >
            <img
              style={{ width: "35%" }}
              src="/supplychange-people-img05.png"
              alt=""
            />
            <p
              className="description-mage-conatiner-supply-chain"
              style={{ marginRight: "0", width: "52%", marginLeft: "1rem" }}
            >
              <h6 className="heading-black-supply-chain">
                Tata Affirmative Action Program (TAAP)
              </h6>
              Established in 2007, the TAAP programme aims to address structural
              and social disparities in India by providing equal opportunities
              and creating an environment for inclusive growth for historically
              marginalised social groups including Dalits, tribals, women and
              people with disabilities.
            </p>{" "}
          </div>
          <div className="source-of-identification-container">
            <h6 className="pink-bold-heading" >
            Sources of Identification of Suppliers:
            </h6>
            <div className="specail-style-pink-identification-supplier">
             <img src="/supply-chain-img06.svg" alt="" />
            </div>
          </div>
          <div className="description-main-section people-descriptions">
            <img
              className="small-square-btn-png"
              src="/small-btn-alternative.svg"
              alt=""
            />
            <br />
            <b className="heading-main-section-climate-change people-heading-main">
            ESG Due Diligence
            </b>
            <div className="image-description-and-image-container">
              <p className="description-mage-conatiner-supply-chain" style={{width:"100%"}}>
              To uphold the principles of responsible sourcing, we have instituted the Sustainable Supply Chain Framework (SSCF).
              </p>
              <br />
              <br />
              <p className="description-mage-conatiner-supply-chain" style={{fontSize:"20px",width:"100%"}}>
                We have implemented a comprehensive supplier code of conduct,
                aligned with our core values of sustainability, innovation and
                technology. This policy embodies our commitment to upholding the
                highest standards of sustainable and ethical practices.
              </p>{" "}
            </div>
          </div>
          <div className="image-container-supplychain-008">
            <img src="/supplychainimg008.svg" alt="" />
          </div>
        </div>

        < motion.div initial={{x:"100px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.3, type:"spring"}} className="quick-link-sections">
        <b className="heading-links"><TextAnimation text={'Quick'}/><TextAnimation text={'Links'}/></b>
          <br />
          <img src="/quick-link-underline.png" alt="" />
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Goals and Progress</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Policies</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Responsible Sourcinge</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Sustainable Supply Chain Framework</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">Supplier Diversity</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">ESG Due Diligence</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">People Centric Policies</a>
          </div>
          <div className="quicklinks-button-div">
            <img
              className="quick-links-logo"
              src="/quickLinkArrow.png"
              alt=""
            />
            <a href="">GRI index</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PeopleSupplychain;
