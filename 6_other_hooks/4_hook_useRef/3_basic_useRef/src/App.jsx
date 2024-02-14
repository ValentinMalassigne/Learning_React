import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'
import { useMemo } from 'react'

function App() {

	const ref = useRef(null)

	/*
	Si on branche une ref a un element html que l'on supprime via du code
	alors ref sera egale a null.
	Il vaut mieux mettre des conditios pour verifier le contenu de ref avant
	d'applique de la logique dessu
	*/

return <div>
		<Input ref={ref} label="Prefix"/>
	</div>
}



export default App
