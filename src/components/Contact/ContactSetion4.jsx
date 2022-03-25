import React from 'react'
import { Container , Row, Col} from "react-bootstrap"
function ContactSetion4() {
  return (
      <Container>
          <Row>
              <Col xs="12" md="4">
                  <div className="d-flex w-100">
                      <img src="https://cdn.countryflags.com/thumbs/india/flag-800.png"/>
                  </div>
              </Col>
              <Col xs="12" md="4">
                  <div className="d-flex w-100">
                      <img src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" />
                  </div>
              </Col>
              <Col xs="12" md="4"></Col>
          </Row>
    </Container>
  )
}

export default ContactSetion4