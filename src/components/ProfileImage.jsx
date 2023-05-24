function ProfileImage (props){
    return (
        <div><img
        src={props.image} // a traves de propos de ProfileImage, accedo la imagen
        className="profile"
        alt="profile"
      />
        </div>
    )
}

export default ProfileImage 