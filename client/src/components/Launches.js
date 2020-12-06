import React from 'react'
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'
import Loader from '../components/Loader'

const LAUNCHES_RATES = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {

    const { loading, error, data } = useQuery(LAUNCHES_RATES);

    return(
        <>
            <MissionKey />
            { loading ? <Loader /> : error ? "ERROR" : 
                data.launches.map((launch) => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                ))
            }
        </>
    )
}

export default Launches