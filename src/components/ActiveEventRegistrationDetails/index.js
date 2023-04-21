// Write your code here
import './index.css'
import {Component} from 'react'

const Registeration = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  DefaultPage = () => (
    <p className="Active-DefaultPage-heading-style">
      Click on an event, to view its registration details
    </p>
  )

  RegisteredPage = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registred-img-size"
      />
      <h1 className="registred-heading-style">
        You have already registered for the event
      </h1>
    </>
  )

  yetToRegisterPage = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-para-style">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yest-to-button" type="button">
        Register Here
      </button>
    </>
  )

  RegistrationsClosedPage = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registerdClosed-img-style"
      />
      <h1 className="registred-heading-style">Registrations Are Closed Now!</h1>
      <p className="yet-to-para-style">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </>
  )

  switchCase = () => {
    const {registrationDetails} = this.props

    switch (registrationDetails) {
      case Registeration.registered:
        return this.RegisteredPage()

      case Registeration.yetToRegister:
        return this.yetToRegisterPage()

      case Registeration.registrationsClosed:
        return this.RegistrationsClosedPage()

      default:
        return this.DefaultPage()
    }
  }

  render() {
    const {registrationDetails} = this.props
    console.log(registrationDetails)
    return <div className="registeration-container">{this.switchCase()}</div>
  }
}
export default ActiveEventRegistrationDetails
