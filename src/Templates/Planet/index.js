import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import 'moment-timezone';

class Planet extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.getPlanet = this.getPlanet.bind(this);
    }

    componentDidMount() {
        this.getPlanet();
    }

    async getPlanet() {
        let data = await axios
            .get("https://swapi.dev/api/planets")
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({ planets: data.data.results });
    }

    render() {
        const { planets } = this.state;
        return (
            <div>
                <h3>https://swapi.dev/api/planets/</h3>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Diameter</th>
                            <th>Population</th>
                            <th>Gravity</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    {planets && planets.map(planet => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{planet.name}</td>
                                    <td>{planet.diameter}</td>
                                    <td>{planet.population}</td>
                                    <td>{planet.gravity}</td>
                                    <td><Moment format="DD MMM YYYY">{planet.created.toString("dd")}</Moment></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        )
    }
}

export default Planet;