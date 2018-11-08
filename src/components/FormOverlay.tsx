import * as React from "react"
import SearchBar from './SearchBar';

interface IStates{
    movieInfo: any
    searchQuery?: any
}

// interface IProps{}

export default class FormOverlay extends React.Component<{}, IStates>{
    constructor(props: any){
        super(props);
        this.state = {
            movieInfo: "",
            searchQuery: ""
        }
    }

    public handleClick = (value: any) => {
        this.setState({
            searchQuery: value
        });
        this.getMovie();
    }

    public getMovie = async () => {
        // API key: 55d9f3f4
        // Example call: http://www.omdbapi.com/?apikey=55d9f3f4&t=MOVIENAME
        const apiCallString = "http://www.omdbapi.com/?apikey=55d9f3f4&t=" + this.state.searchQuery;
        const data = await fetch(apiCallString);
        const dataJSON = await data.json();         
        this.setState({
            movieInfo: JSON.stringify(dataJSON)
        })
    }
    

    public render(){
        return(
            <div className="formOverlay">
                <SearchBar onSubmit={this.handleClick}/>
                <p>This is the value we got: {this.state.searchQuery}</p>
                <p>Movie info: {this.state.movieInfo}</p>
            </div>
        );
    }
}

