const chatbot = require('./chatbot');
const { expect } = require('@jest/globals');

test('should be displayed and increase in height when chatbot is open', function () {
    if (chatbot.isChatOpen) {
        expect($('#chatbox').css('display')).toBe('flex');
    }
});