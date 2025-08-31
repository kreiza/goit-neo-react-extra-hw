import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Книга контактів</h1>
      <p className={styles.description}>
        Зберігайте та керуйте своїми контактами легко та зручно.
      </p>
    </div>
  );
}