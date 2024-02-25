"use client"
import React from 'react'
import ConferenceDetails from './ConferenceDetails';
import { ConferenceDetailsProps } from '../interfaces/interfaces';

const ConferenceWrapper: React.FC<ConferenceDetailsProps> = ({ conferenceDetails }) =>{
  return (
    <ConferenceDetails conferenceDetails={conferenceDetails}/>
  )
}

export default ConferenceWrapper