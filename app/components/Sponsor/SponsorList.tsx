import React, { FC } from 'react';
import Sponsor from './Sponsor';

interface ConferenceData {
  goldSponsors: Sponsor[];
  silverSponsors: Sponsor[];
  bronzeSponsors: Sponsor[];
}

export interface Sponsor {
  name: string;
  image:{
    url: string
  }
}

interface SponsorsListProps {
  conferenceData: ConferenceData[];
}

const SponsorsList: FC<SponsorsListProps> = ({ conferenceData }) => {
  const removeDuplicates = (array: Sponsor[], property: keyof Sponsor): Sponsor[] => {
    let uniqueObjects: { [key: string]: boolean } = {};
    return array.filter((obj) => {
      const key = obj[property] as string; 
      if (!uniqueObjects[key]) {
        uniqueObjects[key] = true;
        return true;
      }
      return false;
    });
  };

  const getSponsors = (
    conferenceData: ConferenceData[],
    sponsorType: keyof ConferenceData,
    property: keyof Sponsor
  ): Sponsor[] => {
    const sponsors = conferenceData.flatMap((conference) => conference[sponsorType]);
    return removeDuplicates(sponsors, property);
  };

  const goldSponsors = getSponsors(conferenceData, 'goldSponsors', 'name');
  const silverSponsors = getSponsors(conferenceData, 'silverSponsors', 'name');
  const bronzeSponsors = getSponsors(conferenceData, 'bronzeSponsors', 'name');

  return (
    <div className='py-[100px] bg-[#F9FAFB] w-full'>
      <div className='font-bold text-[48px] text-center'>Our Sponsor</div>

      <Sponsor title='🥇 Gold Sponsor' sponsorList={goldSponsors} />
      <Sponsor title='🥈 Silver Sponsors' sponsorList={silverSponsors} />
      <Sponsor title='🥉 Bronze Sponsors' sponsorList={bronzeSponsors} />
    </div>
  );
};

export default SponsorsList;