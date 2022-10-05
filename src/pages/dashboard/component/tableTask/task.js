import { InputGroup, Form, DropdownButton, Dropdown, Table, Button } from "react-bootstrap"
import axios from 'axios'
import { app } from "../../../../config/app"
import React, {useEffect, useState} from 'react';

const Task = () => {

    // search
    const [dataSearch, setDataSearch] = useState("")

    // const [dataSearch, setDataSearch] = useState([]);
    // const [dataInput, setDataInput] = useState([]);

    // useEffect(() => {
    //     getSearlist()
    // }, [])

    // const getSearlist = async() => {
    //     await axios.get(`${app}/indexSear.json?taskname=${dataInput}`)
    //     .then(res => {
    //         setDataSearch(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // data list task
    const [dataListTask, setDataListTask] = useState([])

    useEffect(() => {
        getlistTask()
    }, []);

    const getlistTask = async() => {
        await axios.get(`${app}/indexList`)
        .then(res => {
        setDataListTask(res.data)
        })
        .catch(err => {
        console.log(err)
        })
    }

    return(
        <>
        <div className="text-light bg-secondary d-flex align-items-center">
            <i class="bx bx-cloud-download bx-md"></i>
            <h3 className="fw-bold ms-3">Assigned Task</h3>
        </div>

        <div className="d-flex justify-content-between mt-3">

            {/* record per page */}
            <div className="d-flex align-items-center">
                <InputGroup className="w-50">
                    <Form.Control aria-label="Text input with dropdown button" />
                    <DropdownButton variant="outline-secondary" title="" id="input-group-dropdown-2" align="end" >
                        <Dropdown.Item href="#">5</Dropdown.Item>
                        <Dropdown.Item href="#">10</Dropdown.Item>
                        <Dropdown.Item href="#">15</Dropdown.Item>
                        <Dropdown.Item href="#">20</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
                <p className="ms-4 mt-3 fw-bold">Record Per Page</p>
            </div>

            {/* search */}
            <div className="d-flex align-items-center">
                <p className="mt-3 fw-bold">Search:</p>
                <input type="search" class="form-control ms-3" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={event => setDataSearch(event.target.value)} />
            </div>

        </div>

        {/* pagination */}
        <div className="d-flex justify-content-between mt-4">
            <p>Showing 1 to 5 of 100 entries</p>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="bx bx-left-arrow-alt"></i> Previous
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Next <i class="bx bx-right-arrow-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        {/* table list task */}
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
                        dataListTask.filter(value => {
                            if (dataSearch === '') {
                                return value;
                            } else if (value.taskname.toLowerCase().includes(dataSearch.toLowerCase())) {
                                return value;
                            }
                        })?.map((value, i) => {
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

        {/* pagination */}
        <div className="d-flex justify-content-between mt-4">
            <p>Showing 1 to 5 of 100 entries</p>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="bx bx-left-arrow-alt"></i> Previous
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Next <i class="bx bx-right-arrow-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Task

// import { InputGroup, Form, DropdownButton, Dropdown } from "react-bootstrap"
// import Table from './table'
// import Pagination from './pagination'
// import axios from 'axios'
// import { app } from "../../../../config/app"
// import React, {useEffect, useState} from 'react';

// const Task = () => {
//     const [dataSearch, setDataSearch] = useState([]);
//     const [dataInput, setDataInput] = useState([]);

//     useEffect(() => {
//         getSearlist()
//     }, [])

//     const getSearlist = async() => {
//         await axios.get(`${app}/indexSear.json?taskname=${dataInput}`)
//         .then(res => {
//             setDataSearch(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
//     return(
//         <>
//         <div className="text-light bg-secondary d-flex align-items-center">
//             <i class="bx bx-cloud-download bx-md"></i>
//             <h3 className="fw-bold ms-3">Assigned Task</h3>
//         </div>

//         <div className="d-flex justify-content-between mt-3">
//             <div className="d-flex align-items-center">
//                 <InputGroup className="w-50">
//                     <Form.Control aria-label="Text input with dropdown button" />
//                     <DropdownButton variant="outline-secondary" title="" id="input-group-dropdown-2" align="end" >
//                         <Dropdown.Item href="#">5</Dropdown.Item>
//                         <Dropdown.Item href="#">10</Dropdown.Item>
//                         <Dropdown.Item href="#">15</Dropdown.Item>
//                         <Dropdown.Item href="#">20</Dropdown.Item>
//                     </DropdownButton>
//                 </InputGroup>
//                 <p className="ms-4 mt-3 fw-bold">Record Per Page</p>
//             </div>
//             <div className="d-flex align-items-center">
//                 <p className="mt-3 fw-bold">Search:</p>
//                 <input type="search" class="form-control ms-3" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e) => setDataInput(e)} />
//                 {/* <button type="button" class="btn btn-outline-primary">search</button> */}
//             </div>
//         </div>

//         <Pagination />

//         <Table />

//         <Pagination />
//         </>
//     )
// }

// export default Task