import React from 'react';
import { Schedule as ScheduleType } from '../../interfaces/interfaces';

interface ScheduleProps {
    schedule: ScheduleType;
}
  
const Schedule: React.FC<ScheduleProps> = ({ schedule }) => (
    <div className="flex flex-col bg-white px-10 py-6 my-6 rounded">
        <div className="text-xl font-bold">{schedule.day}</div>
        {schedule.intervals.map((interval) => (
            interval.sessions.map((session) => (
            <div key={session.title} className="py-2">
                <div className="text-[#0A142F]">
                Duration : {session.begin} - {session.end}
                </div>
                <ul className="list-disc pl-8">
                <li className="text-[#0A142F]">{session.title}</li>
                </ul>
            </div>
            ))
        ))}
    </div>
);

export default Schedule