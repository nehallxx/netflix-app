import React from 'react'
import "./listitem.scss"
import{PlayCircle,AddCircleOutlineOutlined,ThumbUp,ThumbDownAlt} from "@mui/icons-material"
import img1 from  '../../assets/godfather.jpg';
import img2 from  '../../assets/ghostbusters.jpg';
import img3 from  '../../assets/bladerunner.jpg';
import img4 from  '../../assets/aliens.jpg';
import img5 from  '../../assets/homealone.jpg';
import img6 from  '../../assets/godfather.jpg';
import img7 from  '../../assets/jurassic-park.jpg';
import img8 from  '../../assets/Harry-Potter.png';
import img9 from  '../../assets/inception1.png';
import img10 from  '../../assets/Star-Wars.png';
import img11 from  '../../assets/The-Incredibles.png';
import img12 from  '../../assets/Toy-Story.png';




export default function Listitem() {
    const images=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
  return (
    <>
    {images.map((image,index)=>(   
        <div key={index}className='listItem'>
        <div className='iteminfo'>
        <img src={image} alt={`Movie ${index + 1}`} />
            <div className='icons'>
                <PlayCircle/>
                <AddCircleOutlineOutlined/>
                <ThumbUp/>
                <ThumbDownAlt/>
                <div className='topInfo'>
                    <span></span>

                </div>
                <div className='desc'></div>

            </div>

        </div>
      
    </div>))}
 
    </>
  )
}
