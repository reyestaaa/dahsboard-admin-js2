import { Form } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import './dropdownStyle.css'
import { app } from "../../../../config/app"
import axios from 'axios'
import React, {useEffect, useState} from 'react';

const Module = (props) => {

    const [dataModule, setDataModule] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        getModule()
    }, [props.idProject])

    const getModule = async()=>{
        await axios.get(`${app}/indexMod.json?idProject=${props.idProject}`)
        .then(res => {
            setDataModule(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const onClickBtn = (e, value)=>{
        console.log('e', value)
    }

    const onSelect = (eventKey, event) =>{
        console.log(eventKey,event.target.innerHTML)
        setTitle(event.target.innerHTML)
        props.onClickModule(eventKey)
    }

    return(
        <div className="dropdown">
            <span className="text-dropdown"> {props.title} </span>
            <span className="text-dropdown"> : </span>
            <Dropdown onSelect={onSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {title}
                </Dropdown.Toggle>  

                <Dropdown.Menu>
                    {
                        dataModule?.map((value, i) => {
                            return(
                                <Dropdown.Item eventKey={value.id} onClick={(e , value)=>{onClickBtn(e,value)}}>{value.modulename}</Dropdown.Item>
                            )
                        })
                    }                   
                </Dropdown.Menu>
            </Dropdown>
            {/* <Form.Select aria-label="Default select example" className='filter shadow-sm b'>
                {
                    dataModule?.map((value, i) => {
                        return(
                            <option key={i} value={value.id}>{value.modulename}</option>
                        )
                    })
                }
            </Form.Select> */}
        </div>
    )
}

export default Module