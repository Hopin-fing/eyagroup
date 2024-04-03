import styles from './CategoryPrevItem.module.css';
import { CategoryPrevItemProps } from './CategoryPrevItem.props';

function CategoryPrevItem(props: CategoryPrevItemProps) {
    return (
        <>
            <div className={styles['item-wrap']}>
                {/* <div className={styles['item-img']} style={{ backgroundImage: `url('${props.image}')` }}></div> */}
                <div className={styles['item-img']}></div>
                <div className={styles['item-name']}>{props.name}</div>
                <button className={styles['item-btn']}>новое поступление</button>
            </div>
        </>
    );
}

export default CategoryPrevItem;
