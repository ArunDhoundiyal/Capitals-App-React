import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {currentCapital: countryAndCapitalsList[0].id}

  onClickChangeOption = event => {
    console.log(event.target.value)
    this.setState({currentCapital: event.target.value})
  }

  getCountryName = currentCapital => {
    const country = countryAndCapitalsList.filter(
      eachArray => eachArray.id === currentCapital,
    )
    return country
  }

  render() {
    const {currentCapital} = this.state
    const countryName = this.getCountryName(currentCapital)
    console.log(countryName[0].country)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="option-container">
            <h1 className="top-heading">Countries And Capitals</h1>
            <select
              value={currentCapital}
              className="option"
              onChange={this.onClickChangeOption}
            >
              {countryAndCapitalsList.map(countryCityArray => (
                <option value={countryCityArray.id} key={countryCityArray.id}>
                  {countryCityArray.capitalDisplayText}
                </option>
              ))}
            </select>
            <span className="capital-text">is capital of which country?</span>
            <p className="country-heading">{countryName[0].country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
