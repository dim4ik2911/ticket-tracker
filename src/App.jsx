import logo from "./logo.svg";
import "./App.css";
import team from "./Assets/data.js";
import Card from "./components/Card";
import styles from "./App.module.scss";

function App() {
  const getTeamMember = (member) => {
    return <Card member={member}></Card>;
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}> Ticket Tracker</h1>
      <div className={styles.cards}>{team.map(getTeamMember)}</div>
    </div>
  );
}

export default App;
