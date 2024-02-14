import {useEffect} from "react";

/*
Ce hook n'a pas pour vocation de retourner quelque chose.
Il a pour objectif de generer des effets de bore
*/
export function useDocumentTitle (title) {

	//On veut pouvoir re initialiser le title quand le champ est vide
	//On va donc le stocker dans une ref
	const titleRef = useRef(document.title)

	useEffect(() => {
		//Si on avait pas la ref on devrait mettre la ligne suivante
		// const originalTitle = document.title
		return () => {
			document.title = titleRef.current
		}
	}, []);

	useEffect(() => {
		//title ? veut dire "si title est definit"
		document.title = title ? title : title.current
	}, [title]);
}