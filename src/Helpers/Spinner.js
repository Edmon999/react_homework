import React, { PureComponent } from 'react'
import { Default } from 'react-spinners-css';
import { Container } from 'react-bootstrap';
class Spinner extends  PureComponent {
    
    render() {
        return (
            <div className="spinner">
                <Default color="LightSlateGrey" />
            </div>
        )
    }
}
export default Spinner
