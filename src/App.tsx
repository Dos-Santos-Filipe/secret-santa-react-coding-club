import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Participant } from "./components/Participant";

function App() {
  const [participants, setParticipants] = useState<string[]>([]);

  useEffect(() => {
    console.log(participants);
  }, [participants]);

  const addParticipant = (newParticipant: string) => {
    if (participants.includes(newParticipant)) return;

    setParticipants([...participants, newParticipant]);
  };

  const removeParticipant = (participant: string) => {
    setParticipants(participants.filter(item => item !== participant));
  };

  const resetList = () => {
    setParticipants([]);
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
                  <Button onClick={() => removeParticipant(participant)}>X</Button>
                  <p>{participant}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <button>Draw</button>
          <Button onClick={resetList}>Reset</Button>
        </div>

        <div>
          <h1>Final List</h1>
          <ul>
            <li>
              <div>
                <button>X</button>
                <p>Giver: Reciver</p>
              </div>
            </li>
            <li>
              <div>
                <button>X</button>
                <p>Giver: Reciver</p>
              </div>
            </li>
            <li>
              <div>
                <button>X</button>
                <p>Giver: Reciver</p>
              </div>
            </li>
            <li>
              <div>
                <button>X</button>
                <p>Giver: Reciver</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
