export interface ConferenceDetailsProps {
    conferenceDetails: {
      name: string;
      slogan: string;
      schedules?: Schedule[];
      organizers?: Organizer[];
      sponsors?: Sponsor[];
      allSpeakers?: Speaker[];
    }
}
export interface Type {
  id: number;
  name: string;
  value: string;
}
export interface Schedule {
  day: string;
  intervals: Interval[];
}

export interface Interval {
  sessions: Session[];
}

export interface Session {
  begin: string;
  end: string;
  title: string;
}

export interface Organizer {
  name: string;
  image: {
    url: string;
  };
  about: string;
}

export interface Sponsor {
  name: string;
  image: {
    url: string;
  };
  about: string;
}

export interface Speaker {
  name: string;
  image: {
    url: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    dribble: string;
    github: string;
  };
  about: string;
}