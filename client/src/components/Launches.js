import React from 'react'
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem'

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
            { console.log('data = ', data) }
            { loading ? "Loading" : error ? "ERROR" : 
                data.launches.map((launch) => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                ))
            }
        </>
    )
}

export default Launches


// const Launches = () => {
//     const { loading, error, data } = useQuery(LAUNCHES_RATES);

//     if (loading) return <p>Loading...</p>;
//     if (error) return console.log(error);

//     return data.launches.map(({ flight_number, mission_name, launch_date_local, launch_success }) => (
//         <div key={flight_number}>
//             <p>
//                 { mission_name }
//             </p>
//         </div>
//     ));
// }