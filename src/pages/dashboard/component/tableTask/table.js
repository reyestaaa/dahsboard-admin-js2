import { Table, Button } from "react-bootstrap"
import axios from 'axios'
import { app } from "../../../../config/app"
import React, {useEffect, useState} from 'react';

function TableTask() {

    const [dataListTask, setDataListTask] = useState([])

    useEffect(() => {
        getlistTask()
    }, []);

    const getlistTask = async() => {
        await axios.get(`${app}/indexList%_limit=20`)
        .then(res => {
        setDataListTask(res.data)
        })
        .catch(err => {
        console.log(err)
        })
    }

    return (
        <div className="tablevl">
            <Table bordered hover >
                <thead>
                    <tr>
                        <th width="100">Tasks</th>
                        <th width="100">Next Action</th>
                        <th>Assigned To</th>
                        <th>Created By</th>
                        <th>Update By</th>
                        <th>Last Updated</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataListTask?.map((value, i) => {
                            return(
                                <tr>
                                    <td>
                                        <a href="#!" className="text-decoration-none">{value.taskname}</a>
                                    </td>
                                    <td>-</td>
                                    <td>{value.assignedto}</td>
                                    <td>{value.assignedto}</td>
                                    <td>{value.assignedto}</td>
                                    <td>{value.completedate}</td>
                                    <td>{value.status}</td>
                                    <td>-</td>
                                    <td>
                                        <Button className="me-3 mb-1" variant="danger">
                                            380 day overdue
                                        </Button>
                                        <Button className="me-3 mb-1" variant="primary">
                                            Assigned
                                        </Button>
                                        <Button className="mb-1" variant="success">
                                            Created
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>
        </div>
    );
}

export default TableTask