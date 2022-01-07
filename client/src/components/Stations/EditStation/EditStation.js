import React, { useState } from "react";
import './Edit.css'
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
import { edit_station,edit_stationuser } from "../../../js/action/authAction";

const EditStation = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    pumpnumber: "",
    pumptype: "",
    intervention:"",
  });
   const [formData1, setFormData1] = useState({
    pumpnumber: "",
    pumptype: "",
    intervention:"",
  });
const userRole = useSelector(state => state.authReducer.user.role)
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormChangeUser = (e) =>
    setFormData1({ ...formData1, [e.target.name]: e.target.value });

    const handleConfim = () => {
    console.log(formData)
    if(userRole==1)
    dispatch(edit_station(props.s._id, formData));
    else
    dispatch(edit_stationuser(props.s._id, formData1))
    // history.push("/dashboard");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="buttonEdit" onClick={toggle}>
        Edit
      </button>

      {userRole==1?
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Station</ModalHeader>
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
      </Modal>:
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Station</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="pumpnumber">Pump Number</Label>
              <Input
                onChange={handleFormChangeUser}
                type="number"
                name="pumpnumber"
               
                placeholder="Enter your pumpnumber..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="pumptype">Pump Type</Label>
              <Input
                onChange={handleFormChangeUser}
                type="string"
                name="pumptype"
                
                placeholder="Enter your pumptype..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="intervention">Intervention</Label>
              <Input
                onChange={handleFormChangeUser}
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
      }
    </div>
  );
};

export default EditStation;
