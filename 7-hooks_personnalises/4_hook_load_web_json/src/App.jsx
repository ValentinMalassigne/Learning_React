import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react'
import { Input } from './components/forms/input'
import { Checkbox } from './components/forms/Checkbox'
import { useToggle } from './hooks/useToggle'
import { useIncrement } from './hooks/useIncrement'

// Exemple de hooks en TS https://usehooks-ts.com/

function App() {

	const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000');

 return <div className="container my-2">
	{loading && <div className="spinner-border" role="status"> 
	 <span className="visually-hidden"> Chargement... </span>
	 </div>}
	{errors && <div className="alert alert-danger">{errors.toString()}</div> }
	{data && <div> 
		<ul>
			{data.map(post => (<li key={post.id}>{post.title}</li>))}
		</ul>
	</div>}
 </div>
}

export default App
