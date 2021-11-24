import { Button } from '@material-ui/core'
import React from 'react'
import { MainContainer } from '../../../shared/styles/styled'
import { FlexContainer, GridContainer, Image, Input } from '../../candidateHR/styles'
import { Container, HeadingContainer } from '../../homePage/style'
import BacImage from '../../../assets/image/Freelancer.png'
import { colors } from '../../../shared/styles/theme'

const MilitaryVeterans = () => {
    return(<MainContainer>
        {/* <VideoContainer> */}
        {/* <video autoPlay loop muted src={Video} /> */}
        <Image src={BacImage} />
        {/* </VideoContainer> */}
        <HeadingContainer>
            {/* <h1>
          Candidates and HR's
        </h1> */}
            <h3 >
            U.S. military and veterans
            </h3>
            {/* <h6>
                Jumpstart your career
            </h6> */}
            <Input placeholder="search jobs here" style={{ padding: "10px" }} />
            <Button className="button"> Find jobs </Button>
        </HeadingContainer>
        <Container style={{padding : "20px"}}>
        <GridContainer>
            
            <div>
                <h1 >
                We still serve
                </h1>
                <p>
                Every year 200,000 people leave active duty for civilian life. Men and women who formerly served
                 in the Army, Navy, Air Force, Marine Corps and Coast Guard continue to positively impact the 
                 world by excelling in their diverse careers at Microsoft.
                </p>
            </div>
            <div>
                <img src={BacImage} />
            </div>
        </GridContainer>
        <GridContainer style={{background:`${colors.whiteSmoke}`}}>
            <div>
                <img src={BacImage} />
            </div>
            <div style={{padding : "50px 0px"}}>
                <h3>
                "MSSA gives service members time to think about what they want to do when they get out—and perhaps
                 discover a passion for technology they didn’t realize they had."
                </h3>
                    <p>— Solaire , Service Engineer, Signals Intelligence Analyst, USMC</p>
            </div>
        </GridContainer>

        <h1 style={{paddingLeft : "40px",textAlign:"center"}}> Own your future </h1>
        <h3 style={{paddingLeft : "40px",textAlign:"center"}}> No matter where you are in your military career, we can help you 
        lay the foundation for future professional success at Microsoft and beyond. </h3>
        <FlexContainer>
            <div>
            <img src={BacImage} />
            <h3> Current service members </h3>
            <p> Our Microsoft Software and Systems Academy (MSSA) offers specialized training, career guidance,
                 and—upon program completion—an interview at Microsoft or one of our hiring partners. </p>
                </div>

                <div>
                <img src={BacImage} />
            <h3>Former service members</h3>
            <p> Microsoft is actively seeking former military service members for a variety of roles throughout
                the company. Search our job listings to find opportunities, apply your skills, and forge a new
                 career path. </p>
                </div>

                <div>
                <img src={BacImage} />
            <h3> Student veterans </h3>
            <p> Microsoft offers internships and onboarding programs for student veterans who are working toward 
                a degree in a STEM field. </p>
                </div>
            </FlexContainer>

            <GridContainer style={{background:`${colors.whiteSmoke}`}}>
            <div>
                <img src={BacImage} />
            </div>
            <div style={{padding : "50px 0px"}}>
                <h1>
                Microsoft Software and Systems Academy (MSSA)
                </h1>
                    <p>Microsoft supports military men and women with the necessary training and resources to 
                        empower them to succeed in the tech industry.</p>
            </div>
            <div style={{padding : "50px 0px"}}>
                <h1>
                Additional tools for your next career
                </h1>
                    <p>We’re here to serve you. Find all the necessary resources to jumpstart a new career or 
                        deepen your knowledge in a field you’re already familiar with.</p>
            </div>
        </GridContainer>

        <FlexContainer>
            <div style={{border:"0.5px solid black", padding:"0px 10px"}}>
            {/* <img src={BacImage} /> */}
            <h3 style={{borderBottom:"0.5px solid black"}}> Resourcesopens in a new tab </h3>
            <p> Find career, networking, product and educational resources specific to military veterans.</p>
                </div>

                <div style={{border:"1px solid black", padding:"0px 10px"}}>
                {/* <img src={BacImage} /> */}
            <h3 style={{borderBottom:"0.5px solid black"}}>Microsoft Learningopens </h3>
            <p> Fulfill your potential, learn new skills, and make the most of your investment in Microsoft 
                technology with certification, classroom training, e-learning, and books from Microsoft and 
                Microsoft Learning Partners. </p>
                </div>

                <div style={{border:"1px solid black", padding:"0px 10px"}}>
                {/* <img src={BacImage} /> */}
            <h3 style={{borderBottom:"0.5px solid black"}}> Cleared Technology Careersopens  </h3>
            <p> Maintain your clearance with a technology career! Learn how you can join our global mission and
                 help shape the future of the world. </p>
                </div>
            </FlexContainer>

            <GridContainer style={{background:`${colors.whiteSmoke}`}}>
            <div>
                {/* <img src={BacImage} /> */}
            </div>
            <div >
                <h1>
                Veterans keep performing
                </h1>
                    <p>Former service members have put their unique skills and knowledge to use in jobs across
                         hundreds of teams at Microsoft. Read on to discover how they turned their military 
                         experience into civilian technology careers.</p>
            </div>
            <div >
                {/* <h1>
                Additional tools for your next career
                </h1>
                    <p>We’re here to serve you. Find all the necessary resources to jumpstart a new career or 
                        deepen your knowledge in a field you’re already familiar with.</p> */}
            </div>
        </GridContainer>

        
    </Container>

    </MainContainer>)
}

export default MilitaryVeterans