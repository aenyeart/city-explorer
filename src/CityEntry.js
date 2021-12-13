import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class CityEntry extends Component {

  formSubmission = (e) => {
    e.preventDefault();
    this.props.formSubmission(e);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmission} >
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                City Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Enter a city name"
                name="cityName"
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
