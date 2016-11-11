import React from 'react';

const AddCustom = (props) => (
  <div className="user-reddit-titles add">
    <input placeholder="Add sub-Reddit" type="text" id="add-text" className="add-input"/>
    <div className="add-button" onClick={props.add}>
      Add
    </div>    
  </div>
);

export default AddCustom;