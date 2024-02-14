import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'

/**
 * Simple hook qui permet de changer le state d'un bool
 * @param {boolean} initial 
 */
function useToggle (initial = false) {
	const [state, setState] = useState(initial)
	const toggle = () => setState(v => !v)
	return [state, toggle]
}

function App() {

	const [checked, toggleCheck] = useToggle()

 return <div>
	<input type="checkbox" checked={checked} onChange={toggleCheck}/>
	{checked && 'Je suis coche'}
 </div>
}

export default App
