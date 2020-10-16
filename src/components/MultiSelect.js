// src/components/MultiSelect.js
import React from "react";

function MultiSelect(props) {

    return (
        <select id={"multiSelect"} multiple={true}
            style={{margin : "10px 0 0 20px", minHeight: "350px", width: "100px"}}> 
             {props.options.map((optionObject) => {
                 return <option key={optionObject.optionValue} value={optionObject.optionValue} 
                    selected={optionObject.selected ? "selected" : ""}>{optionObject.textValue}</option>;
             })}
        </select>
    );
}



export default MultiSelect;
