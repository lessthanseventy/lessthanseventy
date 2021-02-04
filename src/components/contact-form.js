import React, { useState } from 'react'
import axios from 'axios'
import styles from './contact-form.module.scss'
import { Input, Textarea, Button } from '@geist-ui/react'

function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://formspree.io/f/xaylkbbz',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form)
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleOnSubmit}>
        <Input
          className={styles.formInput}
          label="E-Mail:"
          id="email"
          type="email"
          name="email"
          placeholder="bojack@hollywoo.com"
          required
        />
        <Textarea
          className={styles.formTextarea}
          placeholder="Enter your message."
          id="message"
          name="message"
        />
        <Button
          className={styles.formButton}
          type="submit"
          disabled={serverState.submitting}
        >
          Submit
        </Button>
        {serverState.status && (
          <p className={!serverState.status.ok ? 'errorMsg' : ''}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
