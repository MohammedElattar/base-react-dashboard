import { Circle, X } from 'react-feather';
import Avatar from '@components/avatar'

const NotificationItem = ({ index, item, handleDeletingOneNotification, handleReadingOneNotification, icon = null }) => {
    icon = !!icon ? icon : require('../assets/notification-pill.png')

    return <>
        <a
            key={index}
            className='d-flex'
            href='/'
            onClick={e => e.preventDefault()}
        >
            <div
                className={'ist-item d-flex align-items-center'}
            >
                <div className='me-1'>
                    <Avatar
                        img={icon}
                        imgHeight={32}
                        imgWidth={32} />
                </div><div className='list-item-body flex-grow-1'>
                    <p className='media-heading'>
                        <span className='fw-bolder'>{item.title}</span>
                    </p>
                    <small className='notification-text'>{item.body}</small>
                </div><div className='d-flex flex-column align-items-center'>
                    {!item.seen && <Circle fill={'true'} color='primary' size={12} className='mb-1' onClick={() => handleReadingOneNotification(index)} />}
                    <X size={18} onClick={() => handleDeletingOneNotification(index)} />
                </div>
            </div>
        </a></>
}

export default NotificationItem;