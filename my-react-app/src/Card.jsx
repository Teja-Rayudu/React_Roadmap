
import profilePhoto from "./assets/Teja_Rayudu_photo.jpeg";

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePhoto} alt="profile picture"></img>
            <h1 className="card-title">Teja Rayudu</h1>
            <p className="card-text">A passionate student trying to get into tech</p>
        </div>
    );
}

export default Card;