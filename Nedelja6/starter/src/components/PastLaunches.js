import {Launch} from './Launch.js'
import { getPastLaunches } from '../service.js'
import {launchList} from './Select.js'
import {app} from '../index.js'

export const PastLaunches = () => {
    // const launchList = document.createElement('div')
    // launchList.className = 'launch-list'
    getPastLaunches().then(res => {
        res.data.filter(launch => launch.launch_year <= 2020).forEach(launch => {
            launchList.appendChild(Launch(launch))
            app.appendChild(launchList)
        })
    })

    return launchList
}