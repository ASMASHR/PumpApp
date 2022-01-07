import React, { useState } from "react";
import './Auth.css'
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
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../js/action/authAction";

const RegisterModal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    dispatch(register(formData)); //s._id , 
    history.push("/dashboard");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="ButonLoginRegister" onClick={toggle}>
        Register
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <div toggle={toggle} className="HeaderModal">Register</div>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name" className="labelName">Name :</Label>
              <Input className="inputName"
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail" className="labelName">Email :</Label>
              <Input className="inputName"
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Email..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className="labelName">password :</Label>
              <Input className="inputName"
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
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
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RegisterModal;