import Image from "next/image";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const OldTimeline = ({ conferences }) => {
  return (
    <VerticalTimeline>
      {conferences.map((item) => {
        return (
          <React.Fragment key={item.name}>
            <VerticalTimelineElement
              className="vertical-timeline-element--content"
              contentStyle={{ background: "#F9FAFB", borderRadius: "8px" }}
              iconStyle={{
                padding: "12px",
                background: "#F9FAFB",
                border: "2px Solid #CDCDCD",
                borderColor: "#F9FAFB",
              }}
              lineColor="#CDCDCD"
              icon={
                <Image src="/storm.svg" height={36} width={36} alt="storm" />
              }
              key={item.name}
              date={item.startDate}
              dateClassName="date"
              visible={true}
            >
              <Link
                href={"/conference/" + item.id}
                className="flex flex-row items-start"
              >
                <Image
                  src="./Marker.svg"
                  height={16}
                  width={16}
                  className="mr-4 mt-1"
                  alt="maker"
                />
                <div>
                  <h3 className="text-slate-900 font-bold">{item.name}</h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {item.slogan}
                  </h5>
                </div>
              </Link>
            </VerticalTimelineElement>
          </React.Fragment>
        );
      })}
    </VerticalTimeline>
  );
};

export default OldTimeline;
