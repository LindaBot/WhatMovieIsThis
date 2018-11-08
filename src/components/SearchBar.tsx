import * as React from 'react'

interface IProps{
    defaultValue?: string
}

interface IStates{
    value?: string
}

export default class SearchBar extends React.Component<IProps, IStates>{
    constructor(props: IProps){
        super(props);
        this.state = { 
            value: this.props.defaultValue 
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

    public handleSubmit = () => {
        return;
    }

    public render(){
        return(
            <div>
                <input value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Search</button>
                <p>{this.state.value}</p>
            </div>
        );
    }
}
