import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  console.log("Tweet props", props);

  return (
    <div className="tweet">
      {/* aqui estaba la image que está en ProfileImage, y la traemos de vuelta como un componente */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp}/>
        </div>
        <Message message={props.tweet.message} />

        <div className="actions">
          <Actions />
        </div>

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
