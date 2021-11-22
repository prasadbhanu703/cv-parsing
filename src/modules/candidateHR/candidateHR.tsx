import React from "react";
import { MainContainer } from "../../shared/styles/styled";
import { Container, HeadingContainer, VideoContainer } from "../homePage/style";
import BacImage from '../../assets/image/Freelancer.png'
import { Image, Input, GridContainer, FlexContainer } from "./styles";
import { Button } from "@material-ui/core";
import { colors } from "../../shared/styles/theme";

const CandidateHR = () => {
    return (<MainContainer>
        {/* <VideoContainer> */}
        {/* <video autoPlay loop muted src={Video} /> */}
        <Image src={BacImage} />
        {/* </VideoContainer> */}
        <HeadingContainer>
            {/* <h1>
          Candidates and HR's
        </h1> */}
            <h3 >
                Candidates and HR's
            </h3>
            <h6>
                Jumpstart your career
            </h6>
            <Input placeholder="search jobs here" style={{ padding: "10px" }} />
            <Button className="button"> Find jobs </Button>
        </HeadingContainer>
        <Container style={{padding : "20px 60px"}}>
        <GridContainer>
            <div>
                <img src={BacImage} />
            </div>
            <div style={{padding : "50px 0px"}}>
                <h1 >
                    Where do you want to work?
                </h1>
                <p>
                    Microsoft provides opportunities to empower you to create things that help others and 
                    change the world. Come as you are, do what you love.
                </p>
            </div>
        </GridContainer>
        <GridContainer style={{background:`${colors.whiteSmoke}`}}>
            <div>
                <img src={BacImage} />
            </div>
            <div style={{padding : "50px 0px"}}>
                <h1 >
                Life as a Microsoft intern
                </h1>
                <p>
                Every year, thousands of university students from every corner of the world join Microsoft.
                 You bring your aspirations, talent, potential—and excitement for the journey ahead. Our internship
                  experience brings interns from around the world together to connect, collaborate and co-create 
                  virtually to make a difference and impact the world.
                </p>
            </div>
        </GridContainer>

        <h1> Explore other ways to learn and get engaged </h1>
        <h3> Grow your skills, help others and be a tech insider. </h3>
        <FlexContainer>
            <div>
            <img src={BacImage} />
            <h3> Learn tech skills through top universities </h3>
            <p> Explore modules and learning paths from universities like Carnegie Mellon University, 
                University of Oxford, and UC Berkeley to prepare you for a career in cloud. </p>
                </div>

                <div>
                <img src={BacImage} />
            <h3> Become a Microsoft Learn Student Ambassador </h3>
            <p> We're looking for student leaders with a passion for making a difference and sharing technology
                 with their peers. </p>
                </div>

                <div>
                <img src={BacImage} />
            <h3> Register for the Imagine Cup </h3>
            <p> Make an impact through coding, collaboration, and competition. Innovate with passion to tackle 
                global issues and bring your tech solutions to live in the Imagine Cup. </p>
                </div>
            </FlexContainer>
    </Container>

    </MainContainer>)
}

export default CandidateHR