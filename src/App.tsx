
function App() {

  return (
    <>
      
      <h1>Secret santa</h1>
      
      <div>
        <p>Insert a participant</p>
        <input type="text" />
        <button>Add</button>
      </div>

      <div>
        <div>
          <h1>List of participants</h1>
          <ul>
            <li>Participant</li>
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
