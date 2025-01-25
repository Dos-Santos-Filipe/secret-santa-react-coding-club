import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Participant } from "./components/Participant";
import { secretSanta } from "./shuffleFunction";

function App() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [result, setResult] = useState<{ giver: string; receiver: string }[]>(
    []
  );

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

  const resetList = () => {
    setParticipants([]);
  };

  const secretSantaGame = () => {
    if (participants.length >= 4 && participants.length % 2 === 0) {
      setResult(secretSanta(participants));
    } else {
      alert("Not enough participants");
    }
  };

  return (
    <>
      <h1>Secret santa</h1>

      {/* Component to add participants */}

      <Participant onClick={addParticipant} />

      <div>
        <div>
          <h1>List of participants</h1>
          <ul>
            {participants.map((participant): JSX.Element => {
              return (
                <li key={participant} className="participant">
                  <Button onClick={() => removeParticipant(participant)}>
                    X
                  </Button>
                  <p>{participant}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <Button onClick={secretSantaGame}>Draw</Button>
          <Button onClick={resetList}>Reset</Button>
        </div>

        <div>
          <h1>Final List</h1>
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
    </>
  );
}

export default App;
