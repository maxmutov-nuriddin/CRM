import { memo } from "react";

import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

const Tables = ({ peoples }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>firstName</th>
            <th>price</th>
            <th>category</th>
            <th>quantity</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {peoples.length ? (
            peoples.map((people, i) => (
              <tr key={people.id}>
                <td>{i + 1}</td>
                <td>{people.firstName}</td>
                <td>{people.price}</td>
                <td>{people.category}</td>
                <td>{people.quantity}</td>
                <td>{people.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No peoples
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

Tables.propTypes = {
  peoples: PropTypes.array
};

const MemoTables = memo(Tables)

export default MemoTables;