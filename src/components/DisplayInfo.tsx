import * as React from 'react'

interface IState{
    nothing: any;
}

interface IProps{
    dataJSON: any
}

export default class DisplayInfo extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            nothing: null
        };
    }
    

    public render() {
        let validMovie;
        if (this.props.dataJSON === JSON){
            // Empty JSON
            validMovie = 0;
        } else {
            validMovie = 1;
        }
        
        return(
            <div>
                <p>
                {validMovie === 1 
                    ? 
                    <div>
                        <p>yes movie</p>
                    </div>
                    :
                    <div>
                        <p>no movie</p>
                    </div>
                }</p>
            </div>
        );
    }
}