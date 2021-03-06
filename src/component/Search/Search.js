import React, { useState } from "react"
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux'
import {getTasks} from '..//..//store//action'
import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCalendarAlt} />
const statuses = [
    {
        label: "Reset",
        value: "",
    },
    {
        label: "Active",
        value: "active",
    },
    {
        label: "Done",
        value: "done",
    }
]
const sortOptions = [
    {
        label: 'Reset',
        value: ''
    },
    {
        label: 'A-Z',
        value: 'a-z'
    },
    {
        label: 'Z-A',
        value: 'z-a'
    },
    {
        label: 'Creation date oldest',
        value: 'creation_date_oldest'
    },
    {
        label: 'Creation date newest',
        value: 'creation_date_newest'
    },
    {
        label: 'Completion date oldest',
        value: 'completion_date_oldest'
    },
    {
        label: 'Completion date newest',
        value: 'completion_date_newest'
    },
];
const dateOptions = [
    {
        label: 'Create later than',
        value: 'create_lte'
    },
    {
        label: 'Create earlier than',
        value: 'create_gte'
    },
    {
        label: 'Complete later than',
        value: 'complete_lte'
    },
    {
        label: 'Complete earlier than',
        value: 'complete_gte'
    },
]
function Search(props) {
    const [status, setStatus] = useState({
        label: "",
        value: "",
    })
    const [sort, setSort] = useState({
        label: "",
        value: "",
    })

    const [dates, setDates] = useState({
        create_lte: null,

        create_gte: null,

        complete_lte: null,

        complete_gte: null,
    })
    const [search, setSearch] = useState("")
    const onSubmit = () => {
        const data = {}
        const { create_gte, create_lte, complete_gte, complete_lte } = dates

        if (create_lte) data.create_lte = create_lte.toLocaleDateString()
        if (create_gte) data.create_gte = create_gte.toLocaleDateString()
        if (complete_gte) data.complete_gte = complete_gte.toLocaleDateString()
        if (complete_lte) data.complete_lte = complete_lte.toLocaleDateString()
        if (search) data.search = search;
        if (sort) data.sort = sort.value;
        if (status) data.status = status.value;
        props.getTasks(data)
    }
    return (
        <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title={status.value ? status.label : "Status"}>
                                {
                                    statuses.map((item, index) => {
                                        return (
                                            <NavDropdown.Item
                                                key={index}
                                                onClick={() => setStatus(item)}
                                                active={status.value === item.value}
                                            >{item.label}
                                            </NavDropdown.Item>
                                        )
                                    })
                                }


                            </NavDropdown>
                            <NavDropdown title={sort.value ? sort.label : "Sort"}>
                                {
                                    sortOptions.map((item, index) => {
                                        return (
                                            <NavDropdown.Item
                                                key={index}
                                                onClick={() => setSort(item)}
                                                active={sort.value === item.value}
                                            >{item.label}
                                            </NavDropdown.Item>
                                        )
                                    })
                                }


                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                value={search}
                                onChange={(event) => {
                                    setSearch(event.target.value)
                                }}
                            />
                            <Button
                                variant="outline-primary"
                                onClick={onSubmit}
                            >Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                {
                    dateOptions.map((item, index) => {
                        return (
                            <div key={index}>
                                <span className={styles.dateText}>
                                    <h6>{item.label}</h6>
                                </span>
                                <DatePicker
                                     className={styles.datepicker}
                                    selected={dates[item.value]}
                                    onChange={(date) => {
                                        setDates({
                                            ...dates,
                                            [item.value]: date
                                        })
                                    }}
                                />
                                 {element}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
const mapDispatchToProps = {
      getTasks
}
export default connect(null, mapDispatchToProps)(Search)