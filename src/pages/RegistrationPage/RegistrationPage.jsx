import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Реєстрація</h1>
      <RegistrationForm />
    </div>
  );
}