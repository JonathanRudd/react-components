import Button from "../components/Button";
import { GoBell, GoBug, GoGoal  } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    alert("Hello");
  };
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
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

export default ButtonPage;
