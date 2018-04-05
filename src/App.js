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

  handleHeadingClick(field) {
    const { sortAscending, sortBy } = this.state
    const newSortAscending = sortBy === field ? !sortAscending : true
    this.setState({
      sortBy: field,
      sortAscending: newSortAscending
    })
  }

  sortedListings() {
    const { listings, sortBy, sortAscending } = this.state
    return [...listings].sort((a, b) => {
      if(a[sortBy] < b[sortBy] && sortAscending) return -1
      if(a[sortBy] > b[sortBy] && !sortAscending) return -1
      if(a[sortBy] > b[sortBy] && sortAscending) return 1
      if(a[sortBy] < b[sortBy] && !sortAscending) return 1
      return 0
    })
  }

  render() {
    console.log(this.state)
    const { headings } = this.state
    return (
      <div className="App">
        <Container>
          <h1>Home Listings</h1>
          <Table striped bordered>
            {/* table headers */}
            <thead>
              <tr>
                {headings.map((h, index) => {
                  return (
                    <th key={index} onClick={this.handleHeadingClick.bind(this, h.field)}>
                      {h.label}
                    </th>
                  )
                })}
              </tr>
            </thead>

            {/* table rows */}
            <tbody>
              {this.sortedListings().map((l) => {
                return (
                  <tr key={l._id}>
                    {Object.keys(l).map((field, index) => {
                      return (
                        <td key={index}>
                          {l[field]}
                        </td>
                      )
                    })}
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
