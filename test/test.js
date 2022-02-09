/** USING MOCHA */
const assert = require('assert');
const chatbot = require('../assets/js/chatbot');
// const $ = document.querySelector.bind(document);
// // this.jsdom = require('jsdom-global')()
// const $ = require('jquery');

describe('Chatbot', function () {
    it('should be displayed and increase in height when chatbot is open', function () {
        if (chatbot.isChatOpen) {
            assert.equal($('#chatbox').css('display'), 'flex');
        }
        // assert.equal([1, 2, 3].indexOf(4), -1);
    });
});

/** USING JEST */
// const { expect } = require('@jest/globals');

// test('should be displayed and increase in height when chatbot is open', function () {
//     if (chatbot.isChatOpen) {
//         var chatbox = document.getElementById('chatbox');
//         expect(chatbox.style.display).toBe('flex');
//     }
//     // assert.equal([1, 2, 3].indexOf(4), -1);
// });