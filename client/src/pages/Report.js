import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Report extends Component {
    state = {
        userName: "",
        personalSpir: "",
        persEmot: "",
        persHealth: "",
        persPrReq: "",
        prTime: "",
        prPeople: "",
        prEffect: "",
        upgsEngaged: "",
        upgsEffect: "",
        strategicFocus: "",
        numFocus: "",
        timeFocus: "",
        training: "",
        date: "",
        trainingResult: "",
        fieldWorkers: "",
        mobilizers: "",
        partnerCare: "",
        stories: ""
    };

    componentDidMount() {
        this.loadReport();
    }

    loadReport = () => {
        API.getReport()
            .then(res =>
                this.setState({
                    report: res.data, userName: "", personalSpir: "",
                    persEmot: "",
                    persHealth: "",
                    persPrReq: "",
                    prTime: "",
                    prPeople: "",
                    prEffect: "",
                    upgsEngaged: "",
                    upgsEffect: "",
                    strategicFocus: "",
                    numFocus: "",
                    timeFocus: "",
                    training: "",
                    date: "",
                    trainingResult: "",
                    fieldWorkers: "",
                    mobilizers: "",
                    partnerCare: "",
                    stories: ""
                })
            )
            .catch(err => console.log(err));
    };

    deleteReport = id => {
        API.deleteReport(id)
            .then(res => this.loadReport())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        
            API.saveReport({
                userName: this.state.userName,
                personalSpir: this.state.personalSpir,
                persEmot: this.state.persEmot,
                persHealth: this.state.persHealth,
                persPrReq: this.state.persPrReq,
                prTime: this.state.prTime,
                prPeople: this.state.prPeople,
                prEffect: this.state.prEffect,
                upgsEngaged: this.state.upgsEngaged,
                upgsEffect: this.state.upgsEffect,
                strategicFocus: this.state.strategicFocus,
                numFocus: this.state.numFocus,
                timeFocus: this.state.timeFocus,
                training: this.state.training,
                date: this.state.date,
                trainingResult: this.state.trainingResult,
                fieldWorkers: this.state.fieldWorkers,
                mobilizers: this.state.mobilizers,
                partnerCare: this.state.partnerCare,
                stories: this.state.stories
            })
                .then(res => this.loadReport())
                .catch(err => console.log(err));
        
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-2 sm-1"></Col>
                    <Col size="md-4">
                        <Jumbotron>
                            <h1>Quarterly Report</h1>
                        </Jumbotron>
                        
                        <form>
                            <Input
                                value={this.state.userName}
                                onChange={this.handleInputChange}
                                name="userName"
                                placeholder="User Name (required)"
                            />
                            <Input
                                value={this.state.personalSpir}
                                onChange={this.handleInputChange}
                                name="personalSpir"
                                placeholder="Rate your spiritual health"
                            />
                            <TextArea
                                value={this.state.persEmot}
                                onChange={this.handleInputChange}
                                name="persEmot"
                                placeholder="Rate your emotional health"
                            />
                            <FormBtn
                                disabled={!(this.state.userName)}
                                onClick={this.handleFormSubmit}
                            >
                            
                                Submit Report
              </FormBtn>
                        </form>
                    </Col>
                   
                </Row>
            </Container>
        );
    }
}

export default Report;
