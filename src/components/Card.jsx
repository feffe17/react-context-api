import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ title, description, buttonText, image, tags, link }) {
    return (
        <div className={style.card}>
            <div className={style.topSection}>
                <img src={image} alt={title} className={style.image} />
            </div>
            <div className={style.botSection}>
                <h5 className={style.h5}>{title}</h5>
                <p className={style.p}>{description}</p>
                <div className={style.tags}>
                    {tags.map((tag, index) => (
                        <span key={index} className={`${style.tag} ${style[tag]}`}>{tag}</span>
                    ))}
                </div>
                <Link to={link}>
                    <button className={style.button}>{buttonText}</button>
                </Link>
            </div>
        </div>
    );
}
