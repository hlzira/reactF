import Button from '../button/button'
import Image from '/assets/img/product.png'
import {Link} from 'react-router-dom'
import '../../assets/css/style.css'
import Modal from 'react-modal'
import CreatePage from '../../pages/CreatePage/CreatePage'
import { useState } from 'react'

export default function Card ({name, price, id, ost, cat}) {
    const [modalIsOpen,setModalIsOpen] = useState(false)

    function showModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }
    
    return(
        <div className="catalog-product">
            <img src={Image} alt="" className="catalog-product-img"/>
            <p className="catalog-product-name">{name}</p>
            <p className="catalog-product-price">{price} руб</p>
            <p className="catalog-product-ost">Остаток: {ost} кол-во</p>
            <p className="catalog-product-category">Категория: {cat}</p>
            {/* <Button title="Купить" /> */}

            
            {ost ?  <button className='catalog-product-btn' onClick={showModal}>В корзину</button> :  <button className='catalog-product-btn'>Заказать</button>}
            <Modal isOpen={modalIsOpen}>
                <div className="container">
                    <CreatePage setMoalIsOpen={setModalIsOpen}/>
                    <button className='catalog-product-btn' onClick={closeModal}>Закрыть</button>
                </div>
            </Modal>


            <Link className='link' to={`${id}`}>Подробнее</Link>
        </div>
    ); 
}