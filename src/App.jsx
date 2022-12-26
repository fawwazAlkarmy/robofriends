import { useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./robots";

function App() {
  // states
  const [robotsArr, setRobotsArr] = useState(robots);
  const [searchField, setSearchField] = useState("");
  const filteredRobots = robotsArr.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });
  // functions
  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div className="App tc">
      <h1>robofriends</h1>
      <SearchBox
        searchField={searchField}
        setSearchField={setSearchField}
        onSearchChange={onSearchChange}
      />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
