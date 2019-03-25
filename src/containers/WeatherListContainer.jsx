import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { setCity } from './../actions'
import WeatherList from './../components/WeatherList';

class WeatherListContainer extends Component {

    handleOnSelectLocation = (city) => {    
        this.props.dispatchsetCity(city)
    }
    

    render() {
        return (
            this.props.weathers ?
            <WeatherList weathers={this.props.weathers}
                SelectInList={this.handleOnSelectLocation}/>
            :
                <span></span>
        );
    }
}

WeatherListContainer.propTypes = {
    dispatchsetCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispatchsetCity: value => dispatch(setCity(value))
})

const mapStateToProps = state => ({weathers: state.weathers})


export default  connect(mapStateToProps, mapDispatchToProps)(WeatherListContainer)