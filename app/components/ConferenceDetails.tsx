"use Client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Loading from '../conference/[id]/loading';
import Content from './conferenceDetails/Content';
import { ConferenceDetailsProps,Type } from '../interfaces/interfaces';
// export interface ConferenceDetailsProps {
//     conferenceDetails: {
//       name: string;
//       slogan: string;
//       schedules?: Schedule[];
//       organizers?: Organizer[];
//       sponsors?: Sponsor[];
//       allSpeakers?: Speaker[];
//     }
// }
// interface Type {
//   id: number;
//   name: string;
//   value: string;
// }
// export interface Schedule {
//   day: string;
//   intervals: Interval[];
// }

// interface Interval {
//   sessions: Session[];
// }

// interface Session {
//   begin: string;
//   end: string;
//   title: string;
// }

// export interface Organizer {
//   name: string;
//   image: {
//     url: string;
//   };
//   about: string;
// }

// export interface Sponsor {
//   name: string;
//   image: {
//     url: string;
//   };
//   about: string;
// }

// export interface Speaker {
//   name: string;
//   image: {
//     url: string;
//   };
//   social: {
//     twitter: string;
//     linkedin: string;
//     dribble: string;
//     github: string;
//   };
//   about: string;
// }

const ConferenceDetails: React.FC<ConferenceDetailsProps> = ({ conferenceDetails }) =>{
  const [type, setType] = useState<Type[]>([
    { id: 1, name: 'Schedules', value: 'schedules' },
    { id: 2, name: 'Organizers', value: 'organizers' },
    { id: 3, name: 'Speakers', value: 'allSpeakers' },
    { id: 4, name: 'Sponsors', value: 'sponsors' },
  ]);

  const dragType = useRef<number>(0);
  const draggedOverType = useRef<number>(0);
  const [selected, setSelected] = useState<string>('');


  const handleSort = () => {
    const typeClone = [...type];
    const temp = typeClone[dragType.current];
    typeClone[dragType.current] = typeClone[draggedOverType.current];
    typeClone[draggedOverType.current] = temp;
    setType(typeClone);
  };

  return (
    <>
      {/* {console.log('cd', conferenceDetails)} */}
      <div className="-mt-24 py-48 px-6 md:px-32 bg-white">
        {conferenceDetails ? (
          <>
            <div className="text-[48px] font-bold">{conferenceDetails.name}</div>
            <div className="text-[20px] text-[#0a142fd9]">{conferenceDetails.slogan}</div>

            <div className="flex flex-col lg:flex-row gap-12 pt-16">
              <div>
                {type.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setSelected(item.value)}
                    className={`w-100 lg:w-[285px] xl:w-[365px] mb-4 cursor-pointer flex items-center h-[72px] rounded-lg border ${
                      selected === item.value && 'bg-[#FFC93E]'
                    }`}
                  >
                    <div className="rounded ml-4 mr-8 bg-[#FFFCF6] size-[56px] flex justify-center items-center">
                      <Image
                        draggable
                        onDragStart={() => (dragType.current = index)}
                        onDragEnter={() => (draggedOverType.current = index)}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                        src="/Vector.svg"
                        height={25}
                        width={23}
                        alt="vector"
                      />
                    </div>
                    <div
                      className={`text-center font-bold text-[#0A142F] ${
                        selected === item.value && 'text-white'
                      }`}
                    >
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>

              <Content selected={selected} conferenceDetails={conferenceDetails}/>
            </div>
          </>
        ) : (
          <div className="h-screen">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
};

export default ConferenceDetails;