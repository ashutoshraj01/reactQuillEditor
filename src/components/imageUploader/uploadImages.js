import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  './uploadImages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCamera } from '@fortawesome/free-solid-svg-icons'

export default function UploadImages() {
  function loadFile(event) {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <Container>
        <Row>
            <Col>
                <div>

                  <Row>
                      <Col>
                          <FontAwesomeIcon icon={faCamera} />
                        </Col>
                  </Row>
                  <Row>
                      <Col>
                          <p>Upload a cover image</p>
                        </Col>
                  </Row>

                   <input type="file"  accept="image/*" name="image" id="imgfile"  onChange={loadFile} />
                   <p><img id="output" width="400" height="200px" src="" margin="20px"/></p>  
                </div>
            </Col>
        </Row>
    </Container>
   
  )
}
