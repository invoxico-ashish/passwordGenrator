import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
    return <Button color={props.color}  size="sm" onClick={()=> console.log(props.color)}>{props.color}</Button>;
};