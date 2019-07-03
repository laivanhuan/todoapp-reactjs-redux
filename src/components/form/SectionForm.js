import React, { Component } from 'react';
import {connect} from 'react-redux';

class SectionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            sectionName: ''
        }
    }
    
    isChange = event => {
        // console.log(`${event.target.name} : ${event.target.value}`);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addNewSection = () => {
        let sectionName = this.state.sectionName;
        this.props.addSection(sectionName); 
    }

    render() {
        return (
            <div className="form">
                <form method="get" acceptCharset="utf-8">
                    <div className="item">
                        <p className="label">Section Name: </p>
                        <input onChange={(event) => this.isChange(event)} type="text" name="sectionName" placeholder="Section Name" />
                    </div>
                    <div className="btn-submit" onClick={() => this.addNewSection()}>
                        <span>Create</span>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isVisibale: state.isVisibleSectionForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addSection: (sectionName) => {
            dispatch({type: "ADD_NEW_SECTION",sectionName})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionForm);