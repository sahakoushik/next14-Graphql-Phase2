import React from 'react';
import { Sponsor as SponsorType } from '../../interfaces/interfaces';
import Image from 'next/image';
interface SponsorProps {
    sponsor: SponsorType;
}
  
const Sponsor: React.FC<SponsorProps> = ({ sponsor }) => (
    <div className="flex flex-row bg-white items-center my-6 rounded">
        <Image
            className="p-4 rounded-lg"
            src={sponsor.image.url}
            width={140}
            height={140}
            alt="img"
        />
        <div className="flex flex-col p-4">
            <div className="text-xl font-bold mb-5">{sponsor.name}</div>
            <div>{sponsor.about}</div>
        </div>
    </div>
);

export default Sponsor