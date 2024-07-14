import "./App.css";
import Button from "./components/Button";
import Textfield from "./components/Textfield";
import "./styles/Button.css";

function App() {
  return (
    <>
      <Button
        backgroundColor=""
        iconClass=""
        label="HELLO WORLD!"
        clickHandler={() => {}}
        size={"small"}
      />

      <br></br>

      <Textfield
        placeholder="type something here"
        minLength={10}
        maxLength={20}
        size={"10"}
      />
    </>
  );
}

export default App;
