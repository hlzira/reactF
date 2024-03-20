import {useState} from 'react'
import '../../assets/css/style.css'

export default function CreatePage() {
    const[message,setMessage] = useState()

    function createForm(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:formData
        })
        event.target.reset()
        setMessage('Форма отправлена')
    }
    return(
        <>
        <div className="container"><br /><br />
            <h1 className='dobavlenie_h1'>Добавление</h1><br />
            <form onSubmit={createForm}>
                <label>Title</label><br />
                <input type="text" name="title"/><br /><br />
                <label>Body</label><br />
                <textarea name="body"></textarea><br /><br />
                <button type="submit" className='btn_dob'>Добавить</button><br/><br/>
                {message}
            </form>
        </div>
        
        </>
    )
}