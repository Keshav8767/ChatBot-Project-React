import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
    // const message = props.message;
    // const sender = props.sender;
    // const { message, sender } = props;  //Destructuring(shortcut)

    /*
        if (sender === 'user') {
        return (
            <div>
                {message}
                <img src="user.png" width="50" />
            </div>
        )
        } else {
            return (
                <div>
                    <img src="robot.png" width="50" />
                    {message}
                </div>
            )
        }
    */

    //Shortcut
    return (
        <div className={
            sender === 'user'
                ? 'chat-message-user'
                : 'chat-message-robot'
        }>
            {sender === 'robot' && <img src={RobotProfileImage} className="chat-message-profile" />}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && <img src={UserProfileImage} className="chat-message-profile" />}
        </div>
    )
}