import React from 'react'
import ContactUs from '../components/Term-hero'
import TermsAndConditions from '../components/Termpolicy'
import Header from '../components/Header'

const TermCondition = () => {
  return (
    <div>
      <Header />
      <ContactUs title="Terms & Conditions" />
      <TermsAndConditions />
    </div>
  )
}

export default TermCondition