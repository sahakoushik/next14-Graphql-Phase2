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