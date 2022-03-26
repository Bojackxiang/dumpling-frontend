import { gql } from "@apollo/client";

export const query_getUser = gql`
  query getUsers {
    hello {
      username
    }
  }
`;

export const mutation_hello2 = gql`
  mutation hello2($input: sampleInput!) {
    hello2(input: $input)
  }
`;
