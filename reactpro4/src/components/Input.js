import React from 'react'
import data from './data'

function Input() {


  // const [image,setImage]=React.useState("")
const [meme,setMeme]=React.useState({
  firstname:"",
  lastname:"",
  url:"meme1.jpg"
})
// const [image,setImage]=React.useState(data)
  
function handle(){
  // const arrayimage=data.data.url
  const rand=Math.floor(Math.random()*data.length)
const url1=data[rand].url;
    setMeme(previmage=>({...previmage,url:url1}))
}

const [imagedata,setImagedata]=React.useState({
  firstName:"",lastName:""
})

console.log(imagedata)

function change1(event){
    const {name,value,type}=event.target
    setImagedata(previmgdata=>({
      ...previmgdata,
      [name]:value
    }))
}



  return (
    <div>
        <form className='form'>
            <input type="text" placeholder="Top text" className='input1' name="firstName" value={imagedata.firstName} onChange={change1}/>
            <input type="text" placeholder="Botton text" className='input2' name="lastName" value={imagedata.lastName} onChange={change1}/>
            
        </form>
        <div></div>
        <button type="submit" className='button' onClick={handle}>Get a new meme image</button>
        <div>
        <h2 className='h21'>{imagedata.firstName}</h2>
        <h2 className='h22'>{imagedata.lastName}</h2>
          <img src={meme.url} width="50px" className='img1'/>
        </div>
    </div>
  )
}

export default Input