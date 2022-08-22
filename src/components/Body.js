import React from 'react'
import memesdata from '../memesdata'

export default function Body() {
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1ur9b0.jpg"
        }
    )
    const [allMemesImages,setAllMemeImages]=React.useState(memesdata);
    
    function Randommeme(){
        const memeArray=allMemesImages.data.memes;
        const random=Math.floor(Math.random()*memeArray.length);
        const url=memeArray[random].url;
        console.log(url)
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
        
    }
    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
             [name]:value
        }))
        
    }

  return (
    <>
    {console.log("myday")}
    <div id='inputs'>
        <div >
            <input 
                type="text"
                placeholder='Top Text' 
                name="topText" 
                id=""
                value={meme.topText}
                onChange={handleChange}/>
            <input 
                type="text" 
                placeholder='Bottom Text' 
                name="bottomText" 
                id=""
                value={meme.bottomText}
                onChange={handleChange}/>
            <div id='button'>
                <button
                onClick={Randommeme}
                >Create a new meme image</button>
            </div>
        </div>
    </div>
    
    <div id='image'>
        <img src={meme.randomImage}id='meme'/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
    </>
  )
}
