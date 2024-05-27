import React, { useState } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import commonStyles from "./index.css";
import "./index.css";

function AlphabeticCheckBoxes({selectIds,itemList,handleCheck,handleSelectAll,isAllSelected}) {
  const [state, setState] = useState({ alphabet: "All", activateKey: 0 });
  const onAlphabetClick = (e) => {
    const { value } = e.target;

    setState({ ...state, ...{ alphabet: e.target.value } });
  };
  const getAlphabetsItemList = () => {
    let obj = [];
    if (itemList !== undefined) {
      obj = itemList.map((item) => {
        return item.label?.charAt(0).toUpperCase();
      });
    }
    return obj;
  };
  const prepareAlphabets = () => {
    let result = [];
    let selectedObj = getAlphabetsItemList();
    const { alphabet } = state;
    const activate = alphabet === "All" ? 1 : 0;
    result.push(
      <button
        className={`py-1 FilterButton  ${activate === 1 ? 'FilterButtonWikionActive_1' : ''}`}
        type="button"
        onClick={onAlphabetClick}
        value={"All"}
        key={"All"}
      >
        {"All"}
      </button>
    );

    for (let i = 65; i < 91; i++) {
      const activate = alphabet === String.fromCharCode(i) ? 1 : 0;
      result.push(
        <button
          className={`py-1 FilterButton ${activate === 1 ? 'FilterButtonWikionActive_1' : ''}`}
          type="button"
          onClick={onAlphabetClick}
          value={String.fromCharCode(i)}
          key={String.fromCharCode(i)}
          disabled={!selectedObj.includes(String.fromCharCode(i))}
        >
          {String.fromCharCode(i)}
        </button>
      );
    }
    return <>{result}</>;
  };



  const filterItems = (itemList) => {
    const { alphabet } = state;
    let result = itemList || [];

    // Apply alphabet filter
    if (alphabet !== "All" && result && alphabet) {
      result = result.filter(
        (element) =>
          element.label?.charAt(0).toLowerCase() === alphabet.toLowerCase()
      );
    }

    // Sort the result array alphabetically by name
    result.sort((a, b) => a.label.localeCompare(b.label));

    const itemWidth = Math.max(0 / result.length, 4);

    return (
      <>
        <div key="selectAll" className={`col-md-${itemWidth} mb-3 word-break`}>
          <div className="form-check">
            <input
              className={`form_check_input shadow-none rounded-0 filter__checkbox} border-blue`}
              type="checkbox"
              value=""
              id="selectAll"
              onChange={handleSelectAll}
              checked={isAllSelected}
            />
            <label className="form-check-label" htmlFor="selectAll">
              Select All
            </label>
          </div>
        </div>
        {result.map(({ value,label }) => (
          <div key={value} className={`col-md-${itemWidth} mb-3 word-break`}>
            <div className="form-check ">
              <input
                className={`form_check_input shadow-none rounded-0 filter__checkbox border-blue`}
                type="checkbox"
                value=""
                id={value}
                onChange={handleCheck}
                checked={
                  isAllSelected ||
                  (selectIds &&
                    selectIds.includes(value.toString()))
                }
              />
              <label className="form-check-label" htmlFor={value}>
                {label}
              </label>
            </div>
          </div>
        ))}
      </>
    );
  };


  return (
    <>
    <Card className={`card border-0`}>
      <Card.Header className={`cardHeader border-0`}>
      <div className="d-flex">

    </div>

      </Card.Header>

      <Card.Title className={`cardTitle border mb-0 rounded-top`}>
        <div className="ps-3 border-blue">{prepareAlphabets()}</div>
      </Card.Title>

      <Card.Body className={`cardBody border border-top-0 rounded-bottom`}  >
        <div>
        {itemList.length > 0
          ? <div className="row">{filterItems(itemList)}</div>
          : <div className="text-danger text-center">No result found</div>
        }
      </div>

      </Card.Body>
    </Card>
    </>

  );
}
AlphabeticCheckBoxes.propTypes = {
  selectIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleSelectAll: PropTypes.func.isRequired,
  isAllSelected: PropTypes.func.isRequired,
};


export default AlphabeticCheckBoxes;
