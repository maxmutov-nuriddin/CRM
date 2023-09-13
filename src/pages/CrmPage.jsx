/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';

import Forms from '../components/Form'
import Header from '../components/header';
import { Col, Row } from 'react-bootstrap';
import Tables from '../components/Table';

const CrmPage = () => {
  const peopleJson = localStorage.getItem('people');
  const [validated, setValidated] = useState(false);
  const [peoples, setPeoples] = useState(JSON.parse(peopleJson) || []);
  const [people, setPeople] = useState({
    firstName: "",
    price: "",
    category: "",
    quantity: "",
    description: "",
  })

  const handlePeople = useCallback(
    (e) => {
      setPeople({ ...people, [e.target.id]: e.target.value })
    },
    [people]
  )

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      event.preventDefault();

      if (form.checkValidity()) {
        setValidated(false);
        let newPeople = [...peoples, { ...people, id: v4() }]
        setPeoples(newPeople)
        localStorage.setItem('people', JSON.stringify(newPeople))
        setPeople({
          firstName: '',
          price: '',
          category: '',
          quantity: '',
          description: '',
        });
      } else {
        setValidated(true);
      }
    },
    [people, peoples]
  )

  console.log(peoples);

  return (
    <div className=''>
      <Row>
        <Col lg={3}>
          <Forms people={people} validated={validated} handlePeople={handlePeople} handleSubmit={handleSubmit} />
        </Col>
        <Col lg={9}>
          <Header />
          <Tables peoples={peoples}/>
        </Col>
      </Row>
    </div>
  )
}

export default CrmPage