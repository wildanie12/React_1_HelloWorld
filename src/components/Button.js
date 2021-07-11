import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    
    return (
        <button 
            onClick={props.clickedButton}
            className="btn" 
            style={{ backgroundColor: props.color }}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    text: 'ButtonText',
    color: 'aqua',
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    clickedButton: PropTypes.func
}

export default Button
