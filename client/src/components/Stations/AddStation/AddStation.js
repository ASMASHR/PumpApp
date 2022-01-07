import React, { useState } from "react";
import './add.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { add_station } from "../../../js/action/authAction";

const Modaledit = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    
    pumpnumber: "",
    pumptype: "",
    intervention:"",
    imgstation:""
  });
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleConfim = () => {
    console.log(formData)
    
    dispatch(add_station( formData));
    // history.push("/dashboard");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="AddDiv">
      <button className="buttonAdd" onClick={toggle}>
        Add Station
      </button>
</div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Station</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="code">Code</Label>
              <Input
                onChange={handleFormChange}
                type="number"
                name="code"
               
                placeholder="Enter your code..."
              />
            </FormGroup>
             <FormGroup>
              <Label for="name">Station Img</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="imgstation"
                id="imgstation"
                placeholder="Enter station img ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="pumpnumber">Pump Number</Label>
              <Input
                onChange={handleFormChange}
                type="number"
                name="pumpnumber"
               
                placeholder="Enter your pumpnumber..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="pumptype">Pump Type</Label>
              <Input
                onChange={handleFormChange}
                type="string"
                name="pumptype"
                
                placeholder="Enter your pumptype..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="intervention">Intervention</Label>
              <Input
                onChange={handleFormChange}
                type="string"
                name="intervention"
               
                placeholder="Enter your intervention..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleConfim();
              toggle();
            }}
          >
            Confirm
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Modaledit;
