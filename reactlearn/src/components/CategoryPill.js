import styles from './CategoryPill.module.css';

function CategoryPill({ label, isActive, onClick }) {
  return (
    <button
      className={`${styles.pill} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default CategoryPill;