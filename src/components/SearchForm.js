import React, { Component } from 'react'

class SearchForm extends Component {

  render() {
    return(
      <div>

        <div className="input-group mb-5">
          <input className="form-control rounded-0 py-2" id="example-search-input"
          type="search"
          placeholder="Search..."
          onChange={this.filterList}
          ></input>
          <span className="input-group-append">
            <button className="btn btn-primary rounded-0" type="button">
              <i className="fas fa-search"></i>
            </button>
          </span>
        </div>

      </div>
    )
  }
}

export default SearchForm
