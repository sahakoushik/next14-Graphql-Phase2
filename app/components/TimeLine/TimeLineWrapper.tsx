"use client"
import React, { FC } from "react";
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
const TimeLineWrapper: FC<TimelineProps> = ({ conferences }) => {    
  return (
    <TimeLine conferences={conferences}/>
  )
}
export default TimeLineWrapper