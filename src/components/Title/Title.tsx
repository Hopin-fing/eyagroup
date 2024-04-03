import styles from './Title.module.css';
import { TitleProps } from './Title.props';
import cn from 'classnames';

function Title({ children, className }: TitleProps) {
    return (
        <>
            <div className={className}>
                <h2 className={cn(styles.big, styles.title)}>{children}</h2>
            </div>
        </>
    );
}

export default Title;
