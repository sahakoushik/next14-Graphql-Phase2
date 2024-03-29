import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export interface Conference {
    id: string;
    name: string;
    startDate: string;
    slogan: string;
  }
  
  interface TimelineProps {
    conferences: Conference[];
  }
const TimeLine: React.FC<TimelineProps> = ({ conferences }) => {       
  return (
    <div className="px-6 lg:px-24 pt-24 bg-[#fff]" id="timeline-section">
      <div className="font-bold text-5xl text-center p-8 text-[#0A142F]">
        Conferences
      </div>
      <VerticalTimeline>
      {conferences.map((item) => {
        return (
          <React.Fragment key={item.name}>
            <VerticalTimelineElement
              className="vertical-timeline-element--content"
              contentStyle={{ background: '#F9FAFB', borderRadius: '8px' }}
              iconStyle={{
                padding: '12px',
                background: '#F9FAFB',
                border: '2px Solid #CDCDCD',
                borderColor: '#F9FAFB',
              }}
              // lineColor="#CDCDCD"
              icon={
                <Image src="/storm.svg" height={36} width={36} alt="storm" />
              }
              key={item.name}
              date={item.startDate}
              dateClassName="date"
              visible={true}
            >
              <Link
                href={'/conference/' + item.id}
                className="flex flex-row items-start"
              >
                <Image
                  src="./Marker.svg"
                  height={16}
                  width={16}
                  className="mr-4 mt-1"
                  alt="maker"
                />
                <div>
                  <h3 className="text-slate-900 font-bold">{item.name}</h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {item.slogan}
                  </h5>
                </div>
              </Link>
            </VerticalTimelineElement>
          </React.Fragment>
        );
      })}
    </VerticalTimeline>
    </div>
  )
}
export default TimeLine