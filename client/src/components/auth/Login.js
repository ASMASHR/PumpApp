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

import { login } from "../../js/action/authAction";

const LoginModal = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleConfim = () => {
    dispatch(login(formData));
    history.push("/");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="ButonLoginRegister"onClick={toggle}>
        Login
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <div toggle={toggle} className="HeaderModal">Login</div>
        <ModalBody>
          <Form>
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
              <Label for="password"className="labelName">password :</Label>
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
          <Button color="primary" onClick={handleConfim}>
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

export default LoginModal;
