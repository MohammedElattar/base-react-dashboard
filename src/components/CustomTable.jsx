import React, { Fragment, useState } from "react";
import { Button, Card, CardHeader, CardTitle, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Row, UncontrolledButtonDropdown } from "reactstrap";
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { ChevronDown, Copy, FileText, Grid, Plus, Printer, Share } from "react-feather";
import DataTable from 'react-data-table-component';
import { paginationComponent } from "../helpers/paginationHelper";

const CustomTable = ({ columns, data, pagination = false, searchable = true, entriesPerPageOptions = [5, 10, 25, 50, 75, 100] }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleEntriesChange = e => {
        console.log(e)
    }

    const handleSearch = e => {
        setSearchValue(e.target.value);
    }

    return (
        <Fragment>
            <Row>
                <Col sm='12'>
                    <Fragment>
                        <Card>
                            <CardHeader className='border-bottom'>
                                <CardTitle tag='h4'>Categories</CardTitle>
                                <div className='d-flex mt-md-0 mt-1'>
                                    <Button className='ms-2' color='primary'>
                                        <Plus size={15} />
                                        <span className='align-middle ms-50'>Add Record</span>
                                    </Button>
                                </div>
                            </CardHeader>
                            <Row className='mx-0 mt-1 mb-50'>
                                {pagination && (
                                    <Col sm='6'>
                                        <div className='d-flex align-items-center'>
                                            <Label for='entries-select'>Show</Label>
                                            <Input
                                                className='dataTable-select'
                                                type='select'
                                                id='entries-select'
                                                value={entriesPerPageOptions[0]}
                                                onChange={handleEntriesChange}
                                            >
                                                {entriesPerPageOptions.map(option => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </Input>
                                            <Label for='entries-select'>entries</Label>
                                        </div>
                                    </Col>
                                )}
                                {searchable && (
                                    <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
                                        <Label className='me-1' for='search-input'>
                                            Search
                                        </Label>
                                        <Input
                                            className='dataTable-filter'
                                            type='text'
                                            bsSize='sm'
                                            id='search-input'
                                            value={searchValue}
                                            onChange={handleSearch}
                                        />
                                    </Col>
                                )}
                            </Row>
                            <div className='react-dataTable'>
                                <DataTable
                                    bordered
                                    noHeader
                                    pagination={pagination}
                                    paginationComponent={() => paginationComponent({ count: 100, currentPage: 1 })}
                                    paginationServer
                                    className='react-dataTable'
                                    columns={columns}
                                    sortIcon={<ChevronDown size={10} />}
                                    data={data}
                                />
                            </div>
                        </Card>
                    </Fragment>
                </Col>
            </Row>
        </Fragment >
    );
}

export default CustomTable;
