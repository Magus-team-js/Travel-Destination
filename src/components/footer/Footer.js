import React from 'react';

const Footer = (params) => {
  return (
    <>
      <a href={params.url}>Facebook</a><br />
      <a href={params.url2}>Instgram</a><br />
      <a href={params.url3}>LinkedIn</a>
      <p>The authors are : {params.name}</p>
    </>
  );
}

export default Footer;
