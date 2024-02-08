import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'
import { useMemo } from 'react'

function App() {
  const [firstname, setFirstname] = useState('John')
  const [password, setPassword] = useState('MotDePasse')

  /*
  const security = passwordSecurity(password)
  Dans notre cas cet appel de passwordSecurity poserait un problème. Car
  la fonction est lente et son appel bloquerait le rendu de l'entièreté du composant

  On utilise donc useMemo qui permet de ré assigner la même valeur gardée en mémoire.
  Comme pour une useEffect, on peut spécifier une dépendance, ce qui
  déclenchera un callback si la dépendance est modifiée

  Il est inutile d'utilisé un useMemo si appel pas l'opération que l'on veut éviter très souvent. Et ce n'est également pas très utile si l'opération est très rapide.
  */
  const security = useMemo(() => {
    return passwordSecurity(password)
  }, [password])  

  /* Voir dans Input, l'utilsation du hook useId()*/
  return <div className='container my-3 vstack gap-2'>
    <Input 
      label="Nom d'utilisateur"
      value={firstname}
      onChange={setFirstname}  
    />
    <div>
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        />
        Sécurité : {security}
    </div>
  </div>
}

function passwordSecurity (password) {
  
  // Fausse lenteur
  let startTime = performance.now()
  while (performance.now() - startTime < 200){
  }
  

  if (password.length < 3) {
    return 'Faible'
  } else if (password.length < 6) {
    return 'Moyen'
  }
  return 'Fort';
}

export default App
