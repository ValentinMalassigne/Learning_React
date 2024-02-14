import { useId, forwardRef } from "react"

/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange 
 */

/*React nous empeche de passer une variable nomme ref a un composant,
Si on le fait on aura une valeur undefined dans le composant enfant
*/

//Si on utilise des refs non definit dans l'appel Input, les refs ne feront rien
//les variables seront undefined, cela ne posera pas de pb a react

// export function Input({placeholder, value, onChange, label, inputRef, wrapperRef, labelRef}) {
//     console.log('input', inputRef)
// 		const id = useId()
//     return <div ref={wrapperRef}>
//         <label ref={labelRef} className="form-label" htmlFor={id}>{label}</label>
//         <input
// 			ref={inputRef}
//             id={id}
//             type="text"
//             className="form-control"
//             value={value}
//             placeholder={placeholder}
//             onChange={(e) =>onChange(e.target.value)}
//         />
//     </div>

/*
On peut utiliser la methode suivante pour passer une variable ref comme
on le ferait dans un DOM html
*/

//Il vaut mieux utiliser une fonction nommee qu'une fonction anonyme pour s'y retrouver dans le debugging
export const  Input = forwardRef(function Input({placeholder, value, onChange, label}, ref)
{
	console.log(ref)
	const id = useId()
    return <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <input
			ref={ref}
            id={id}
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) =>onChange?.(e.target.value)}
        />
    </div>
})

//On peut changer le nom d'affichage du composant dans la console avec
Input.displayName = "Input"