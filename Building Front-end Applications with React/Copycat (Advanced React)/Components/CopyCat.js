import React from 'react';
import {styles} from '../styles'
import PropTypes from 'prop-types';

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {

    render() {
        const copying = this.props.copying;
        const toggleTape = this.props.toggleTape;
        const value=this.props.input;
        const handleChange=this.props.handleChange;

        return (
            <div style={styles.divStyles}>
                <h1 style={{marginBottom: 80}}>Copy Cat</h1>
                <input type='text' value={this.value} onChange={this.handleChange}/>
                <img
                    alt='cat'
                    src={copying ? images.copycat : images.quietcat}
                    onClick={toggleTape}
                    style={styles.imgStyles}
                />
                <p>{value && copying}</p>
            </div>
        );
    };
}

CopyCat.propTypes = {
    copying: PropTypes.bool.isRequired,
    toggleTape: PropTypes.bool.isREquired,
    value: PropTypes.string.isREquired,
    handleChange: PropTypes.func.isRequired
}