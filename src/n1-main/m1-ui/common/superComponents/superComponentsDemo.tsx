import React from 'react';
import SuperInputText from "./SuperInputText/SuperInputText";
import SuperButton from "./SuperButton/SuperButton";
import SuperCheckbox from "./SuperCheckbox/SuperCheckbox";
import SuperRadio from "./SuperRadio/SuperRadio";
import SuperSelect from "./SuperSelect/SuperSelect";
import SuperEditableSpan from "./SuperEditableSpan/SuperEditableSpan";

const SuperComponentsDemo = () => {
    return (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <br/>
            <SuperInputText/>
            <br/>
            <SuperButton>Button</SuperButton>
            <br/>
            <SuperCheckbox/>
            <br/>
            <SuperRadio/>
            <br/>
            <SuperSelect/>
            <br/>
            <SuperEditableSpan/>
        </div>
    );
};

export default SuperComponentsDemo;