import { useEffect, useState } from 'react'
import {Input} from './components/forms/Input'

function App() {

  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)

  const handleChange = (v) => {
    /*
    Ici on modifie à la fois duration et seconds left quand un nouvel input est rentré
    React comprends qu'il peut regrouper ces deux setters en un seul rendu
    On évite donc un double rendu pour rien
    */
    setDuration(v)
    setSecondsLeft(v)
  }

  useEffect(() => {
    /*
    setSecondsLeft(duration)
    Si on utilisait cette méthode pour mettre a jour le décompte quand on change
    sa valeur dans l'input on aurait un double rendu, une fois par setDuration et une fois 
    ici
    Donc on va plutôt passer handleChange a l'input
    */
    const timer = setInterval(() => {
      setSecondsLeft(v => {
        if (v <= 1) {
          clearInterval(timer)
          return 0
        }
        return v - 1
      })
    }, 1000)
    /* Si on ne clear pas l'intervalle alors ils vont s'additioner à chaque modifcation de duration
        Donc on décompterer plus que 1 par 1
    */
    return () => {
      clearInterval(timer)
    }
  }, [duration])

  return <div className='vstack gap-2'>
    <Input
      value={duration}
      /*onChange={setDuration} voir mauvaise pratique du useEffect*/
      onChange={handleChange}
      placeholder="Timer..."
      />
    <p>Décompte : {secondsLeft}</p>
  </div>
 
}

export default App
