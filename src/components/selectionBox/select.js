import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './select.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faImage } from '@fortawesome/free-solid-svg-icons'

export default function Select(props) {
    const {selectedEditor} = props;
    const [selectionStatus, setSelectionStatus] = useState(false);

    function toggleSelectionStatus(){
        setSelectionStatus(!selectionStatus);
    }

    function setSelectedState(e){
        setSelectionStatus(false);
        selectedEditor(e.target.id);
    }

    return (
    <Container>
        <Row>
            <Col>
                <div className='selectionContainer'>
                    <div className='plusSign' onClick={toggleSelectionStatus}>+
                        { selectionStatus ? <div className='selectionModal'>
                                            <Row>
                                                <Col style={{ 'fontWeight': 'bold', 'padding': '5px'}}>Choose</Col>
                                                <Col></Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Row id="textWrapper">
                                                        <Col>Aa</Col>
                                                        <Col id="text" onClick={setSelectedState}>
                                                            <span>Text</span>
                                                            <p>Just start writing with plain text</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                <Row id="imgWrapper">
                                                        <Col>
                                                           <FontAwesomeIcon icon={faImage} />
                                                        </Col>
                                                        <Col id="image" onClick={setSelectedState}>
                                                            <span>Image</span>
                                                            <p>Upload or embed with a link</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                         </div>
                        : null }
                    </div>
                </div>
                <div>
                    <button onClick={toggleSelectionStatus}>Click to add block</button>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
