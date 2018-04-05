import React, { Component } from 'react';
import { Container, Table } from 'reactstrap'
import './App.css';

// look at homeData.json to see how the data is structured
import homeData from './homeData.json'
console.log(homeData)

class App extends Component {

  state = {
    headings: homeData.headings,
    listings: homeData.listings,
    sortBy: null,
    sortAscending: true
  }

  handleSort(e) {
    console.log(e.target.id)
    this.setState({
      sortBy: e.target.id
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <h1>Home Listings</h1>
          <Table striped bordered>
            {/* table headers */}
            <thead>
              <tr>
                {this.state.headings.map((cat) => {
                  return <th onClick={this.handleSort.bind(this)} id={cat.field} key={cat.field}>{cat.label}</th>
                })}
              </tr>
            </thead>

            {/* table rows */}
            <tbody>
              
                {this.state.listings.map((listings) => {
                  return (
                    <tr key={listings._id}>
                      <td>{listings._id}</td> 
                      <td>{listings.address}</td>
                      <td>{listings.city}</td>
                      <td>{listings.homeType}</td>
                      <td>{listings.bedrooms}</td>
                      <td>{listings.bathrooms}</td>
                      <td>{listings.floorType}</td>
                      <td>{listings.rent}</td>
                  </tr>
                  )
                })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
