import React from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'
import { Link } from 'react-router-dom';

export const HumanRights = () => {

    const handleClick = (event,id) => {
        //event.preventDefault(); // Prevent default anchor behavior
      
        const targetElement = document.querySelector(`#${id}`);
        if (targetElement) {
          // Calculate the offset based on the current scroll position
          const offset = targetElement.getBoundingClientRect().top - 100;
      
          // Scroll to the element with an offset
          window.scrollBy({
            top: offset,
            behavior: 'smooth'
          });
        }
      };
    return (
        <div>
            <HeadBar
                icon={"/cardimg09.svg"}
                heading={"HUMAN RIGHTS"}
                theme={"#123C61"}
                headiconstyle={'#3B91DC'}
            />
           <div className="wrapper-hr-container">
          
            <div className="sliding-wrapper-container">
            <div className='human-rights-container-main flex' >
                {/* <div className='human-rights-container-main flex'> */}
                <div className='human-rights-container-main-left'>
                    <div className='human-rights-container-main-sec1 flex'>
                        <img src="/human-rights-banner.png" alt="" />
                        <div className='human-rights-banner-text'>
                            <h2>We are committed to the implementation of effective human rights policies that prioritise transparency across all facets of our operation.</h2>
                            <p>
                                We uphold the highest ethical standards and meticulously adhere to regulatory guidelines to ensure the well-being and security of our people as well as our supply partners. By fostering a culture of accountability and respect, we aim to promote human rights, dignity and equality across our global network.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div id='Policy-Framework' className='human-rights-container-main-sec2'>
                <div className='human-rights-container-main-sec2-content'>
                    <h1>Policy Framework</h1>
                    <h2>To strengthen the connection between our Business & Human Rights (BHR) initiatives and existing company policies, we have introduced a comprehensive Business and Human Rights Policy this year. <br /> <br /></h2>
                    <p>
                        This policy demonstrates our pledge to uphold the highest ethical standards in our business operations. It is in harmony with various national and international human rights frameworks, including the United Nations Universal Declaration of Human Rights, the ILO Declaration on Fundamental Principles and Rights at Work, the Modern Slavery Act 2015, and the UN Sustainable Development Goals 2030, as well as Tata's own Code of Conduct and Affirmative Action Policy. <br /><br />
                    </p>
                    <p>
                        The policy applies to all stakeholders identified by the company, including employees, contractors, communities, customers, and partners in the value chain. It covers key aspects of business and human rights, such as anti-bribery, anti-corruption, responsible usage, equal opportunities, fair competition, community engagement, respect for individual dignity, fair compensation, the right to privacy, information and asset integrity, freedom of expression, health and safety, product and service standards, and protections against trafficking, modern slavery, child labor, and breaches of data privacy and security.
                    </p>
                </div>
            </div>
            <div className='human-rights-container-main-sec3'>
                <div className='human-rights-container-main-sec2-content'>
                    <h1>Policy Framework</h1>
                    <p>
                        <b>PoSH charter -</b> Tata Communications and its subsidiaries strictly adhere to the requirements specified in the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013, as well as the regulations outlined under the PoSH Act. The PoSH Charter is designed to address the prevention, prohibition and redressal of sexual harassment incidents targeting women in the workplace in India. <br /><br />
                    </p>
                    <p>
                        <b>Global Dignity in the Workplace Policy -</b> This policy enables us to eliminate all forms of workplace discrimination, harassment, bullying and retaliation. It allows us to foster a culture of respect, diversity and inclusion. Above all, this policy helps to provide equal employment opportunities and the creation of a safe, healthy and fair working environment.
                        <br /><br /></p>
                    <h2>
                        Both employees and contract workers can report cases of human rights violation, including discrimination and harassment, through the DWP, POSH and Whistle-blower mechanism. The HR and Risk Management teams handle reported cases and present them to senior leadership and the board for review.
                    </h2>
                    <p>
                        <b> <br />Grievance redressal mechanism -</b> We maintain a zero-tolerance stance towards any misconduct or infringement of Human Rights. We have implemented a thorough Whistle-blower Policy to address and rectify any grievances or improper conduct. This policy encompasses a broad spectrum of concerns, including human rights violations and health and safety issues, and offers various reporting avenues, such as an independent "Ethics Helpline." It ensures that individuals can report issues without fear of retribution. Additionally, the policy allows for confidential and anonymous reporting through a multilingual hotline. Grievances concerning sustainability or human rights can also be submitted through the contact section on our website.
                    </p>
                </div>
            </div>
            <div id='Ethics-Helpline' className='human-rights-container-main-sec4 flex'>
                <div className='human-rights-container-main-sec4-left'>
                    <h2>Ethics Helpline</h2>
                    <h3>We have created a helpline for all our stakeholders to report concerns and misconducts. Issues can be reported via phone calls, emails, fax and the web portal.</h3>
                </div>
                <div className='human-rights-container-main-sec4-right'>
                    <h1>Zero</h1>
                    <p>Human rights violation cases <br />
                        reported in FY2024</p>
                </div>
            </div>
            <div id='Ensuring-safety-at-work' className='human-rights-container-main-sec5 '>
                <h2>Assesment and Engagement</h2>
                <h3>
                    We conducted an extensive human rights salience assessment to identify potential issues within our value chain and stakeholder interactions.
                </h3>
                <p>
                    Prompted by our growing operations and the intricate nature of our value chain, this initiative responds to the heightened focus on human rights by investors and customers, as well as evolving business and human rights legislation. Our assessment reviewed our policies and performance, aligned them with global standards, and pinpointed key stakeholder human rights concerns. Utilizing the UNGP criteria and the RDR Corporate Accountability Index, along with Tata Group’s standards, we engaged stakeholders in a collaborative process to create a human rights risk matrix. This matrix evaluates risks across various business and human rights areas, guiding us to address gaps and improve our transparency continually.
                </p>
                <div className="hr-asses-card-parent flex">
                    <img className='hr-cards-line' src="/hr-cards-line.svg" alt="" />
                    <div className="hr-asses-cards">
                        <img src="/hr-icon1.png" alt="" />
                        <h6>ASSESMENT</h6>
                        <p>Identify potential <br /> human rights issues</p>
                    </div>
                    <div className="hr-asses-cards">
                        <img src="/hr-icon2.png" alt="" />
                        <h6>REVIEW</h6>
                        <p>Periodic Policy <br />and Training Updates</p>
                    </div>
                    <div className="hr-asses-cards">
                        <img src="/hr-icon3.png" alt="" />
                        <h6>ACTION</h6>
                        <p>Implement <br />improvement</p>
                    </div>
                    <div className="hr-asses-cards">
                        <img src="/hr-icon4.png" alt="" />
                        <h6>ENGAGEMENT</h6>
                        <p>Stakeholder <br />consultations</p>

                    </div>
                </div>
            </div>
            <div id='Awareness-and-training' className='human-rights-container-main-sec6 '>
                <h2>Awareness and Training</h2>
                <div className='hr-container-main-sec6-text flex'>
                    <p><b>Inclusive Policies:</b> Policies such as the Whistleblower Policy and Sexual Harassment Charter is revised regularly on the basis of industry standards and feedback received from employees or other stakeholders.</p>
                    <div className='hr-sec6-subtext'>
                        <h1>93%</h1>
                        <p>Employees undertook training on the Tata Code of Conduct, and Global Dignity in the Workplace Policy</p>
                    </div>
                </div>
                <div className='hr-container-main-sec6-text flex'>
                    <p >
                        <b>Comprehensive training programmes:</b>   Supplementary trainings are provided to permanent employees as well as contractual workers, covering topics related to ethics and transparency, human rights, data privacy and PoSH. During FY2024, we have also successfully rolled out our Business Human Rights E-module for our people.
                    </p>
                    <div className='hr-sec6-subtext'>
                        <h1>Zero</h1>
                        <p>cases of Child, Forced or <br />Bonded labour</p>
                    </div>
                </div>
            </div>
            <div id='Vendor-and-third-party-compliance' className='human-rights-container-main-sec7 '>
                <h2>Vendor and third-party compliance</h2>
                <div className='hr-sec7-text flex'>
                    <p>
                        We remain committed to uphold the highest ethical standards for our people as well as other business partners. The Supplier Code of Conduct aligns with our corporate values and mandates adherence to ethical practices, respect for human rights, health and safety standards and environmental protection. Our due diligence framework for suppliers encompass the following:
                    </p>
                    <img src="/hr-sec6-chart.png" alt="" />
                </div>
            </div>
            <div className='human-rights-container-main-sec8 '>
                <h2>
                    We have pledged our commitment to the UN Global Compact's 10 Principles and, as a signatory, we will be transparently reporting our Communication of Progress (COP) annually starting from the fiscal year 2025. This commitment underscores our dedication to sustainable and ethical business practices on a global scale.
                </h2>
            </div>
            </div>
            <div className="hr-quick-links-section">
                <div className='hr-sticky-links'>
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><Link target="_blank" to={'/Sustainability/fy24-goals-&-progress'}>Goals and Progress</Link></li>
                        <li><Link target="_blank" to="/Governance/policies-and-procedures#Policies">Policies</Link></li>
                        <li><Link onClick={()=>handleClick(event,"Policy-Framework")}>Policy Framework</Link></li>
                        <li><Link onClick={()=>handleClick(event,"Ensuring-safety-at-work")}>Ensuring safety at work</Link></li>
                        <li><Link onClick={()=>handleClick(event,"Ethics-Helpline")}>Ethics Helpline</Link></li>
                        <li><Link onClick={()=>handleClick(event,"Awareness-and-training")}>Awareness and training</Link></li>
                        <li><Link onClick={()=>handleClick(event,"Vendor-and-third-party-compliance")}>Vendor and third party compliance</Link></li>
                        <li> <Link target="_blank" to="/gri-index">GRI index</Link></li>
                        <li> <Link target="_blank" to={'/Sustainability/sustainable-development-goals'} href="">SDG Linkage</Link></li>
                    </ul>
                </div>
            </div>
           </div>
            
            

        </div>
    )
}
