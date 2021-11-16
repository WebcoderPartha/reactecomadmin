class Notification {
    success(message){
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: message,
            closeWith: ['click', 'button'],
            timeout: 3000
        }).show();
    }

    info(message){
        new Noty({
            type: 'info',
            layout: 'topRight',
            text: message,
            closeWith: ['click', 'button'],
            timeout: 3000
        }).show();
    }

    warning(message){
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: message,
            closeWith: ['click', 'button'],
            timeout: 3000
        }).show();
    }

    error(message){
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: message,
            closeWith: ['click', 'button'],
            timeout: 3000
        }).show();
    }


}

export default Notification = new Notification
