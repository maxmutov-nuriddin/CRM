/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Button, Form } from "react-bootstrap"

const Forms = ({ people, validated, handlePeople, handleSubmit }) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className='mb-4 mt-5' controlId="firstName">
        <Form.Control
          onChange={handlePeople}
          required
          value={people.firstName}
          type="text"
          placeholder="First name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-4' controlId="price">
        <Form.Control
          onChange={handlePeople}
          required
          value={people.price}
          type="number"
          placeholder="Price"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-4' controlId="category">
        <Form.Control
          onChange={handlePeople}
          required
          value={people.category}
          type="text"
          placeholder="Category"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-4' controlId="quantity">
        <Form.Control
          onChange={handlePeople}
          required
          value={people.quantity}
          type="number"
          placeholder="Quantity"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-4' controlId="description">
        <Form.Control
          onChange={handlePeople}
          required
          value={people.description}
          type="text"
          placeholder="Description"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Button className="mt-3 w-100" type="submit">Submit form</Button>
    </Form>
  )
}

Forms.displayName = "Forms";



Forms.propTypes = {
  validated: PropTypes.bool,
  handelForm: PropTypes.func,
  handlePeople: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const MemoForms = memo(Forms)

export default MemoForms