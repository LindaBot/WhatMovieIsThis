import * as React from "react"
import SearchBar from './SearchBar';

interface IStates{
    searchQuery?: any
    movieInfo?: any
}

// interface IProps{}

class FormOverlay extends React.Component<{}, IStates>{
    constructor(states: IStates){
        super(states);
        this.state = {
            searchQuery: ""
        }
    }

    public handleClick = (value: any) => {
        this.setState({
            searchQuery: value
        });
        this.getMovie;
    }

    public getMovie = () => {
        // API key: 55d9f3f4
        // Example call: http://www.omdbapi.com/?apikey=55d9f3f4&t=MOVIENAME
        var apiCallString = "http://www.omdbapi.com/?apikey=55d9f3f4&t=" + this.state.searchQuery;
    }
    

    public render(){
        return(
            <div className="formOverlay">
                <SearchBar onSubmit={this.handleClick}/>
                <p>This is the value we got: {this.state.searchQuery}</p>
            </div>
        );
    }
}

export default FormOverlay;