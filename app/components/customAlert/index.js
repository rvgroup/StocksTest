import { Alert } from 'react-native';

export function alert(message, buttons, title) {
    setTimeout(() => Alert.alert(title || '', getMessage(message), buttons || [{ text: 'ОК' }]), 50);
}

export function confirm(title, message, okCallback) {
    Alert.alert(
        title, 
        getMessage(message), 
        [{
            text: 'ОК',
            onPress: okCallback
        }, {
            text: 'Отмена'
        }]);
}

function getMessage(message) {
    if (message && message.message) {
        return message.message;
    }

    return message;
}