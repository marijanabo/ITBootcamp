import React, {useEffect, useState} from 'react'
import { getLaunchesByYear } from '../service'

const Select = ({setLaunches}) => {
    
    const [value, setValue] = useState(0)
   
    const options = () => {
        let years = []

        for (let i = 2006; i < 2021; i++){
            years.push(i)
         }

         return(
            <>
                <option disabled="disabled" default={true}>Choose a year</option>
                {years.map(year => <option key={year} value={year}>{year}</option>)}
            </>
         )
    }
   
    useEffect(()=>{
        getLaunchesByYear(value).then(res => {
            setLaunches(res.data)
        })
    },[value])

    return (
        <select className="select-launch-year" value={value} onChange={(e) => setValue(e.target.value)}>
            {options()}
        </select>
    )

}

export default Select