/**
 * Created by elton on 19/12/16.
 */

import _ from 'lodash';

function component () {
    let element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.map(['Hello','webpack'], (item) => item + ' ');

    return element;
}

document.body.appendChild(component());
