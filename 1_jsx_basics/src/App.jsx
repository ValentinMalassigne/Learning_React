import { Fragment, useState } from 'react'

const title = "Bonjour les <strong>gens</strong>"
const style = {color: 'red', backgroundColor : 'blue'}
const showPara = false
const todos = ['Présenter react',
               'Présenter le JSX',
               'Créer des composants',
              ]

function App() {
  /* <> == <Fragment> */
  return <> 
    <Title color="red" id="monid" className="demo" data-demo="demo">Mon composant</Title>
     {showPara && <p>Hello</p>}
     {showPara ? <p>Hello</p> : <p>Goodbye</p>}

     <input type="text"/>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ratione perferendis libero impedit ipsam fugit iusto aspernatur iure! Error, suscipit cupiditate? Culpa quod libero necessitatibus eos, vitae repudiandae ad possimus.
     </p>
     <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
     </ul>
  </>
}

/*
Title reçoit le pamètre props avec dedans l'attribut color
On peut utiliser la destructuration avec {} pour accéder directement aux attributs 
L'attribut children contient l'enfant des balises de Title
Le ... vient récupérer tout le reste des attributs
*/
function Title({color, children, hidden, ...props}){

  const handleClick = (e) => {
    console.log(e)
    alert("J'ai cliqué sur le titre")
  }

  /* Ici on regarde si la propriété hidden est à true
  Si on appel le composant Title sans spécifé hidden dans ses attributs
  alors hidden sera undifined
  */
  if (hidden)
  {
    return null;
  }

  return <>
    {/* dangerouslySetInnerHTML={{__html:title}} permet d'interpreter les balises */}
    <h1 id="title" className={title} style={{color: color}} dangerouslySetInnerHTML={{__html:title}}></h1>
    {/*Si on passe handleClick() à l'attribut onClick alors la fonction sera appelé dès le rendu.
    c'est possible de déclarer à la volée :{() => alert("Bonjour")} */}
    <h1 onClick={handleClick} id="title" className={title} style = {style}>{title} {3} {null} {undefined}</h1>
  
    {/* utilisation du spread operator pour ajouter plusieurs attributs à un élément*/}
    <h1 style={{color:color}} {...props}>{children} </h1>
  </>
}

export default App
