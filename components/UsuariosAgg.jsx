import React, { useState } from 'react';
import { useEffect } from 'react';

const UsuariosAgg = () => {

const [name,setName]=useState("nombre")
const [imgg,setImg]=useState("https://cdn-icons-png.flaticon.com/512/21/21104.png")
const [descriptiongg,setDes]=useState("descripcion")
const [ageis,setAge]=useState("edad")

const [selectuser,setUsersele]=useState(null)

const idramdon=Math.floor(Math.random()*1000000)+1
const idramdon1=Math.floor(Math.random()*1000000)+1



useEffect(()=>{
if(selectuser){
    setName(selectuser.name)
    setImg(selectuser.img)
    setAge(selectuser.age)
    setDes(selectuser.description)
}else{
    setName("nombre")
    setImg("https://cdn-icons-png.flaticon.com/512/21/21104.png")
    setAge("edad")
    setDes("descripcion")
}
},[selectuser])

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
        if(selectuser!==null){
            updatee(Add)
        }else{
            setNotes([...notes,Add])
        }
       console.log(Add)
    }


   const deletee=(proid)=>{
        const filtrado=notes.filter(pro=>proid.id!==pro.id)
        setNotes(filtrado)
        console.log(proid.id)
   }

   const selectProo=(selectuser)=>{
    console.log(selectuser)
    setUsersele(selectuser)
   }
   const updatee=(selectPro)=>{
    selectPro.id=selectuser.id
    console.log(selectPro.id)
    const index=notes.findIndex(user=>user.id===selectPro.id)
    notes[index]=selectPro
    localStorage.setItem("notass",JSON.stringify(notes))
    selectProo([...notes])
    setUsersele(null)
    console.log("actualizado")
   }

   useEffect(()=>{ 
    let data=localStorage.getItem("notass")
    if(data){
       setNotes(JSON.parse(data))
    }
   },[])

  useEffect(()=>{
   localStorage.setItem("notass",JSON.stringify(notes))
   },[notes])

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
                    <div className='butons'>
                    <button onClick={()=>deletee(user)}>delete</button>
                    <button onClick={()=>selectProo(user)}>select</button>
                    </div>
                    </div>
                )
            })}
            </div>
            <div className='formula'>
            <form onSubmit={summmitchange}>
                <input type="text" value={name} placeholder="tu nombre aqui..." onChange={inputName}/>
                <input type="number" value={ageis}  placeholder="tu edad..." onChange={inputAge}/>
                <input type="text" value={descriptiongg} placeholder="tu descripcion de ti aqui..." onChange={inputDesc}/>
                <small>debes agg un vinculo compatible sin asteriscos en la seccion de img yan que el estado esta vacio con "" solo ,seria https.ect.png como ejemplo</small>
                <input type="text" value={imgg} placeholder="tu bello rostro o avatar" onChange={inputImg}/>
                <button>Agg a la pagina:3</button>
            </form>
            </div>
        </div>
    );
};

export default UsuariosAgg;