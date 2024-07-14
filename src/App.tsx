import "./App.css";
import Button from "./components/Button";
import Textfield from "./components/Textfield";

function App() {
  return (
    <>
      <Button
        backgroundColor=""
        buttonClass=""
        iconClass=""
        label="HELLO WORLD!"
        onClickFunction={() => {}}
      />

      <br></br>

      <Textfield
        placeholder="type something here"
        minLength={10}
        maxLength={20}
        size={10}
      />
    </>
  );
}

export default App;
