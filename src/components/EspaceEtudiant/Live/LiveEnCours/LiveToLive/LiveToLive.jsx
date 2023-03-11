import './Live.scss'
import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000', {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
});

export default function Video({ showSetting, isOwner }) {

    const videoRef = useRef(null);
    const [inLive, settingLive] = useState(false)
    const [showCamera, setShow] = useState(true)
    const [theme, settheme] = useState('')
    const [isthem, setting] = useState(false)

    function hideVideo() {
        showSetting(false)
    }
    function onWebCam() {
        if (theme) {
            showCamera ? setShow(false) : setShow(true)
        }
        else setting(true)
    }
    const [comments, setComment] = useState([
        { user: 'BEJERY Ludores', content: 'comment utiliser un pointeur avec language c' },
        { user: 'BEJERY Ludores', content: 'comment utiliser un pointeur avec language c' },
    ])
    const [coms, setComs] = useState('')

    useEffect(() => {

        if(isOwner){
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                socket.emit('stream', stream);

                socket.on('stream', (stream) => {
                    let peer = new window.Peer();
                    peer.addStream(stream);

                    peer.on('call', (call) => {
                        call.answer(stream);
                        call.on('stream', (remoteStream) => {
                            let video = document.createElement('video');
                            video.srcObject = remoteStream;
                            document.body.appendChild(video);
                        });
                    });
                });
            });
        }
        else{
            socket.on('stream', (stream) => {
                let peer = new window.Peer();
                peer.addStream(stream);

                peer.on('call', (call) => {
                    call.answer(stream);
                    call.on('stream', (remoteStream) => {
                        let video = document.createElement('video');
                        video.srcObject = remoteStream;
                        document.body.appendChild(video);
                    });
                });
            });
        }
    });
    return (
        <div className="bloc-modal">

            <div className="overlay" onClick={hideVideo} />
            <div className="modal">
                {/* <div className="video"></div> */}
                <div className="absolute">
                    <div className="camera"></div>
                    <div className="vue">0 vue</div>
                </div>
                <video ref={videoRef} autoPlay playsInline></video>
                <div className="comments">
                    {
                        comments.map((comment, index) => {
                            return (
                                <div className="comment" key={index}>
                                    <div className="pdp"></div>
                                    <div className="content">
                                        <div className="user-name">{comment.user}</div>
                                        <div className="commentaire">{comment.content}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="form">
                    {/* <div className="text" onInput={(e) => setComs(e.target.innerHTML)} contentEditable='true'></div> */}
                    {!isOwner && <input type="text" onInput={(e) => setComs(e.target.value)} />}
                    {!isOwner && <div className="envoyer" onClick={() => setComment([...comments,
                    { user: 'Mickael NANDRASANA', content: coms }])}>Envoyer</div>}
                    {isOwner && <div className='annuler' onClick={() => showSetting(false)}>annuler</div>}

                </div>
            </div>
        </div>
    )
}