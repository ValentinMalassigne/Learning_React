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

 return <div>
	Compteur {count}
	<button onClick={increment}>Incrementer</button>
	<button onClick={decrement}>Decrementer</button>
 </div>
}

export default App
