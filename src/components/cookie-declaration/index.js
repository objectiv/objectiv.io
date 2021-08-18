import React from 'react';

/**
 * Show cookie declaration
 */
function CookieDeclaration({
  domainGroupId,
}) {
  if (typeof window === 'undefined') {
    return null;
  }
  if (!domainGroupId || !document) {
    return null;
  }
  if (domainGroupId.length !== 36) {
    console.warn(`The cookie bot domain group id is ${domainGroupId.length} characters, instead it should be 36 characters!`); // eslint-disable-line no-console
  }
  const script = document.createElement('script');
  script.setAttribute('id', 'CookieDeclaration');
  script.setAttribute('src', 'https://consent.cookiebot.com/7498452c-872b-431a-9859-21045f83f0a0/cd.js');
  script.setAttribute('async', 'true');
  script.setAttribute('type', 'text/javascript');
  return (
    <script
      id="CookieDeclaration"
      src={`https://consent.cookiebot.com/${domainGroupId}/cd.js`}
      type="text/javascript"
      async
    />
  );
}

export default CookieDeclaration;