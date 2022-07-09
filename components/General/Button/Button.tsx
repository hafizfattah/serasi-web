import styles from './Button.module.scss';

export interface IButton {
  sampleTextProp: string;
}

const Button = ({sampleTextProp}: IButton) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Button;
