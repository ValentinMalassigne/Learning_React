import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'
import { useMemo } from 'react'

function App() {

	const ref = useRef(null)

/* 
	Dans l'exemple on on met onClick={() => ref.current = "hello"} sur la div Lorem
	On observe que l'on a modifie current sans faire de re rendu.

	Quand on met <div ref={ref}>, on observe qu'il y sauvegarde la div

	Le useRef est utile pour crer un objet qui a une clef courante que l'on peut attacher a un composant (ou element HTML ?). Il stockera dans la clef courante l'element HTML.
	On pourra faire reference a la clef dans un useEffect par exemple
*/

	useEffect(() => {
		console.log(ref.current.offsetHeight)
	}, []);
/*
	Cela nous donne la hauteur de la div
	il est inutile de mettre la ref en dependance car la ref ne change pas pendant la duree de vie du composant
*/



return <div ref={ref}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis expedita itaque. Culpa, eaque accusamus. Esse explicabo provident, necessitatibus, error cupiditate, autem laborum hic obcaecati tempore quas harum voluptatem velit.
	</div>
}



export default App
