import { useState } from 'react'
import {} from 'react'

function App() {

  const [firstName, setFirstName] = useState('John doe')
  
  const handleChange = (e) => {
    setFirstName(e.target.value)
  }

  const resetValue = () => {
    setFirstName('')
  }

  const handleSubmit = (e) => {
    e.preventDefault() /* empêche la soumission du form et pouvoir console.log */
    console.log(new FormData(e.target))
  }

  const [checked, setChecked] = useState(true)
  const toggleCheck = () => {
    setChecked(!checked)
  }

  return <>
    {/* On fait un champ dit "contrôlé" car c'est react qui le gère
        PB : A chaque input dans le champ on fait un rendu

        Important un champ contrôlé doit toujours avoir une value != undifined.
        Si un champ n'a pas de value alors il sera considéré comme non contrôlé,
        React n'autorise pas de passer d'un type de champ à l'autre
    */}
    <form>
    <input type="text" name="firstname" value={firstName} onChange={handleChange}></input>
    {firstName}
    {/* Important de spécifié type="button" sinon il envoie le formulaire et on re rend le composant
      ce qui a pour effet de re remplir le champ avec John Doe :(
    */}
    <button onClick={resetValue} type='button'>Reset Input</button>
    </form>
    {/* exemple d'un champ non controllé donc plus légé */}
    <form onSubmit={handleSubmit}>
      <input type='text' name='firstname' defaultValue="default"/>
      <button>Envoyer</button>
    </form>

    {/* Exemple d'une checkbox*/}
    <input type="checkbox" checked={checked} onChange={toggleCheck}/>
  </>
}

export default App
