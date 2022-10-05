import { Card, ListGroup } from "react-bootstrap"
import { app } from "../../../../config/app"
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import './userStyle.css'

let img = "../../image/avatar.png"

const User = () => {

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        getUser()
    }, []);

    const getUser = async()=>{
        await axios.get(`${app}/indexUs`)
        .then(res => {
            setDataUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <>
        <div className="list-user border-top border-1 border-dark">
            <Card className="border-0">
                <ListGroup className="">
                    {
                        dataUser?.map((value, i) => {
                            return(
                                <div className="group-user">
                                    <ListGroup.Item className="d-flex justify-content-evenly align-items-center p-3 bg-primary text-white rounded-0 ">
                                        <div className="user-img img-fluid">
                                            <img src={img} width={50} />
                                        </div>
                                        <div className="user-info lh-1">
                                            <p className="fw-bold">{value.name}</p>
                                            <p>{value.division}</p>
                                        </div>
                                    </ListGroup.Item>
                                </div>
                            )
                        })
                    }
                </ListGroup>
            </Card>
        </div>
        </>
    )
}

export default User