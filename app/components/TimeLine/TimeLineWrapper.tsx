"use client"
import React from "react";
import Link from "next/link";
import TimeLine from "./TimeLine";
export interface Conference {
    id: string;
    name: string;
    startDate: string;
    slogan: string;
  }
  
  interface TimelineProps {
    conferences: Conference[];
  }
const TimeLineWrapper: React.FC<TimelineProps> = ({ conferences }) => {    
  return (
    <TimeLine conferences={conferences}/>
  )
}
export default TimeLineWrapper