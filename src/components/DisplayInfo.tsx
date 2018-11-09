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
        if (this.props.dataJSON === JSON || this.props.dataJSON.Response === "False"){
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
                    <div className="container">
                        <div className="jumbotron">
                            <h1>{this.props.dataJSON.Title}</h1>
                            <img src={this.props.dataJSON.Poster}/>
                        </div>
                        <div className="row marketing">
                        <div className="col-lg-6">
                            <h4>Genre</h4>
                            <p>{this.props.dataJSON.Genre}</p>

                            <h4>Subheading</h4>
                            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                            <h4>Subheading</h4>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        </div>
                        
                        <div className="col-lg-6">
                            <h4>Genre</h4>
                            <p>{this.props.dataJSON.Genre}</p>

                            <h4>Subheading</h4>
                            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                            <h4>Subheading</h4>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        </div>
                        </div>
                    </div>
                    :
                    // JSON is empty
                    <div>
                        <p>no movie</p>
                    </div>
                }</p>
            </div>
        );
    }
}