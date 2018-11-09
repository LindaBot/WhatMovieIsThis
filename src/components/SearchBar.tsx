import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react'


interface IProps{
    onSubmit?: any
}

interface IStates{
    value?: string
}

export default class SearchBar extends React.Component<IProps, IStates>{
    constructor(props: IProps){
        super(props);
        this.state = { 
            value: "Default" 
        };
    }

    public handleChange = (e:any) => {
        const userString = e.target.value;
        this.setState(
            {
                value: userString
            }
        )
    }

    public handleClick = () => {
        const value = this.state.value;
        this.props.onSubmit(value);
    }

    public render(){
        return(
            <form className="Search form-inline md-form mr-auto mb-4" >
                <TextField label="Movie Name" value={this.state.value} onChange={this.handleChange} className="mr-sm-2 Searchbar" />
                <Button onClick={this.handleClick} className="btn btn-outline-warning btn-rounded btn-sm my-0">Search</Button>
            </form>
        );
    }
}
