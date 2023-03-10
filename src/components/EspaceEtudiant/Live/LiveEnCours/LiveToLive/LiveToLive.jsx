import { useState } from 'react'
import './Live.scss'

export default function Video({ showSetting }) {

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
    return (
        <div className="bloc-modal">
            <div className="overlay" onClick={hideVideo} />
            <div className="modal">
                <div className="video"></div>
                <div className="comments">
                    {
                        comments.map(comment => {
                            return (
                                <div className="comment">
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
                    <div className="text" onInput={(e) => console.log(e.target.value)} contentEditable='true'></div>
                    <div className="envoyer" onClick={() => setComment([...comments,
                    { user: 'Mickael NANDRASANA', content: coms }])}>Envoyer</div>
                </div>
            </div>
        </div>
    )
}