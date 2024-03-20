import { useState } from "react"
import Modal from 'react-modal'
import CreatePage from '../../pages/CreatePage/CreatePage'

export default function Modalka () {
    const [modalIsOpen,setModalIsOpen] = useState(false)

    function showModal() {
        setModalIsOpen(true)
    }
    function closeModal() {
        setModalIsOpen(false)
    }

    return(
        <>
            <button onClick={showModal}>Добавить</button>
            <Modal isOpen={modalIsOpen}>
                <div className=''>
                    <CreatePage setModalIsOpen={setModalIsOpen}/>
                    <button onClick={closeModal}>Закрыть</button>
                </div>
            </Modal>
        </>
    )
}