import React from 'react'
import styles from './contact-form.module.scss'
import { Input, Textarea, Button } from '@geist-ui/react'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }

  render() {
    const { status } = this.state
    if (status === 'SUCCESS') {
      return (
        <div className={styles.formWrapper}>
          <p> Thanks! I'll be in touch 😊 </p>
        </div>
      )
    } else if (status === 'ERROR') {
      return (
        <div className={styles.formWrapper}>
          <p className={styles.error}> Something went wrong 😢 Try again.</p>
        </div>
      )
    } else {
      return (
        <div className={styles.formWrapper}>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mzbkwvab"
            method="POST"
          >
            <Input
              className={styles.formInput}
              label="E-Mail:"
              id="email"
              type="email"
              name="_replyto"
              placeholder="bojack@hollywoo.com"
              required
            />
            <Textarea
              className={styles.formTextarea}
              placeholder="Enter your message."
              id="message"
              name="message"
            />
            <input className={styles.formButton} type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
}
