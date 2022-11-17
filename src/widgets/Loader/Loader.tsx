import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface PageLoaderProps {
    className?: string
}

export const Loader = ({ className }: PageLoaderProps) => (
    <div className={classNames(
        'loadingio-spinner-ellipsis-ydh78su8ow',
        {},
        [className],
    )}
    >
        <div className="ldio-so2mm8ap7y">
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
