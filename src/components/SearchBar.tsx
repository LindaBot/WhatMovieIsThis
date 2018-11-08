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
            <div>
                <input value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Search</button>
                <p>{this.state.value}</p>
            </div>
        );
    }
}
