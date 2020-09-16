import React, { useState } from 'react'
import Korisnik from './Korisnik'

const Pretraga = ( {users, setUsers } ) => {
    const [filter,setFilter] = useState('')
   
    // let tmp = [...users]
    let filtrirano = users.filter(user => 
        user.first_name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <>
            <input placeholder="Pretraga" onChange={(e)=> setFilter(e.target.value)}/>
            {filtrirano.map(el=> 
            <Korisnik key={el.id} user={el} users={users} setUsers={setUsers}/>
            )}
        </>
    )
}

export default Pretraga