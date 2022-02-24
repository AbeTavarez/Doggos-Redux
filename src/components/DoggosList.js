import { connect } from "react-redux";
import { fetchDoggos } from "../actions/actions";
import Doggos from "./Doggos";

const DoggosList = ({ isLoading, doggos, error, fetchDoggos }) => {
    console.log(doggos);
  const handleClick = (e) => {
    fetchDoggos();
  };
  return (
    <> 
        {/* Button at the top */}
      <div style={styles.btnContainer}>
        <button onClick={handleClick} style={styles.btn}>Fetch Doggos</button>
      </div>
        {/* Container that holds all doggos */}
      <div style={styles.container}>
        {isLoading ? <h3>Loading Doggos</h3> : ""}
        {error ? error : ""}
        {doggos.length > 0
          ? doggos.map((dog, idx) => {
              return <Doggos dog={dog} favorite={false} key={idx} />;
            })
          : ""}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  doggos: state.doggosList,
  isLoading: state.isLoading,
  error: state.error,
});

const styles = {
  container: {
    display: "flex",
    justifyContent: 'center',
    flexWrap: "wrap",
  },
  btnContainer: {
      textAlign: 'center',
      marginBottom: '25px'
  },
  btn: {
      padding: '8px',
      backgroundColor: 'purple',
      color: '#fff',
      borderRadius: '5%'
  }
};

export default connect(mapStateToProps, { fetchDoggos })(DoggosList);
