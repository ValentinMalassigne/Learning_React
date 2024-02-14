/**
 * Simple hook qui permet de changer le state d'un bool
 * @param {boolean} initial 
 */
export function useToggle (initial = false) {
	const [state, setState] = useState(initial)
	const toggle = () => setState(v => !v)
	return [state, toggle]
}