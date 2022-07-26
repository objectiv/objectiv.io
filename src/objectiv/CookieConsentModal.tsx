/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React, { useContext } from 'react';
import Modal from 'react-modal';
import { CookieConsentContext } from "./CookieBanner";
import clsx from "clsx";
import styles from "./styles.module.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

};

Modal.setAppElement('#__docusaurus');

export const CookieConsentModal = ({ isOpen = false, closeModal }:{ isOpen: boolean, closeModal: () => void }) => {
  const { cookieConsent, resetCookieConsent } = useContext(CookieConsentContext)
  const title = 'Cookies Preferences';

  const handleResetCookieConsent = () => {
    console.log("Resetting cookie consent");
    resetCookieConsent();
    closeModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={title}
    >
      <button 
        className={clsx(styles.cookieConsentPreferenceButton, styles.cookieConsentCloseButton)} 
        onClick={closeModal}>
          x
      </button>
      <h2>{title}</h2>

      {typeof cookieConsent === 'boolean' ? (
        <>
          <p>You have currently&nbsp;
            <strong>
              {cookieConsent === true && 'accepted'}
              {cookieConsent === false && 'declined'}
            </strong>
            &nbsp;cookies.
          </p>
          <button 
            className={clsx(styles.cookieConsentPreferenceButton, styles.cookieConsentResetButton)} 
            onClick={handleResetCookieConsent}>
              Reset my cookie preferences
          </button>
        </>
      ) : (
        <span>Please choose to accept or decline cookies in the banner at the bottom of this page.</span>
      )}
    </Modal>
  );
}