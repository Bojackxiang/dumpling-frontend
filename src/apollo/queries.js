import { gql } from "@apollo/client";

export const query_getUser = gql`
  query getUsers {
    hello {
      username
    }
  }
`;
