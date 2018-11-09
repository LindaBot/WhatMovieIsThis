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
        if (this.props.dataJSON.Response === "False")
        {
            return(
                <div>
                    <p>No movie was found</p>
                </div>
            )
        } else if (this.props.dataJSON === JSON) {
            return (null);
        } else {
            return(
                <div>
                    <div className="container">
                        <div className="jumbotron">
                            <h1>{this.props.dataJSON.Title}</h1>
                            <img src={this.props.dataJSON.Poster}/>
                        </div>
                        <div className="row marketing">
                            <div className="col-lg-6">
                                <h4>Genre</h4>
                                <p>{this.props.dataJSON.Genre}</p>

                                <h4>Plot</h4>
                                <p>{this.props.dataJSON.Plot}</p>

                                <h4>Director</h4>
                                <p>M{this.props.dataJSON.Director}</p>
                            </div>
                        
                            <div className="col-lg-6">
                                <h4>Genre</h4>
                                <p>{this.props.dataJSON.Genre}</p>

                                <h4>Production</h4>
                                <p>{this.props.dataJSON.Production}</p>

                                <h4>Actors</h4>
                                <p>{this.props.dataJSON.Actors}</p>
                            </div>
                        </div>
                    </div>    
                </div>
            );
        }
    }
}