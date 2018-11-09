import * as React from "react"
import DisplayInfo from './DisplayInfo';
import SearchBar from './SearchBar';


interface IStates{
    movieInfo: any
    movieJSON: any
    searchQuery?: any
}

// interface IProps{}

export default class FormOverlay extends React.Component<{}, IStates>{
    constructor(props: any){
        super(props);
        this.state = {
            movieInfo: "",
            movieJSON: JSON,
            searchQuery: "",
        }
    }

    public handleClick = (value: any) => {
        this.setState({
            searchQuery: value
        });
        this.getMovie(value);
    }

    public getMovie = async (movieName: any) => {
        // API key: 55d9f3f4
        // Example call: http://www.omdbapi.com/?apikey=55d9f3f4&t=MOVIENAME
        const apiCallString = "http://www.omdbapi.com/?apikey=55d9f3f4&t=" + movieName;
        const data = await fetch(apiCallString);
        const dataJSON = await data.json();         
        this.setState({
            movieInfo: JSON.stringify(dataJSON),
            movieJSON: dataJSON
        });
    }
    

    public render(){
        return(
            <div className="formOverlay">
                <SearchBar onSubmit={this.handleClick}/>
                {/* <p>This is the value we got: {this.state.searchQuery}</p> */}
                {/* <p>Movie info: {this.state.movieInfo}</p> */}
                <DisplayInfo dataJSON={this.state.movieJSON}/>
            </div>
        );
    }
}

