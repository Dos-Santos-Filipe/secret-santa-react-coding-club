import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Participant } from "./components/Participant";
import { secretSanta } from "./shuffleFunction";

function App() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [result, setResult] = useState<{ giver: string; receiver: string }[]>(
    []
  );
  const [edit, setEdit] = useState<string>("");

  useEffect(() => {
    console.log(participants);
  }, [participants]);

  const addParticipant = (newParticipant: string) => {
    if (participants.includes(newParticipant)) return;

    setParticipants([...participants, newParticipant]);
  };

  const removeParticipant = (participant: string) => {
    setParticipants(participants.filter((item) => item !== participant));
  };

  const editParticipant = (participant: string) => {
    const editedParticipant = prompt("Edit participant") ?? "";
    if (editedParticipant === "") return;

    setParticipants(
      participants.map((item) =>
        item === participant ? editedParticipant : item
      )
    );
  };

  const resetList = () => {
    setParticipants([]);
    setResult([]);
  };

  const secretSantaGame = () => {
    if (participants.length >= 3) {
      setResult(secretSanta(participants));
    } else {
      alert("Not enough participants");
    }
  };

  return (
    <div className="app">
      <h1>Secret santa</h1>

      <Participant onClick={addParticipant} />

      <div className="listsContainer">
        <div>
          <h2>List of participants</h2>
          <ul>
            {participants.map((participant): JSX.Element => {
              return (
                <li key={participant} className="participant">
                  <Button
                    className="removeBtn"
                    onClick={() => removeParticipant(participant)}
                  >
                    X
                  </Button>
                  <p>{participant}</p>
                  <Button
                    className="editBtn"
                    onClick={() => editParticipant(participant)}
                  >
                    Edit
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2>Final List</h2>
          <ul>
            {result.map(({ giver, receiver }) => {
              return (
                <li>
                  <div>
                    <p>
                      <strong>{giver}</strong> gives to{" "}
                      <strong>{receiver}</strong>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mainBtns">
        <Button onClick={secretSantaGame}>Draw</Button>
        <Button onClick={resetList}>Reset</Button>
      </div>
    </div>
  );
}

export default App;
