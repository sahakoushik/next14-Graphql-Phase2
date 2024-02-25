import React from 'react';
import { Speaker as SpeakerType } from '../../interfaces/interfaces';
import ImageLink from '../common/ImageLink';
import Image from 'next/image';
interface SpeakerProps {
    speaker: SpeakerType;
}
  
const Speaker: React.FC<SpeakerProps> = ({ speaker }) => (
    <div key={speaker.name} className="flex flex-row bg-white items-center my-6 rounded">
        <Image
            className="p-4 rounded-lg"
            src={speaker.image.url}
            width={140}
            height={140}
            alt="img"
        />
        <div className="p-4 flex-1">
            <div className="flex flex-col lg:flex-row mb-5">
            <div className="text-xl flex-1 font-bold">{speaker.name}</div>
            <div className="flex gap-2">
                <ImageLink link={speaker.social.twitter} icon="twitter"/>
                <ImageLink link={speaker.social.linkedin} icon="linkedin"/>
                <ImageLink link={speaker.social.dribble} icon="dribble"/>
                <ImageLink link={speaker.social.github} icon="github"/>
            </div>
            </div>
            <div>{speaker.about}</div>
        </div>
    </div>
);

export default Speaker