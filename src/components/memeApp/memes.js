import React from 'react'
import '../memeApp/memes.css'

function Memes() {

    const [memes, setMemes] = React.useState(

        {
            topText: "",
            bottomText: "",
            randomImage: "./images/funnyPicture.jpg"
        })

    function getImage() {

        const apiMemes = allMemes.map(meme => meme)
        const randomNumber = Math.floor(Math.random() * allMemes.length)

        setMemes(prev => {
            const newImage = apiMemes[randomNumber].url
            return { ...prev, randomImage: newImage, topText: "", bottomText: "", }
        })
    }

    const [allMemes, setAllMemes] = React.useState({})

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        setMemes(prev => {
            const { name, value } = event.target
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (

        <div className='meme-app'>
            <div className='form'>
                <input
                    type="text"
                    placeholder='Top text'
                    name="topText"
                    onChange={handleChange}
                    value={memes.topText}
                />
                <input
                    type="text"
                    placeholder='Bottom text'
                    name="bottomText"
                    onChange={handleChange}
                    value={memes.bottomText}
                />
                <button onClick={getImage}> New Meme Image</button>
            </div>
            <div className='image--container'>
                <img src={memes.randomImage} className='meme--image' />
                <h2 className='meme--text top'>{memes.topText}</h2>
                <h2 className='meme--text bottom'>{memes.bottomText}</h2>
            </div>
        </div>

    )
}

export default Memes