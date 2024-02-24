"use client"
import React from 'react'
import ConferenceDetails from './ConferenceDetails';

interface ConferenceDetailsProps {
    conferenceDetails: {
      name: string;
      slogan: string;
      schedules?: Schedule[];
      organizers?: Organizer[];
      sponsors?: Sponsor[];
      allSpeakers?: Speaker[];
    }
}

interface Schedule {
    day: string;
    intervals: Interval[];
  }
  
  interface Interval {
    sessions: Session[];
  }
  
  interface Session {
    begin: string;
    end: string;
    title: string;
  }
  
  interface Organizer {
    name: string;
    image: {
      url: string;
    };
    about: string;
  }
  
  interface Sponsor {
    name: string;
    image: {
      url: string;
    };
    about: string;
  }
  
  interface Speaker {
    name: string;
    image: {
      url: string;
    };
    social: {
      twitter: string;
      linkedin: string;
      dribble: string;
      github: string;
    };
    about: string;
  }

  const ConferenceWrapper: React.FC<ConferenceDetailsProps> = ({ conferenceDetails }) =>{
  return (
    <ConferenceDetails conferenceDetails={conferenceDetails}/>
  )
}

export default ConferenceWrapper