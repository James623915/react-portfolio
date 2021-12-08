import { useState } from 'react';
import axios from 'axios'

function SearchGiphy() {
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);
    
    const giphyApiKey ='1IugWix5HqDOKAsvKktNDukymaCrjHpR';
    
    // take the users input and make a request to giphy
    const requestToGiphy = () => {
        if(!input) return;

        axios.get(`/search?input=${input}`).then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err);
        })

        
    }
 
    // we will probably want to save the users gif they selected
    
    return (
        <div>
            <input value={input} onChange={ (e) => setInput(e.target.value) } />
            <button onClick={requestToGiphy}>Search Giphy</button>
            <div className='gifs-contaioner'>
                {gifs.map((gif, index) =>{
                    return (
                        <div key={index} className='gif-container' style={{display: 'grid', alignContent: 'center'}}>
                            <img src={gif.images.fixed_width.url} />
                            {/* creat a button that will allow a user to save the gif */}
                            </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SearchGiphy;