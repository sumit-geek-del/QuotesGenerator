import React, {useState,useEffect,useRef} from 'react'
import '../App.css';

function Card() {
    let colors = ['#072227', '#ff7979', '#1C6DD0', '#eb3b5a', '#20bf6b', '#26de81', '#ff3f34', '#ff5e57', '#1e272e'];
    const [quotes, setQuotes] = useState(" ");
    const textRef = useRef();
    

    const url = 'https://type.fit/api/quotes';
    const fetchData = async ()=>{
        const response = await fetch(url);
        const q = await response.json();
        let randomNumber =  Math.floor(Math.random()*q.length);
        setQuotes(q[randomNumber]);
        
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        textRef.current.style.color = colors[Math.floor(Math.random()*colors.length)];
    }, [quotes])
    return (
        <>
            <h1>Quotes Generator</h1>
            <div className="card new-card">
                <div className="card-body">
                    <h5 ref ={textRef} className="card-title">{quotes.text}</h5>
                    <p className='author'><span>Author : </span>{quotes.author? `${quotes.author}` : '🚀'} 💖</p>
                    <div className='btn-group'>
                    <a className ="btn" onClick={fetchData}>Next Quote</a>
                    <a className = 'btn' href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target='_blank' rel='noopener noreferrer'>Tweet</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
