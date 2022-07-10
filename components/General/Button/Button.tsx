import styles from './Button.module.scss';

export interface IButton {
  sampleTextProp: string;
}

const Button = ({sampleTextProp}: IButton) => {
  return <h1 className={styles.heading}>{sampleTextProp}</h1>;
};

export default Button;
