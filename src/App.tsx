import { Carousel } from "rsuite";
import classes from "./App.module.scss";

function App() {
  const data = {
    athletes: [
      {
        title: "CONNECTION",
        detail:
          "Connect with coaches directly, you can ping coaches to view profile.",
      },
      {
        title: "COLLABORATION",
        detail:
          "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
      },
      {
        title: "GROWTH",
        detail:
          "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
      },
    ],
    players: [
      {
        title: "CONNECTION",
        detail:
          "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
      },
      {
        title: "COLLABORATION",
        detail:
          "Work with recruiter to increase your chances of finding talented athlete.",
      },
      {
        title: "GROWTH",
        detail: "Save your time, recruit proper athlets for your team.",
      },
    ],
  };

  const featureComponent = (
    feature: { title: string; detail: string },
    i: number
  ) => {
    return (
      <div key={feature.title} className={classes.Feature}>
        <div>
          <div className={classes.Bullet}>
            <div>{`0${++i}`}</div>
            <div></div>
          </div>
          <div className={classes.Title}>{feature.title}</div>
        </div>
        <div className={classes.Detail}>{feature.detail}</div>
      </div>
    );
  };
  return (
    <div className={classes.App}>
      <div className={classes.Background}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.Content}>
        <div className={classes.Athlete}>
          <h1>ATHLETS</h1>
          <div className={classes.FootBallerContainer}>
            <div className={classes.Footballer}></div>
          </div>
          <div className={classes.Features}>
            <h1>ATHLETS</h1>
            {data.athletes.map((feature, i) => featureComponent(feature, i))}
          </div>
          <div className={classes.FeaturesMobile}>
            <Carousel>
              {data.athletes.map((feature, i) => featureComponent(feature, i))}
            </Carousel>
          </div>
        </div>
        <div className={classes.Players}>
          <h1>PLAYERS</h1>
          <div className={classes.PlayersContainer}>
            <div className={classes.Player}></div>
          </div>
          <div className={classes.Features}>
            <h1>PLAYERS</h1>
            {data.players.map((feature, i) => featureComponent(feature, i))}
          </div>
          <div className={classes.FeaturesMobile}>
            <Carousel>
              {data.players.map((feature, i) => featureComponent(feature, i))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
