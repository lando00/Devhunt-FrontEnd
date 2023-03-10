import React from 'react'
import './LiveItem.scss'

export default function LiveItem(props) {
    return (
        <div className='LiveItem'>
            <div className="video">
                <div className="live"></div>
            </div>
            <div className="info">
                <div className="pdp"></div>
                <div className="user">
                    <div className="name">BEJERY Ludores</div>
                    <div className="theme">#JAVASCRIPT</div>
                </div>
            </div>
        </div>
    )
}