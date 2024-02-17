import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { memo } from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'
import { useToggle } from './hooks/useToggle'
import { useIncrement } from './hooks/useIncrement'

function App() {

	const [name, setName] = useState('')
	const nameRef = useRef(name)
	nameRef.current = name;

	const handleClick = () => {
		console.log('Hello')
	}

	const handleClickMemo = useMemo(() => {
		return () => {
			console.log('Hello')
		}
	}, [])

	/*
	useCallback permet d'avoir une syntax plus simple que useMemo quand on memo une fonction
	On peut y specifier des dependances comme a useMemo
	
	Voir dans le hook useIncrement une bonne utilisation du useCallback
	
	Pour utiliser la valeur de name dans notre callback on pourrait lui passer name en dependance
	Cependant la fonction serait modifie a chaque modif de name, on perdera l'utilite du callback
	On passe donc par une ref qui ne change jamais, mais dont le .current peut etre modifier
	*/
	const handleClickCallback = useCallback (() => {
		console.log(nameRef.current)
	}, [])


	return <div className="container my-2 vstack gap-2">
		<div>
			<Input label="Prenom" onChange={setName} value={name}/>
			<div>
				{name.toUpperCase()}
			</div>
		</div>
		<InfoMemo onClick={handleClickMemo}/>
	</div>
}

/*
Quand on memoise une fonction elle n'est pas re executer si on l'appelle avec les meme parametres

Dans l'exemple on l'on passe la fonction handleClick on forcera un rendu du memo a chaque rendu
Car a chaque rendu handleClick sera re generee
Meme probleme si on definie un objet dans le composant qui se fait re render

C'est la que le useMemo intervient, par exemple en pasant handleClickMemo on s'assure
qu'il n'y aura pas de re render inutile de InfoMemo
*/
const InfoMemo = memo (function Info({onClick}) {
	console.log('Info', 'render')
	waitSync(500)
	return <div className="alert alert-info">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam commodi nostrum quis.
	</div>

})

export default App
