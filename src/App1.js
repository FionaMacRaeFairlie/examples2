import "./App.css";

import FootballTeamList from "./components/FootballTeamList";
import { people } from "./data/data";
import Listexample from "./components/Listcomponent";
import Styledpage from "./components/Styledhomepage";

export default function Example() {
  return (
    <div>
      <Styledpage />
      <Listexample />
      <FootballTeamList teams={people} />
    </div>
  );
}
