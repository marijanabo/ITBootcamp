import React from 'react'
import Korisnik from './Korisnik'

const ListaKorisnika = ({ users, setUsers }) => {
    return(
        <>
            {users.map(user => <Korisnik key={user.id} user={user} users={users} setUsers={setUsers}/>)}
        </>
    )
}

export default ListaKorisnika