import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'
import { useMemo } from 'react'

function App() {
	//Un useRef est propre a son composant
	//Si on appel plusieurs fois un composant il n'y aura aucun lien entre eux

	//On peut voir les useRef comme un useMemo sans dependance
  //const prefixRef = useMemo(() => ({current: null}), [])
	const prefixRef = useRef(null)
	const [prefix, setPrefix] = useState('')
	prefixRef.current = prefix;
	/* Ici a chaque rendu on stock le nouveau prefix*/

	/*
	Si on fait un timer de la maniere suivante on aura pas un console.log toute les secondes.
	Car a chaque modification du prefix on aura un appel qui 
	fera un clearInterval on donc reset du timer

	useEffect(() => {
		const timer = setInterval(() => {
			console.log(prefix)
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [prefix]);
	*/
	
	/*
	Dans cette situation on a bien un affichage de prefix chaque seconde. prefixRef ne change jamais donc pas besoins de le mettre en dependance. Cependant on fait une mutation de son current.
	*/
	useEffect(() => {
		const timer = setInterval(() => {
			console.log(prefixRef.current)
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, []);

return <div>
		<Input label="prefix" value={prefix} onChange={setPrefix} />
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis expedita itaque. Culpa, eaque accusamus. Esse explicabo provident, necessitatibus, error cupiditate, autem laborum hic obcaecati tempore quas harum voluptatem velit.
	</div>
}



export default App
