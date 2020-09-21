import axios from 'axios'

export const getCompanyName = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}

export const getPastLaunches = () => {
    return axios.get(`https://api.spacexdata.com/v3/launches/past`)
}

export const getLaunchesByYear = (year) => {
    return axios.get(`https://api.spacexdata.com/v3/launches/?launch_year=${year}`)
}