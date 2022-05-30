import {FC} from 'react';
import { IIcon } from '../../models/IIcon';

export const Icon: FC<IIcon> = ({name, width, height}) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox="0 0 24 24"
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}>
            <use xlinkHref={`/sprite.svg#${name}`}></use>
        </svg>
    );
};
