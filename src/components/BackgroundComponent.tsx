import * as React from "react";

export default class SecondComponents extends React.Component{
    public render(){
        return (
            <div className="backgroundIMG" 
                style={{  
                    backgroundImage: "url(" + "https://source.unsplash.com/random" + ")",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'noRepeat',
                    backgroundSize: 'cover',
                    position: 'absolute'
                    }}
            />
        )
    }
}