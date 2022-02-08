// Make chatbot open by default.
var isChatOpen = true;

/* Open and closes the chatbot. */
$('#chat-button button').click(function () {
  if (isChatOpen) {
    // Close chatbot.
    $('#chatbox').css('display', 'none');
    $('#chatbot').css('height', '32px');    
    // Update boolean to reflect that chatbot is now closed.
    isChatOpen = false;
  }
  else {
    // Open chatbot.
    $('#chatbox').css('display', 'flex');
    increaseChatHeight();
    // Update boolean to reflect that chatbot is now open.
    isChatOpen = true;
  }
});

/* Sets the chatbot height when the window is resized. */
$(window).resize(function () {
  if (isChatOpen) {
    return;
  }
  increaseChatHeight();
});

/* Displays the chatbot by setting its height for different screen sizes. */
function increaseChatHeight() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('#chatbot').css('height', "22em");
  }
  else if (window.matchMedia('(max-width: 992px)').matches) {
    $('#chatbot').css('height', "27em");
  }
  else {
    $('#chatbot').css('height', "37em");
  }
}