import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'

function App() {
  const [showInput, setShowInput] = useState(true)

  return <div className='container my-3 stack'>
    <Checkbox
      checked={showInput}
      onChange={setShowInput}
      id="titleshow"
      label="Afficher le champs titre"
      />
      {showInput && <EditTitle/>}
      <div style={{height: '300vh'}}/>
  </div>
 
}

function EditTitle () {
  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')
  const [y, setY] = useState(0)

  useEffect(() => {
    document.title = title
  }, [title])

  /*
  On pourrait avoir le même effet avec
  document.title = title

  Mais ce code serait executer à chaque rendu du composant hors ce n'est pas optimisé
  Avec le useEffet on s'assure que le code ne s'execute uniquement quand title est modifié
  */

  useEffect(() => {
      console.log("mounted")
      window.addEventListener('scroll', (e) => {
        setY(window.scrollY)
        console.log("scroll")
      })
    },
    [],)
  /*
    Ici on crée un effet de bore la première fois que le composant est monté
    cad on appelle une fonction la première fois que le composant apparait
  */

  useEffect(() => {
    console.log("mounted2")
    const handler = (e) => {
        console.log("scroll2")
    }
    window.addEventListener('scroll', handler)
    return () => {window.removeEventListener("scroll", handler)}
   },
   [],)
  /*
   A la fin du useEffect on peut retourner une fonction decallback qui sera appelée en cas de changement de dépendance.
   Dans cet exemple on vient nettoyer les effets de bore mis en place.
   Car sinon meme lorsque le composant n'est pas affiché ce code serait exécuté
  */

   useEffect(() => {
    const originalTitle = document.title
    return () => {
      document.title = originalTitle
    }
   }, [])
   /*
   Si on ajoute une fonction de callback a un useEffect qui a une dépendance alors le callback du précédent appel du useEffect sera appelé avant le code du useEffect lorsque la dépendance change.
   */

   /*
    Mise en garde : Les useEffect sont à utilisé pour mettre en place des effets de bord, ou modifier quelque chose qui ne pourrait pas l'être depuis le composant
    Avoir des setter au premier niveau du useEffect est signe d'une mauvaise utilisation du useEffect
    Exemple de mauvaise utilisation :
      useEffect(() => {
    setTitle()
  }, [title])
   */


return <div className='vstack gap-2'>
    <div>
      Scroll : {y}
    </div>
    <Input
      placeholder="Modifier le titre"
      value={title}
      onChange={setTitle}
    />
    <Input
      placeholder="Prénom"
      value={firstname}
      onChange={setFirstname}
    />
  </div>
}

export default App
