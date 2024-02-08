import { Fragment, useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
    /*si on écrit encore 
    setCount(count + 1);
    la valeur de count ne sera pas incrémenté plusieurs fois
    car count fera référence au même état précédent
    */
   /* Cependant la syntax suivante permet de modifier directement l'état actuel
   donc l'écrire plusieurs cummulera son effet
   */
   setCount((count) => count + 1);
  }

  /* On peut aussi le faire avec des objets plus complexes*/
  const [person, setPerson] = useState({
      firstName: "John",
      lastName: "Doe",
      age: 18,
    })

  /*
  Les hook useState ne supporte pas les mutations, cad modifier directement une valeur
  d'un objet ou tableau, puis de le set
  On peut utiliser la syntaxe suivante pour créer un nouvel objet en modifiant certaines de ces valeurs
  */
  const incrementAge = () => {
    setPerson({...person, age:person.age + 1})
  }

  /*
  Les hooks doivent être appelé dans le même ordre à chaque rendu. Car React utilise l'ordre d'appel pour se répéré dans l'espace mémoire des hooks.
  Ils ne doivent pas être dans des conditions ou des boucles.
  Chaque rendu doit pouvoir charger tout ses hooks.
  
  L'exemple suivant ferait planté l'app

  if(person.age < 19) {
	  const [count, setCount] = useState(0);
  }
  */



  return <>
    <p> Compteur : {count}</p>
    <button onClick={increment}>Incrémenter</button>
    <p>Age de {person.firstName} : {person.age}</p>
  	<button onClick={incrementAge}>Incrément l'age</button>
  </>
}

export default App
