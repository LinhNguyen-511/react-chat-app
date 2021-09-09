import React from 'react';
import PropTypes from 'prop-types';

function ChatRoomCard({currentUserId, conversation}) {
    let conversationName = 'No name';

    // check if it's 1-on-1 or 1-to-many
    if (conversation.members.length > 2) {
        conversationName = conversation.name;
    } else {
        let theOtherMember = '';
        conversation.members.forEach((member) => {
            if (member.id !== parseInt(currentUserId,10)) theOtherMember = member.name
        })
        conversationName = theOtherMember;
    }

    return (
        <>
            <button onClick={() =>
                {
                    localStorage.setItem('room_id', conversation.id);
                    localStorage.setItem('room_name', conversationName);
                    window.location.reload();
                }} className="chat-room__card" key={conversation.id} type="button">
                <p className="chat-room__name">{conversationName}</p>
                {
                    conversation.last_message &&
                        <div className="chat-room-last-message__wrapper">
                            <p>{conversation.last_message.text}</p>
                        </div>
                }
            </button>
        </>
    )
}

ChatRoomCard.propTypes = {
    conversation: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        members: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })),
        last_message: PropTypes.objectOf(PropTypes.shape({
            text: PropTypes.string,
            sent_at: PropTypes.string
        }))
    }),
    currentUserId: PropTypes.string,
}

ChatRoomCard.defaultProps = {
    conversation: null,
    currentUserId: null
}

export default ChatRoomCard;