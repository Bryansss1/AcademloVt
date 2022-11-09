import React, { useState } from 'react';

const UsuariosAgg = () => {

const [name,setName]=useState("nombre")
const [imgg,setImg]=useState("https://cdn-icons-png.flaticon.com/512/21/21104.png")
const [descriptiongg,setDes]=useState("descripcion")
const [ageis,setAge]=useState("edad")

const idramdon=Math.floor(Math.random()*1000000)+1
const idramdon1=Math.floor(Math.random()*1000000)+1

const notas=[{
    name:"Bryan Sanabria",
    age:18,
    description:"Soy una persona dedicada a lo que amo y al aprendizaje",
    img:"https://i.ytimg.com/vi/jMfAZR9oE_Q/maxresdefault.jpg",
    id:idramdon1
}]

const [notes,setNotes]=useState(notas)

    const inputImg=(e)=>{
        
        setImg(e.target.value)
    }
    const inputName=(e)=>{
        setName(e.target.value)
    }
   const inputAge=(e)=>{
    setAge(e.target.value)
   }
    const inputDesc=(e)=>{
        setDes("tu descripcion")
        setDes(e.target.value)
    }

    const summmitchange=(e)=>{
        e.preventDefault()
        const Add={
            name:name,
            age:ageis,
            description:descriptiongg,
            img:imgg,
            id:idramdon
        } 
        setNotes([...notes,Add])
       console.log(Add)
    }

   const deletee=(proid)=>{
        const filtrado=notes.filter(pro=>proid.id!==pro.id)
        setNotes(filtrado)
        console.log(proid.id)
   }

    return (
        <div>
            <div className='principal'>
            <h1 className='h1principal'>Estudiantes Gen 19</h1>
            <img className='acam' src='https://www.academlo.com/logo_academlo.png'/>
            </div>
            <div className='users'>
            {notes.map((user)=>{
                return(
                    <div key={user.id} className='card-user'>
                    <h3>{user.name}</h3>
                    <ul>
                    <li>Tengo:{user.age}</li>
                    <li>Algo sobre mi:<br></br>{user.description}</li>
                    </ul>
                    <img src={user.img}/>
                    <button onClick={()=>deletee(user)}>delete</button>
                    </div>
                )
            })}
            </div>
            <div className='formula'>
            <form onSubmit={summmitchange}>
                <input type="text" placeholder="tu nombre aqui..." onChange={inputName}/>
                <input type="number"  placeholder="tu edad..." onChange={inputAge}/>
                <input type="text" placeholder="tu descripcion de ti aqui..." onChange={inputDesc}/>
                <small>debes agg un vinculo compatible sin asteriscos en la seccion de img yan que el estado esta vacio con "" solo ,seria https.ect.png como ejemplo</small>
                <input type="text" placeholder="tu bello rostro o avatar" onChange={inputImg}/>
                <button>Agg a la pagina:3</button>
            </form>
            </div>
        </div>
    );
};

export default UsuariosAgg;