import { connect } from "react-redux";
import { addFavorite } from "../actions/actions";

const Doggos = ({ dog, favorite }) => {
  // Handles the add to Favorite button
  const handleFavorite = (e) => {
    // we pass the id we set on each button of each photo
    // the id value is the dog we import at the top
    addFavorite(e.target.id);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        <img src={dog} style={styles.img} />
      </div>
      <div style={styles.btn}>
        <button id={dog} onClick={handleFavorite}>
          {favorite ? "Remove from favorite" : "Add to Favorite"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: "10px",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "400px",
    height: "300px",
  },
  btn: {
    textAlign: "center",
    paddingTop: '5px'
  },
};

export default connect(null, {})(Doggos);
