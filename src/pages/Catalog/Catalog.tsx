import CategoryPrevItem from '../../components/CategoryPrevItem/CategoryPrevItem';
import Title from '../../components/Title/Title';
import styles from './Catalog.module.css';

export function Catalog() {
    const testName = 'Портативное зарядное устройство EV-Time Portable 332GB/T, 3 фазы, 32А, 22 кВт';

    return (
        <>
            <div className="container">
                {/* <div className={cn(styles['top-block-container'], 'container')}> */}
                <div className={styles['top-block-container']}>
                    <Title className={styles['container-title']}>
                        Зарядные станции
                        <br /> и устройства
                    </Title>
                    <div className={styles['img-bg']}>
                        <img src="/img/png/background_image.png" alt="Зарядная станция" />
                    </div>
                    <div className={styles['new-arrival']}>
                        <CategoryPrevItem id={1} name={testName} />
                        <CategoryPrevItem id={1} name={testName} />
                        <CategoryPrevItem id={1} name={testName} />
                        <CategoryPrevItem id={1} name={testName} />
                        <CategoryPrevItem id={1} name={testName} />
                    </div>
                    <div className={styles['filter-container']}>
                        <div className={styles['filter-wrap']}>
                            <input type="text" className={styles['filter-input']} />
                            <img src="/svg/search.svg" alt="Поиск" />
                            <img src="/svg/options-outline.svg" alt="Фильтр" />
                        </div>
                    </div>
                    <div className={styles['filter-container']}>
                        <div className={styles['filter-wrap']}>
                            <input type="text" className={styles['filter-input']} />
                            <img src="/svg/search.svg" alt="Поиск" />
                            <img src="/svg/options-outline.svg" alt="Фильтр" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
