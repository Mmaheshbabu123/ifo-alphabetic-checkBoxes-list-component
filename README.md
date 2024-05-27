# ifo-alphabetic-checkBoxes-list-component

# Alphabetic All Component

This component renders a list of checkboxes and provides functionality to select individual checkboxes or select all checkboxes at once.

## Installation

First, ensure you have the `ifo-alphabetic-checkboxes-list-component` installed:

```sh
npm i ifo-alphabetic-checkboxes-list-component
```
#Usage

```.jsx
import React, { useState } from 'react';
import AlphabaticCheckboxes from 'ifo-alphabetic-checkboxes-list-component';

const AlphabeticAll = () => {
  const [state, setState] = useState({
    items: [
      { value: '1', label: 'A1' },
      { value: '2', label: 'A2' },
      { value: '3', label: 'A3' },
      { value: '4', label: 'A4' },
      { value: '5', label: 'A5' },
      { value: '6', label: 'b1' },
    ],
    isAllSelected: false,
    selectIds: [],
  });

  const handleCheck = (e) => {
    const { id, checked } = e.target;
    // Handle individual checkbox check/uncheck logic here
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    // Handle select all check/uncheck logic here
  };

  const { items, isAllSelected, selectIds } = state;

  return (
    <>
      <AlphabaticCheckboxes
        itemList={items}
        handleCheck={handleCheck}
        selectIds={selectIds}
        handleSelectAll={handleSelectAll}
        isAllSelected={isAllSelected}
      />
    </>
  );
};

export default AlphabeticAll;
```
#Explanation
<ul>
    <li>items: An array of objects, each representing a checkbox with a value and label.</li>
    <li>isAllSelected: A boolean indicating whether all checkboxes are selected.</li>
   <li>selectIds: An array of selected checkbox ids.</li>
    <li>handleCheck: A function to handle the checking and unchecking of individual checkboxes.</li>
<li>handleSelectAll: A function to handle the checking and unchecking of the "select all" checkbox.</li>
</ul>
<p>Once its done its look like below image will load</p>

![checkboxeslist](https://github.com/Mmaheshbabu123/ifo-alphabetic-checkBoxes-list-component/assets/29708637/0a9140bc-b94a-4ed6-83fe-a74d1a43cd4d)

<p>Thanks for downloading package </p>

