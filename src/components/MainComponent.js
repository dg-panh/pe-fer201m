import { Component } from "react";
import { withRouter } from "react-router-dom";
import Detail from "./DetailComponent";
import { connect } from "react-redux";
import { BATH_SHOWER } from "../shared/bath_shower";
import { BEDDING } from "../shared/bedding";
import { LIGHTING } from "../shared/lighting";

const mapStateToProps = state => {
    return {
        bath_shower: state.bath_shower,
        bedding: state.bedding,
        lighting: state.lighting
    }
}

class Main extends Component {
    constructor() {
        super()
        this.state = {
            bath_shower: BATH_SHOWER,
            bedding: BEDDING,
            lighting: LIGHTING
        }
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className='row align-items-start'>
                        <div className='col-12 col-md m-1'>
                            <Detail item={this.state.bath_shower[0]} />
                        </div>
                        <div className='col-12 col-md m-1'>
                            <Detail item={this.state.bedding[0]} />
                        </div>
                        <div className='col-12 col-md m-1'>
                            <Detail item={this.state.lighting[0]} />
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));