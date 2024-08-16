import React, { useRef, useState } from 'react';
import "./list.scss";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import ListItem from "../listitem/Listitem";

export default function List() {
    const listRef = useRef();
    const [moved,setMoved]=useState(false);

    const handleClick = (direction) => {
        setMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left") {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right") {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (
        <div className='list'>
            <span className='listTitle'>Resume Watching</span>
            <div className='wrapper'>
                <ArrowBack className='slide left' onClick={() => handleClick("left")}style={{display: !moved && "none"}}/>
                <div className='container' ref={listRef}>
                    {Array.from({ length: 20 }).map((_, index) => (
                        <ListItem/>
                    ))}
                </div>
                <ArrowForward className='slide right' onClick={() => handleClick("right")} />
            </div>
        </div>
    );
}
