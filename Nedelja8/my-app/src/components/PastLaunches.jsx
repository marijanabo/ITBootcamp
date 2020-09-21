import React from 'react'
import Launch from './Launch'
//import {launchList} from './Select.js'

const PastLaunches = ({launches}) => {
    return (
        <div className='launch-list'>
            {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    )
}

export default PastLaunches