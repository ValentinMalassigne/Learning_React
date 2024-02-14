import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'
import { useToggle } from './hooks/useToggle'
import { useIncrement } from './hooks/useIncrement'


function App() {

	const {count, increment, decrement} = useIncrement({
		base: 0,
		max: 10,
		min: 0,
	})

	const [name, setName] = useState('')


	useDocumentTitle(name ? 'Editer ${name}' : null)

 return <div>
	<Input value={name} onChange={setName} label="Nom"/>
	Compteur {count}
	<button onClick={increment}>Incrementer</button>
	<button onClick={decrement}>Decrementer</button>
 </div>
}

export default App
