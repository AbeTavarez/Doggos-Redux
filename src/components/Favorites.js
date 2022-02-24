import { connect } from "react-redux";

const Favorites = ({ favoriteDoggos }) => {
  return (
    <div>
      <h1>Favorites Page</h1>
      <div>
        {favoriteDoggos.length > 0 ? (
          favoriteDoggos.map((dog) => <img src={dog} alt="dog photo" />)
        ) : (
          <h3>No Doggos</h3>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteDoggos: state.favorites,
});

export default connect(mapStateToProps, {})(Favorites);
