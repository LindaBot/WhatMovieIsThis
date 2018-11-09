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
                </div>
            );
        }
    }
}