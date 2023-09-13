import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";

import '../css/login.css'



const LoginPage = ({ setLog }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (user.username === "mv_nuriddin" && user.password === "012707") {
      navigate("/");
      setLog(true)
      localStorage.setItem("logs", true);
    } else {
      toast.error("Error");
    }
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Form className="login-field login-background gap-4" onSubmit={submit}>
          <div className="login-title">
            <span>Sign In</span>
          </div>
          <Form.Group className="field username-field" controlId="username">
            <Form.Control
              value={user.username}
              onChange={handleUser}
              required
              type="text"
              placeholder="username"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="field password-field" controlId="password">
            <Form.Control
              value={user.password}
              onChange={handleUser}
              required
              type="password"
              placeholder="password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <div className="field button-field">
            <Button className=" button button-login" type="submit">
              login
            </Button>
          </div>
          <h1 className=" text-info position-absolute title-name" >mv_nuriddin</h1>
        </Form>
      </div>
      <span className="square square-tr"></span>
      <span className="square square-tl"></span>
      <span className="square square-bl"></span>
      <span className="square square-br"></span>
      <span className="star star1"></span>
      <span className="star star2"></span>
    </>
  );
};

LoginPage.propTypes = {
  setLog: PropTypes.func,
}

export default LoginPage;
