import React, { useState } from 'react'
import axios from 'axios'
import styles from './contact-form.module.scss'
import { Input, Textarea, Button } from '@geist-ui/react'

const ContactForm = function () {
  return (
    <div className={styles.formWrapper}>
      <form method="post" action="https://formspree.io/f/mzbkwvab">
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

export default ContactForm
