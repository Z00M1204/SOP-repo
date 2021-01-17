import * as React from 'react'

export function ValiditiyCheck(name: string) {

    var isValidName = true;
    if (/[!@#$%^&*(),.?":{}|<>]/g.test(name) || !/^[A-Z]/.test(name) || /\d+/g.test(name)) {
        isValidName = false;

    }

    return isValidName;
}
