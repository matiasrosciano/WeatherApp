import React, { Component } from 'react';
import WeatherExtends from './../components/WeatherExtends'
import { connect } from 'react-redux'

class WeatherExtendsContainer extends Component {

    render() {
        return (
            this.props.cityextendsweather ?
            <WeatherExtends
                  city={this.props.cityextendsweather}/>
            :
                <span></span>
        );
    }
}



const mapStateToProps = state => ({cityextendsweather: state.city})

export default connect(mapStateToProps,null)(WeatherExtendsContainer);