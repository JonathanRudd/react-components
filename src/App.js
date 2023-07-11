import Button from "./Button";
import { GoBell, GoBug, GoGoal  } from "react-icons/go";

function App() {
  const handleClick = () => {
    alert("Hello");
  };
  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoBell />
          Hi
        </Button>
      </div>
      <div>
        <Button danger outline>
        <GoBug />
          it
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          me
        </Button>
      </div>
      <div>
        <Button warning>
        <GoGoal/>
          me
        </Button>
      </div>
      <div>
        <Button secondary outline>

          me
        </Button>
      </div>
    </div>
  );
}

export default App;
