import React,{useState} from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./style.css"
import "react-timelines/lib/css/style.css"
import Project from "./component/dropdown/project"
import Module from "./component/dropdown/module"
import Speedometer  from "./component/speedo/speedometer"
import Speedometer2  from "./component/speedo/speedometer2"
import TaskDistribution from "./component/taskDistribution/taskDistribution"
import Periode from "./component/periode/periode"
import ListUser from "./component/user/user"
import Task from "./component/tableTask/task"

export default function dashboard() {

    const [idProject , setIdProject] = useState(0);
    const [idModule , setIdModule] = useState([]);

    const onClickProject = (id)=>{   
    
        setIdProject(id)
    }

    const onClickModule = (id)=>{   
    
        setIdModule(id)
    }
//gimana tu ul
//bentar gw bikinin function aja kali ya, gw bisanya pake function db
//okehh


    return (
        <Container fluid className="container-dashboard">
            <Row>

                {/* Project, Module, Speedometer, Task Distribution */}
                <Col md={9} className="border-end border-1 border-dark">
                    <Row>

                        {/* Dropdown Project Module */}
                        <Col md={6}>
                            <Project title="Project" onClickProject={(id)=>{onClickProject(id)}} />
                        </Col>

                        <Col md={6}>
                            <Module title="Module" idProject={idProject}  onClickModule={(id)=>{onClickModule(id)}} />
                        </Col>

                        {/* Speedometer */}
                        <Col md={4}>
                            <Speedometer idProject={idProject} idModule={idModule} name="completed" title="Completed Task"></Speedometer>
                        </Col>
                        <Col md={4}>
                            <Speedometer idProject={idProject} idModule={idModule}  name="onprogress" title="Task In Progress"></Speedometer>
                        </Col>
                        <Col md={4}>
                            <Speedometer idProject={idProject} idModule={idModule} name="overdueNumeric" title="Overdue Task"></Speedometer>
                        </Col>

                        {/* Task Distribution */}
                        {/* <Timeline /> */}
                        <TaskDistribution />

                    </Row>
                </Col>

                {/* Periode, List User */}
                <Col md={3} className="side-scroll p-0">

                    {/* Periode */}
                    <Periode className="border-bottom border-1 border-dark" />

                    {/* List User */}
                    <ListUser />

                </Col>

                {/* Table List Task */}
                <Col md={12} className="border-top border-dark p-4">
                    <Task />
                </Col>

            </Row>
        </Container>
    )
}
