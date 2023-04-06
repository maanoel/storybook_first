import React from 'react';
import PropTypes from 'prop-types';

export default function Button({label}){
    return (<button>{label}</button>)
}

Button.propTypes = {
    label: PropTypes.string
}

Button.defaultProps = {
   label: 'Valor Padrão',
}