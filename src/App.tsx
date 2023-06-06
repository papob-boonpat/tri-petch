import classes from "./App.module.scss";
import footballer from "./Assets/FootBaller_mobile.png";
import players from "./Assets/Players_mobile.png";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.Athlete}>
        <h1>ATHLETS</h1>
        <div className={classes.FootBallerContainer}>
          <img src={footballer} alt="footballer_image" />
        </div>
        <div className={classes.Feature}></div>
      </div>
      <div className={classes.Players}>
        <h1>PLAYERS</h1>
        <div className={classes.PlayersContainer}>
          <img src={players} alt="players_image" />
        </div>
        <div className={classes.Feature}></div>
      </div>
    </div>
  );
}

export default App;
