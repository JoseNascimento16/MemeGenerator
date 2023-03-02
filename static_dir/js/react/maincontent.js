function MainContent(){
    // const [valorInput1, setValorInput1] = React.useState('')
    // const [valorInput2, setValorInput2] = React.useState('')
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:'https://i.imgflip.com/3si4.jpg'
    })
    
    const [allMemes, setAllMemes] = React.useState([])

    function handleChange(event){
        // var valor_input1 = document.getElementById('input1').value
        // setValorInput1(valor_input1)
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:[value]
        }))
    }

    // function inputHandler2(){
    //     var valor_input2 = document.getElementById('input2').value
    //     setValorInput2(valor_input2)
    // }

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function getMemeImage(){
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        // setMeme(url)  metodo quando não precisamos do valor anterior para definir o proximo
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))  
    }

    return(
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form-button"> 🖼</button>
                <div className="div-meme-img">
                    <img src={meme.randomImage} className="meme-img" alt=""></img>
                    <h1 className="meme--text top">{meme.topText}</h1>
                    <h1 className="meme--text bottom">{meme.bottomText}</h1>
                </div>
            </div>
            {/* <img className="maincontent-img" src="/static/img/Curriculo-Jose-Nascimento.png" alt=""></img> */}
        </main>
    )
}



