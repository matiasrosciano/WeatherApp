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
            <WeatherList weathers={this.props.weathers}
                SelectInList={this.handleOnSelectLocation}/>
        );
    }
}

WeatherListContainer.propTypes = {
    dispatchsetCity: PropTypes.func.isRequired,
    weathers: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispatchsetCity: value => dispatch(setCity(value))
})


export default  connect(null, mapDispatchToProps)(WeatherListContainer)