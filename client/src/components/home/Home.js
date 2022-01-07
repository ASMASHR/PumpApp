import React,{useState} from "react";
import './Home.css'

const Home = () => {
  const [currentSlide,setCurrentSlide]= useState(0)
const imgInfo=[
  {id:1,
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gemaal_van_sasse_interieur.jpg/640px-Gemaal_van_sasse_interieur.jpg"},
    {id:2,
  img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gemaal_van_sasse_interieur.jpg/640px-Gemaal_van_sasse_interieur.jpg"}
// Add some Images
]
const handelClick=(way)=>{
(way==="left")?setCurrentSlide(currentSlide>0?currentSlide-1:imgInfo.length-1):setCurrentSlide(currentSlide<imgInfo.length-1?currentSlide+1:0)

}
  return (
    <div className="Home">
       <div className="intro">
          <h1>Welcome To PUMP App</h1>
          <p>PUMP STATION GREENSOLUTION {/* Add more description */}</p>
          
      </div>
       <div className="info">
          <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
          {
              imgInfo.map(el=><div className="Imgcontainer">
                      <div className="item">
                        <img src={el.img} />
                        </div>
                        </div>)
            }
          </div> 
          <img src="assets/down.png" alt="" className='arrow Left' onClick={()=>handelClick("left")} />
          <img src="assets/down.png" alt="" className='arrow Right'onClick={()=>handelClick()} />
        </div>
    </div>
  )
};
export default Home;