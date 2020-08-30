import {getCompanyName} from '../service.js'

export const Header = () => {
    const header = document.createElement('header')
    header.className = 'company-name'
    const p = document.createElement('p')
    getCompanyName().then(res => {
        p.textContent = res.data.name
    })
    header.appendChild(p)

    return header
}