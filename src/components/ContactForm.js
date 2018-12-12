import React from 'react'
import styled from 'styled-components'

const ContactForm = props => {
  return(
    <form className="w-100" name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-group">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" className="form-control rounded-0 here" required="required"/>
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input id="email" name="email" type="text" required="required" className="form-control rounded-0 here"/>
      </div>
      <div className="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" cols="40" rows="5" required="required" className="form-control rounded-0"></textarea>
      </div>
      <div className="form-group">
        <label>Newsletter</label>
        <div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
          <input name="checkbox" type="checkbox" className="form-check-input" value="subscribe" aria-describedby="checkboxHelpBlock" checked="checked"></input>
              Subscribe
          </label>
        </div>
        <span id="checkboxHelpBlock" className="form-text text-muted">You may unsubscribe at any time</span>
        </div>
      </div>
      <div className="form-group">
        <button name="submit" type="submit" className="btn btn-primary btn-lg rounded-0">Submit</button>
      </div>
    </form>
  )
}

export default ContactForm
