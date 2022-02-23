import { connect } from "react-redux";
import { fetchDoggos } from "../actions/actions";
import Doggos from "./Doggos";

const DoggosList = ({ isLoading, doggos, error, fetchDoggos }) => {

  const handleClick = (e) => {
    fetchDoggos();
  };
  return (
    <div>
      {isLoading ? <h3>Loading Doggos</h3> : ""}
      {error ? error : ""}
      {doggos.length > 0
        ? doggos.map((dog, idx) => {
            return <Doggos dog={dog} favorite={false} key={idx} />;
          })
        : ""}
      <button onClick={handleClick}>Fetch Doggos</button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  doggos: state.doggosList,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchDoggos })(DoggosList);
