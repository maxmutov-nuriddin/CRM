/* eslint-disable react/prop-types */
import { Form, InputGroup } from "react-bootstrap"
import PropTypes from "prop-types";
import { memo } from "react";

import { sorts } from "../js/data"
import { data } from "../js/data"

const Header = ({ search, handleSearch, sortedPeoples, handleCategory }) => {
  return (
    <div className="d-flex my-3">
      <InputGroup>
        <Form.Control
          value={search}
          onChange={handleSearch}
          placeholder="Search product..."
        />
      </InputGroup>
      <Form.Select onChange={sortedPeoples}>
        {sorts.map((gr) => (
          <option key={gr} value={gr}>
            {gr}
          </option>
        ))}
      </Form.Select>
      <Form.Select onChange={handleCategory}>
        <option value="all">all</option>
        {data.map((gr) => (
          <option key={gr} value={gr}>
            {gr}
          </option>
        ))}
      </Form.Select>
    </div>
  )
}


Header.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
};

const MemoHeader = memo(Header)

export default MemoHeader