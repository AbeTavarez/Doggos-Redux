const Doggos = ({ dog, favorite }) => {
  return (
    <div>
      <h1>Doggos</h1>
      <div style={styles.container}>
        <img src={dog} style={styles.img} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "400px",
    height: "300px",
  },
};

export default Doggos;
