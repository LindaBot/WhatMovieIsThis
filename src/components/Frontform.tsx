import * as React from 'react';

export default class Frontform extends React.Component{
    public render(){
        return (
            <div className="frontform" 
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