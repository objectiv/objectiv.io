/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React, { useContext } from 'react';
import Modal from 'react-modal';
import { CookieConsentContext } from "./CookieBanner";

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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={title}
    >
      <h2>{title}</h2>
      <button onClick={closeModal}>close</button>
      <br />
      <br />

      {typeof cookieConsent === 'boolean' ? (
        <>
        <p>Current cookies consent: <strong>
            {cookieConsent === true && 'accepted'}
            {cookieConsent === false && 'declined'}
        </strong></p>
        <button onClick={resetCookieConsent}>reset cookie consent</button>
        </>
      ) : (
        <span>You have not accepted nor declined our cookies yet</span>
      )}
    </Modal>
  );
}