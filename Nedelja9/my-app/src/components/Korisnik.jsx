import React from 'react'

const Korisnik = ({ users, user, setUsers }) => {

    const deleteUser = (id) => {
        let tmp = [...users]
        let index = tmp.findIndex(el => el.id === id)
        tmp.splice(index,1)
        setUsers(tmp)
    }

    return(
        <>
            <p>Ime i prezime korisnika: {user.first_name} {user.last_name}</p>
            <button onClick={()=>deleteUser(user.id)}>X</button>
        </>
    )
}

export default Korisnik