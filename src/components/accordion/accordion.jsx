import {useState} from 'react'
import "../../assets/css/style.css";

export default function accordion ({title,content}) {
    const [isActive,setIsActive] = useState(false)

    return(
        <>
            <div className="accordion_item">
                <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive &&
                    <div className="accordion_content">{content}</div>
                }
            </div>

        </>
    )
}