import {useEffect, useState} from 'react'
import '../../assets/css/style.css'

export default function UsersPage() {
    const [users,setUsers] = useState([])

    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
    }
    useEffect(() => {
        fetchUsers()
    },[])
    return(
        <><br /><br />
        <div className="container">
            <h1>Пользователи</h1><br />
            <ul>
                {users.map((user) => {
                    return(
                        <>
                        <li>{user.name}</li>
                        <br />
                        </>
                    )
                })}
            </ul>
        </div>
        </>
    )
}