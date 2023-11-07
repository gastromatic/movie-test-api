import { gql, useQuery } from "@apollo/client";

const GET_SERVER_TIME = gql`
  query getServerTime {
    serverTime {
      secondsSince1970
    }
  }
`;

type ServerTime = { date: Date };

export function useServerTime(): ServerTime | null {
  const { data, error } = useQuery(GET_SERVER_TIME);
  console.log(data);
  if (error) {
    throw error;
  }

  return data
    ? { date: new Date(data.serverTime.secondsSince1970 * 1000) }
    : null;
}
