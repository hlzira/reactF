import logotype from '/assets/img/logo_light.png'
import {Link} from 'react-router-dom'

export default function header() {
  return (
    <header>
        <div className="container">
            <div className="header-items">
                <div className="header-item">
                    <img src={logotype} alt="" className="header-logo"/>
                </div>
                <div className="header-menu">
                    <Link to="/" className="header-link">Главная - Аккордеон</Link>
                    <Link to="/about" className="header-link">Слайдер</Link>
                    <Link to="https://github.com/hlzira/reactFull/tree/main/ract2" className="header-link">GitHub</Link>
                    <Link to="/catalog" className="header-link">Каталог</Link>
                    {/* <Link to="/UsersPage" className="header-link">Пользователи</Link> */}
                    {/* <Link to="/CreatePage" className="header-link">Добавление</Link> */}
                </div>
                <div className="header-buttons">
                    <Link to="" className="header-btn-auth">Вход</Link>
                    <Link to="" className="header-btn-reg">Регистрация</Link>
                </div>
            </div>
        </div>
    </header>
  );
}
