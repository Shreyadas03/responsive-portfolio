import React from 'react'
import styled from "styled-components";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/constants';
import ExperienceCard from '../Cards/ExperienceCard';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding:50px 20px;
`;
const Wraper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items:center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;

`;
const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
   margin-top: 12px;
      font-size: 32px;
  }
`;
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
const TimeRangeslineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Experience = () => {
  return (
    <Container id='experience'>
        <Wraper>
            <Title>Experience</Title>
            <Desc>Here are some of my projexts</Desc>
            <TimeRangeslineSection>
                <Timeline>
                    {experiences.map((experience,index)=>(
                        <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined' color='secondary'/>
                            {index !== experience.length - 1 && <TimelineConnector/>}
                                
                                    
                                    
                                
                            
                        </TimelineSeparator>
                        <TimelineContent sx={{py:"12px",px:2}}>
                            <ExperienceCard experience={experience}/>
                        </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </TimeRangeslineSection>
        </Wraper>
    </Container>
  )
}

export default Experience