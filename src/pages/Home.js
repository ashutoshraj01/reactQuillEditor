import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextEditor from '../components/textEditor/textEditor';
import UploadImages from '../components/imageUploader/uploadImages';
import Select from '../components/selectionBox/select';
import './home.css';

export default function Home() {
  const [showText, setTextState] = useState(true);

  function selectedEditor(data){
    data === "text" ? setTextState(true) : setTextState(false);
  }
    return (
    <Container>
  <Row>
    <Col>
        <header>React Quill Task</header>
    </Col>
  </Row>
  <Row>
    <Col>{
          showText ? <TextEditor></TextEditor> : <UploadImages></UploadImages> 
        }
    </Col>
  </Row>
  <Row>
    <Col>
      <Select selectedEditor={selectedEditor}></Select>
    </Col>
  </Row>
</Container>
  )
}
