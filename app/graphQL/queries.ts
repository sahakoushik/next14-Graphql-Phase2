import { gql } from "@apollo/client";
export const GET_CONFERENCES = gql`
    query GetConferences {
    conferences {
      id
      name
      startDate
      slogan
      goldSponsors {
        name
        image {
          url
        }
      }
      silverSponsors {
        name
        image {
          url
        }
      }
      bronzeSponsors {
        name
        image {
          url
        }
      }
      platformSponsors {
        name
        image {
          url
        }
      }
    }
  }
`

export const GET_CONFERENCE_BY_ID = gql`
  query GetConferenceById($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
      organizers {
        name
        about
        image {
          url
        }
      }
      allSpeakers {
        name
        about
        social {
          twitter
          linkedin
          dribble
          github
        }
        image {
          url
        }
      }
      schedules {
        day
        intervals {
          sessions {
            begin
            end
            title
          }
        }
      }
      sponsors {
        name
        about
        image {
          url
        }
      }
    }
  }
`;