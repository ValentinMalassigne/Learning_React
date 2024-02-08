import { useState } from 'react'
import {} from 'react'
import { Checkbox } from './components/forms/Checkbox'
import { Input } from './components/forms/input'
import { ProductCategoryRaw } from './components/products/ProductCategoryRaw'
import { ProductRow } from './components/products/ProductRaw'

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState("")

  /*
  On pourrait passer showStockedOnly et search à productTable pour y faire la logique
  Mais autant la faire ici pour ne pas allourdir le code de productTable
  
  visibleProducts est une variable "dérivée", cad que sa valeur dépend de l'état du composant
  */

  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked)
      return false
    if (search && !product.name.includes(search))
      return false
    return true
  })

  return <div className='container my-3'>
    <SearchBar search={search}
      onSearchChange={setSearch}
    showStockedOnly={showStockedOnly} onStockedOnlyChange={setShowStockedOnly}/>
    <ProductTable products={visibleProducts}/>
  </div>
}

function SearchBar ({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  return <div>
    <div className='mb-3'>
      <Input value={search} onChange={onSearchChange} placeholder="Rechercher..."/>
      <Checkbox id="stocked" checked={showStockedOnly} onChange={ onStockedOnlyChange} label={"N'afficher que les produits en stock"}/>
    </div>
  </div>
}

function ProductTable ({products}) {
  
  const rows = []
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRaw key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }

  return <table className='table'>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default App
