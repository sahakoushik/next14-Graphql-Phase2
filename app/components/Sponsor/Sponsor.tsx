import React from 'react';
import Image from 'next/image';
import { Sponsor as SponsorType } from './SponsorList';
export interface SponsorProps {
  sponsorList: SponsorType[];
  title: string;
}

const Sponsor: React.FC<SponsorProps> = ({ sponsorList, title }) => {
  return (
    <div>
      <div className='text-[#667085] text-center my-8'>{title}</div>
      <div className='flex flex-row gap-14 flex-wrap justify-center items-center'>
        {sponsorList.map((item) => (
          <Image
            key={item.name}
            className='h-[32px] md:h-[66px] object-contain'
            src={item.image.url}
            height={66}
            width={200}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;