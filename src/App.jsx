import { Home } from "./components/Home";
import "./index.css";

function App() {
  let timestamp = 1669388223;
  var date = new Date(timestamp * 1000);

  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();

  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  console.log(formattedTime);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
