import * as React from 'react'

interface IState{
    dataJSON: any
}

interface IProps{
    dataJSON: any
}

export default class DisplayInfo extends React.Component<IProps, IState>{
    
    public validMovie = this.props.dataJSON.Response === "True" ? 1 : 0;
    constructor(props: IProps){
        super(props);
    }
    

    public render() {
        return(
            <div>
                <p>{this.validMovie}</p>
            </div>
        );
    }
}