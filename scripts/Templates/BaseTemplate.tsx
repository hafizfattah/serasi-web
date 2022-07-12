import React from 'react';
import './BaseTemplate.scss';
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate = ({sampleTextProp}: IBaseTemplate) => {
  return <h1>{sampleTextProp}</h1>;
};

export default BaseTemplate;
