// /* eslint-disable react-hooks/exhaustive-deps */
// import { useCallback, useMemo, useState } from 'react';
// import { v4 } from 'uuid';

// import Forms from '../components/Form'
// import Header from '../components/header';
// import { Col, Row } from 'react-bootstrap';
// import Tables from '../components/Table';

// const CrmPage = () => {
//   const peopleJson = localStorage.getItem('people');
//   const [validated, setValidated] = useState(false);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   const [filter, setFilter] = useState("");
//   const [peoples, setPeoples] = useState(JSON.parse(peopleJson) || []);
//   const [people, setPeople] = useState({
//     firstName: "",
//     price: "",
//     category: "",
//     quantity: "",
//     description: "",
//   })

//   const handlePeople = useCallback(
//     (e) => {
//       setPeople({ ...people, [e.target.id]: e.target.value })
//     },
//     [people]
//   )

//   const handleSubmit = useCallback(
//     (event) => {
//       const form = event.currentTarget;
//       event.preventDefault();

//       if (form.checkValidity()) {
//         setValidated(false);
//         let newPeople = [...peoples, { ...people, id: v4() }]
//         setPeoples(newPeople)
//         localStorage.setItem('people', JSON.stringify(newPeople))
//         setPeople({
//           firstName: '',
//           price: '',
//           category: '',
//           quantity: '',
//           description: '',
//         });
//       } else {
//         setValidated(true);
//       }
//     },
//     [people, peoples]
//   )

//   const handleSearch = useCallback((e) => {
//     setSearch(e.target.value.trim().toLowerCase())
//   }, []);

//   let results = useMemo(
//     () =>
//       peoples.filter(
//         (el) =>
//           el.firstName.toLowerCase().includes(search)
//       ),
//     [search, peoples]
//   );

//   const sortedPeoples = useCallback((e) => {
//     setSort(e.target.value)
//     console.log(e.target.value);
//   }, []);

//   let sortedResults = useMemo(() => {
//     let sorted = [...results];
//     console.log(sort);
//     if (sort !== "all") {
//       sorted.sort((a, b) => {
//         const priceA = Number(a.price);
//         const priceB = Number(b.price);
//         if (sort === "asc") {
//           return priceA - priceB;
//         } else if (sort === "desc") {
//           return priceB - priceA;
//         }
//         return 0;
//       });
//     }
//     return sorted;
//   }, [results, sort]);

//   const handleCategory = useCallback((e) => {
//     setFilter(e.target.value)
//     console.log(e.target.value);
//   }, []);

//   if (filter !== "all") {
//     sortedResults = sortedResults.filter((todo) => todo.Category === filter);
//     console.log(sortedResults);
//   }

//   return (
//     <div className=''>
//       <Row>
//         <Col lg={3}>
//           <Forms people={people} validated={validated} handlePeople={handlePeople} handleSubmit={handleSubmit} />
//         </Col>
//         <Col lg={9}>
//           <Header handleSearch={handleSearch} search={search} setSort={setSort} sortedPeoples={sortedPeoples} handleCategory={handleCategory} />
//           <Tables peoples={sortedResults} />
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default CrmPage;


/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from 'react';
import { v4 } from 'uuid';

import Forms from '../components/Form';
import Header from '../components/header';
import { Col, Row } from 'react-bootstrap';
import Tables from '../components/Table';

const CrmPage = () => {
  const peopleJson = localStorage.getItem('people');
  const [validated, setValidated] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');
  const [peoples, setPeoples] = useState(JSON.parse(peopleJson) || []);
  const [people, setPeople] = useState({
    firstName: '',
    price: '',
    category: '',
    quantity: '',
    description: '',
  });

  const handlePeople = useCallback(
    (e) => {
      setPeople({ ...people, [e.target.id]: e.target.value });
    },
    [people]
  );

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      event.preventDefault();

      if (form.checkValidity()) {
        setValidated(false);
        let newPeople = [...peoples, { ...people, id: v4() }];
        setPeoples(newPeople);
        localStorage.setItem('people', JSON.stringify(newPeople));
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
  );

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value.trim().toLowerCase());
  }, []);

  let results = useMemo(
    () =>
      peoples.filter(
        (el) =>
          el.firstName.toLowerCase().includes(search)
      ),
    [search, peoples]
  );

  const sortedPeoples = useCallback((e) => {
    setSort(e.target.value);
  }, []);

  let sortedResults = useMemo(() => {
    let sorted = [...results];
    if (sort !== '') {
      sorted.sort((a, b) => {
        const priceA = Number(a.price);
        const priceB = Number(b.price);
        if (sort === 'asc') {
          return priceA - priceB;
        } else if (sort === 'desc') {
          return priceB - priceA;
        }
        return 0;
      });
    }
    return sorted;
  }, [results, sort]);

  const handleCategory = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  let filteredResults = useMemo(() => {
    if (filter !== '') {
      if (filter === 'all') {
        return sortedResults;
      } else {
        return sortedResults.filter((el) => el.category === filter);
      }
    } else {
      return sortedResults;
    }
  }, [sortedResults, filter]);

  return (
    <div className="">
      <Row>
        <Col lg={3}>
          <Forms people={people} validated={validated} handlePeople={handlePeople} handleSubmit={handleSubmit} />
        </Col>
        <Col lg={9}>
          <Header handleSearch={handleSearch} search={search} setSort={setSort} sortedPeoples={sortedPeoples} handleCategory={handleCategory} />
          <Tables peoples={filteredResults} />
        </Col>
      </Row>
    </div>
  );
};

export default CrmPage;