export function useIncrement (initialValue = 0) {
	const [state, setState] = useState(initialValue)
	return [
		state,
		() => setState(v => v+1),
		() => setState(v => v-1),
	]
}

export function useIncrementObject ({base = 0, max = Infinity, min = -Infinity}) {
	const [state, setState] = useState(base)
	/*
	L'utilisation de callback permet de mieux imiter le comportement d'un hook. En effet
	les fonctions setters retournees ne changent jamais
	Dans notre cas elles peuvent changer si max et min changent
	*/
	return {
		count: state,
		increment: useCallBack (() => setState(v => v < max ? v+1 : v), [max]),
		decrement: useCallBack (() => setState(v => v > min ? v-1 : v), [min]),
	}
}