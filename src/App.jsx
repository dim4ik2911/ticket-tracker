import logo from "./logo.svg";
import "./App.css";
import team from "./Assets/data.js";
import Card from "./components/Card";

function App() {
  const getTeamMember = team.map((member) => {
    return member.id;
  });
  return (
    <div className="App">
      <Card member={getTeamMember}></Card>
    </div>
  );
}

export default App;
