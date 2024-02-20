import React, { FC } from "react";
export interface Conference {
    id: string;
    name: string;
    startDate: string;
    slogan: string;
  }
  
  interface TimelineProps {
    conferences: Conference[];
  }
const TimeLine: FC<TimelineProps> = ({ conferences }) => {
    console.log("conf",conferences )        
  return (
    <div className="px-6 lg:px-24 pt-24 bg-[#fff]" id="timeline-section">
      <div className="font-bold text-5xl text-center p-8 text-[#0A142F]">
        Conferences
      </div>
      {/* <OldTimeline conferences={conferences}/> */}
      {
       conferences.map((item) => <div>{item.name}</div>)
      }
      
    </div>
  )
}
export default TimeLine