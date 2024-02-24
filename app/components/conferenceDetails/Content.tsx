import React from 'react'
import { ConferenceDetailsProps } from '../../interfaces/interfaces';
import Schedules from './Schedules';
import Organizer from './Organizers';
import Sponsor from './Sponsors';
import Speaker from './Speakers';

interface ContentProps {
    selected: string;
    conferenceDetails: ConferenceDetailsProps['conferenceDetails'];
}

const Content : React.FC<ContentProps> = ({selected, conferenceDetails}) => {
  return (
    <div className="flex-1 bg-[#F9FAFB] p-[52px]">
                {/* Schedules     */}
                {selected === 'schedules' &&
                  conferenceDetails?.schedules?.map((schedule) => {
                    return (
                        <Schedules key={schedule.day} schedule={schedule}/>
                    );
                  })}

                {/* organizers */}
                {selected === 'organizers' &&
                  conferenceDetails?.organizers?.map((organizer) => {
                    return (
                        <Organizer key={organizer.name} organizer={organizer}/>
                    );
                  })}

                {/* sponsors  */}
                {selected === 'sponsors' &&
                  conferenceDetails?.sponsors?.map((sponsor) => {
                    return (
                      <Sponsor key={sponsor.name} sponsor={sponsor}/>
                    );
                  })}

                {/* allSpeakers */}
                {selected === 'allSpeakers' &&
                  conferenceDetails?.allSpeakers?.map((speaker) => {
                    return (
                      <Speaker key={speaker.name} speaker={speaker}/>
                    );
                  })}
              </div>
  )
}

export default Content