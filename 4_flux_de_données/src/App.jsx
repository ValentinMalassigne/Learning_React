import { useState } from 'react'
import {} from 'react'

function App() {

  const [isTermAccepted, setIsTermAccepted] = useState(false)

  return <form>
    <CGUCheckBox checked={isTermAccepted} onCheck={setIsTermAccepted}/>
    <button disabled={!isTermAccepted}>Envoyer</button>
  </form>
}

/*
Ici on met en place un callback afin de faire passer l'information de l'enfant vers 
le parent.
*/

function CGUCheckBox ({checked, onCheck}) {
  return <div>
    <label>
      <input type="checkbox" onChange={(e) => onCheck(e.target.checked)} checked={checked}/>
      Accepter les conditions d'utilisation
    </label>
  </div>
}

export default App
