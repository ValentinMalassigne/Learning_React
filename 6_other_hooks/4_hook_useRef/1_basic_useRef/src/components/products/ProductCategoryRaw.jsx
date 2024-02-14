/**
 * Ligne de tableau avec nom de la catégorie
 * @param {string} name
 * @returns 
 */
export function ProductCategoryRaw({name}) {
    return <tr>
        <td colSpan={2}><strong>{name}</strong></td>
    </tr>
}