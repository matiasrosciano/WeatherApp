import React from 'react'
import PropTypes from 'prop-types'

const Location = (props) => (
    <div className="locationcont"><h1>{props.city}</h1></div>
)

Location.propTypes = {
    city: PropTypes.string.isRequired
}



export default Location