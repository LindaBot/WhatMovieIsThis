import * as React from "react"
import SearchBar from './SearchBar';

class FormOverlay extends React.Component{
    public render(){
        return(
            <div className="formOverlay">
                <SearchBar/>
            </div>
        );
    }
}

export default FormOverlay;