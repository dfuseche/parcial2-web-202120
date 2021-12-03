import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setIdioma}) => {
  
  return(
  <div>
    <a className="btn btn-primary" onClick ={() => setIdioma(LOCALES.ENGLISH)}  role="button">En</a>
    <a className="btn btn-primary" onClick ={() => setIdioma(LOCALES.SPANISH)} role="button">Es</a>
  </div>
  )
};
