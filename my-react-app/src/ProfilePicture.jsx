import pic from "./assets/Teja_Rayudu_photo.jpeg";

function ProfilePicture() {
  const imageUrl = pic;

  const styles = {
    width: "100px",
    borderRadius: "50px",
  };

  const handleClick = (e) => (e.target.style.display = "none");

  return <img style={styles} src={imageUrl} onClick={(e) => handleClick(e)} />;
}

export default ProfilePicture;
