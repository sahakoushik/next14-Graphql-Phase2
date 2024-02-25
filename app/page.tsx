import HeroSection from "./components/common/HeroSection";
import SponsorsList from "./components/Sponsor/SponsorList";
import client from "./graphQL/apolloClient";
import { GET_CONFERENCES } from "./graphQL/queries";
import 'react-vertical-timeline-component/style.min.css';
import TimeLineWrapper from "./components/TimeLine/TimeLineWrapper";

export default async function Page() {
  const {data} = await client.query({query: GET_CONFERENCES});
  
  return (
    <>
      <HeroSection/>
      <TimeLineWrapper conferences={data.conferences}/> 
      <SponsorsList conferenceData={data.conferences}/>
    </>
  )
}