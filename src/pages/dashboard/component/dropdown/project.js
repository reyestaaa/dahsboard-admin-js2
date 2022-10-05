import { Form } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import './dropdownStyle.css'
import { app } from "../../../../config/app"
import axios from 'axios'
import React, {useEffect, useState} from 'react';

const Project = (props) => {

    const [dataProject, setDataProject] = useState([]);
    const [titleProject, setTitle] = useState("");

    useEffect(() => {
        getProject()
    }, [])

    const getProject = async()=>{
        await axios.get(`${app}/indexPro.json`)
        .then(res => {
            setDataProject(res.data)
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
        props.onClickProject(eventKey)
    }
    return(
        <div className="dropdown">
            <span className="text-dropdown"> {props.title} </span>
            <span className="text-dropdown"> : </span>
            <Dropdown onSelect={onSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {titleProject}
                </Dropdown.Toggle>  

                <Dropdown.Menu>
                    {
                        dataProject?.map((value, i) => {
                            return(
                                <Dropdown.Item eventKey={value.id} onClick={(e , value)=>{onClickBtn(e,value)}}>{value.projectname}</Dropdown.Item>
                            )
                        })
                    }                   
                </Dropdown.Menu>
            </Dropdown>
            {/* <Form.Select aria-label="Default select example" className='filter shadow-sm b'>
                {
                    dataProject?.map((value, i) => {
                        return(
                            <option key={i} value={value.id}>{value.projectname}</option>
                        )
                    })
                }
            </Form.Select> */}
        </div>
    )
}

export default Project