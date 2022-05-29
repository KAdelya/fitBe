import styles from '../NotFound/NotFoundPage.module.sass';

const NotFoundPage = () => {
  return (
    <div className={styles.not_found_page}>
        <div className={styles.not_found_page__error}>
            <h1>404</h1>
            <h2>Not Found</h2>
        </div>
    </div>
  );
};
export default NotFoundPage;
