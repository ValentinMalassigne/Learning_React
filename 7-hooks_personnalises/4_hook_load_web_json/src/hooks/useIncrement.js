export function useIncrement (initialValue = 0) {
	const [state, setState] = useState(initialValue)
	/*
		On peut aussi declarer les fonctions de notre hooks a la volee
		mais on voit que c'est moins clair
	*/
	return [
		state,
		() => setState(v => v+1),
		() => setState(v => v-1),
	]
}

export function useIncrementObject ({base = 0, max = Infinity, min = -Infinity}) {
	const [state, setState] = useState(base)
	/*
		On peut egalement fonctionner avec des objets quand on commence
		a avoir bcp de variables, ca sera plus pratique qu'un tableau
		on pourra egalement
	*/
	return {
		count: state,
		increment: () => setState(v => v < max ? v+1 : v),
		decrement: () => setState(v => v > min ? v-1 : v),
	}
}