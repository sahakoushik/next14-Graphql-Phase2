import HeroSection from "./components/common/HeroSection";
import SponsorsList from "./components/SponsorList";
import TimeLine from "./components/TimeLine/TimeLine";
import client from "./graphQL/apolloClient";
import { GET_CONFERENCES } from "./graphQL/queries";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from "react-intersection-observer";
import TimeLineWrapper from "./components/TimeLine/TimeLineWrapper";
// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   console.log("getdata", res);
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

export default async function Page() {
  // const { ref, inView } = useInView({ threshold: 0 })
  const {data} = await client.query({query: GET_CONFERENCES});
  // console.log("data", data);
  return (
    <div>
    {/* <div ref={ref}> */}
      {/* <VerticalTimeline>
      {timelineItems.map((item, index) => (
        <VerticalTimelineElement
        visible={inView}
          key={index}
          date={item.date}
          dateClassName="date"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.content}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline> */}
      <HeroSection/>
      <TimeLineWrapper conferences={data.conferences}/> 
      <SponsorsList conferenceData={data.conferences}/>
    </div>
  )
}