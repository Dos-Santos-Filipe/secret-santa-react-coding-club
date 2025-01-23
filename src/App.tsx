import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Participant } from "./components/Participant";



function App() {

  const [participants, setParticipants] = useState<string[]>([]);

  useEffect(() => {
    console.log(participants);
  }, [participants]);
  
  const addParticipant = (newParticipant: string) => {
    setParticipants([...participants, newParticipant]);
  }

  return (
    <>
      
      <h1>Secret santa</h1>
      
      {/* Component to add participants */}
      
      <Participant onClick={addParticipant}/>

      <div>
        <div>
          <h1>List of participants</h1>
          <ul>
            <li>
              <div>
                {/* <Button>X</Button> */}
                <p>Participant</p>
              </div>
            </li>
            <li>Participant</li>
            <li>Participant</li>
            <li>Participant</li>
          </ul>
        </div>

        <div>
          <button>Draw</button>
          <button>Reset</button>
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
  )
}

export default App
