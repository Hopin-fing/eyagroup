import { HTMLAttributes, ReactNode } from 'react';

export interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
    children: ReactNode;
}
