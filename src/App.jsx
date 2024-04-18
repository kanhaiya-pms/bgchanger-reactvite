import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var rnColor;
function App() {
      const [color, setColor] = useState('#FFBF00');

      function getRandomColorHash() {
        const letters = '0123456789ABCDEF';
        rnColor = '#';
        for (let i = 0; i < 6; i++) {
          rnColor += letters[Math.floor(Math.random() * 16)];
        }
        setColor(rnColor)
    }
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='text-5xl text-center py-10 opacity-40'>Background-changer <span className='text-sm font-semibold text-white'>&copy; kanhaiya</span></div>
        <div className='fixed text-white shadow-xl bottom-10 left-5 right-5 py-2 bg-white rounded-xl flex gap-3 justify-center flex-wrap'>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'red'}}
          onClick={()=>setColor('red')}
           >Red</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'green'}}
          onClick={()=>setColor('green')}
           >Green</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'yellow'}}
          onClick={()=>setColor('yellow')}
           >Yellow</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'blue'}}
          onClick={()=>setColor('blue')}
           >Blue</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'aqua'}}
          onClick={()=>setColor('aqua')}
           >Aqua</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'orange'}}
          onClick={()=>setColor('orange')}
           >Orange</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'navy'}}
          onClick={()=>setColor('navy')}
           >Navy</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'violet'}}
          onClick={()=>setColor('violet')}
           >Violet</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:'brown'}}
          onClick={()=>setColor('brown')}
           >Brown</button>
          <button className='py-1 px-4 outline-none shadow-md rounded-xl hover:text-black' 
          style={{backgroundColor:rnColor || 'black'}}
          onClick={()=>getRandomColorHash()}
           >Random {rnColor}</button>
          
        
        </div>
      </div>
    </>
  )
}

export default App
