import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'




export default class CityEntry extends Component {
  render() {
    return (
      <>
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                City Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Enter a city name"
              />
            </Col>

            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Explore!
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    )
  }
}
