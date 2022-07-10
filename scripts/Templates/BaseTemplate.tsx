import styles from './BaseTemplate.module.scss';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate = ({sampleTextProp}: IBaseTemplate) => {
  return <h1 className={styles.heading}>{sampleTextProp}</h1>;
};

export default BaseTemplate;
