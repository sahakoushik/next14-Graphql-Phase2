import HeroSection from "./components/HeroSection";
import SponsorsList from "./components/SponsorList";
import TimeLine from "./components/TimeLine";
import client from "./graphQL/apolloClient";
import { GET_CONFERENCES } from "./graphQL/queries";

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
  const {data} = await client.query({query: GET_CONFERENCES});
  // console.log("data", data);
  return (
    <div>
      <HeroSection/>
      <TimeLine conferences={data.conferences}/>
      <SponsorsList conferenceData={data.conferences}/>
    </div>
  )
}