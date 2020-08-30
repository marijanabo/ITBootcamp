import {getPastLaunches} from '../service.js'
import {Launch} from './Launch.js'
import {app} from '../index.js'
import { PastLaunches } from './PastLaunches.js'

export let launchList = document.createElement('div')
launchList.className = 'launch-list'

export const Select = () => {

    const select = document.createElement('select')
    select.className = 'select-launch-year'

        const option1 = document.createElement('option')
        option1.value = ''
        option1.textContent = 'Choose a year'
        select.appendChild(option1)

        for(let i = 2006; i <= 2020; i++){
            const option = document.createElement('option')
            option.value = i
            option.textContent = i
            select.appendChild(option)
        }

    PastLaunches()

    select.addEventListener('change', (e) => {
        e.preventDefault()
        launchList.innerHTML = ''
        getPastLaunches().then(res => {
            res.data.forEach(launch => {
                if(select.value == launch.launch_year){
                    launchList.appendChild(Launch(launch))
                    app.appendChild(launchList)
                }
            })
        })
        return launchList
    })

    app.appendChild(select)
}