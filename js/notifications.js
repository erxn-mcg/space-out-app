export const messages = {
    twentyMessage: {
        header: "You should rest your eyes!",
        message: "Take a break now since you have been looking at the screen for 20 mins!",
    },
    startWork: {
        header: "Break finished!",
        message: "Time to get back to work",
    },
    takeBreak: {
        header: "Brilliant! You completed your Space Out Session",
        message: "Time to take a well deserved break",
    },
    takeLongBreak: {
        header: "Wow! You have completed 4 Space Out Sessions!",
        message: "Take a longer break before getting back to work",
    }
}

export const notification = {
    generateNotification: (messageType) => {
        const notification = messages[`${messageType}`]
        const myNotification = new Notification(notification.header, {
            body: notification.message
        })
        
        myNotification.onclick = () => {
            console.log('Notification clicked')
        }
    }
}