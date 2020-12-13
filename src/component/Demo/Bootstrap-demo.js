import React, { Component, component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Blocks from './Blocks'
import id from "..//..//Helpers.js//idGenerator"
class Bootstrap extends Component {
    render() {
        const blocks = []
        for (let i = 0; i < 15; i++) {
            blocks.push(<Col key={i} xs={12} sm={6} md = {3} lg = {2} xl = {1}>
                <Blocks  number={i} />
            </Col>

            )
        }
        return (
            <div>
                <Button variant="outline-primary">Primary</Button>
                <Container>
                    <Row>
                        {blocks}
                    </Row>
                    <Row>
                        {blocks}
                    </Row>
                </Container>

            </div>
        )
    }
}
export default Bootstrap