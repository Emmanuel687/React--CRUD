import React from 'react';
import "./index.css"


const Individual = ({person, deleteIndividual, onUpdate}) => {
  return (
    <div>
     <p className={person.isAdult?"underlined":""}>{person.fullName}</p>
     <button onClick={()=>deleteIndividual(person.id)}>Delete</button>
     <input value={person.isAdult} type='checkbox' onChange={()=>onUpdate(person.id)} />
     {person.isAdult?<p>Adult</p>:<p>Child</p>}
    </div>
  )
}

export default Individual