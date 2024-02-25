import React from 'react';
import Image from 'next/image';
import { Organizer as OrganizerType } from '../../interfaces/interfaces';

interface OrganizerProps {
    organizer: OrganizerType;
}
  
const Organizer: React.FC<OrganizerProps> = ({ organizer }) => (
    <div className="flex flex-row bg-white items-center my-6 rounded">
        <Image
            className="p-4 rounded-lg"
            src={organizer.image.url}
            width={140}
            height={140}
            alt="img"
        />
        <div className="flex flex-col p-4">
            <div className="text-xl font-bold mb-5">{organizer.name}</div>
            <div>{organizer.about}</div>
        </div>
    </div>
);

export default Organizer