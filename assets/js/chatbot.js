// Convert 1em to px. Required for assertion tests / error handling.
var oneEM = parseFloat(getComputedStyle($('#chat-button').get(0)).fontSize);

// Test Mode turned off by default. Set testMode to true to activate assertion tests.
var testMode = false;

// Make chatbot closed by default.
var isChatOpen = false;
var isBotCreated = false;
toggleChatHeight();

$('#chat-button').click(function(){
  if(isChatOpen)
  {
    // Close chatbot.
    $('#webchat').css('display', 'none');
    $('#chatbot').css('height', '32px'); 
    $('#chatbot').css('border', 'none'); 
    $('#chatbot').css('box-shadow', 'none'); 
    $("#chat-button").css("bottom", "1.5em");

    if (testMode) assertChatBotIsClosed();

    // Update boolean to reflect that chatbot is now closed.
    isChatOpen = false;  
  }
  else
  {
    // Open chatbot.
    $('#webchat').css('display', 'block');
    if (testMode) assert($('#webchat').css('display') == 'block');
    isChatOpen = true;
    toggleChatHeight();

    // Update boolean to reflect that chatbot is now open.
    if(!isBotCreated)
    {
      chatRequested();
      isBotCreated = true
    }
  }
    
});

/* Sets the chatbot height when the window is resized. */
$(window).resize(function () {
  if (isChatOpen) {
    return;
  }
  toggleChatHeight();
});


/* Displays the chatbot by setting its height for different screen sizes. */
function toggleChatHeight() {
  if(!isChatOpen)
  {
    $('#webchat').css('display', 'none');
    $('#chatbot').css('height', '32px'); 
    $('#chatbot').css('border', 'none'); 
    $('#chatbot').css('box-shadow', 'none'); 
    $("#chat-button").css("bottom", "1.5em");

    if (testMode) assertChatBotIsClosed();
    
    return;
  }
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('#chatbot').css('height', "22em");
    $("#chat-button").css("bottom", "21.5em");
    $('#chatbot').css('border', '2px solid rgb(0, 0, 0)'); 
    $('#chatbot').css('box-shadow', 'rgba(0, 0, 0, 0.14) 0px 0px 4px 0px, rgba(0, 0, 0, 0.28) 0px 4px 8px 0px');

    if (testMode) assertChatHeightForScreenSize(22, 21.5);
  }
  else if (window.matchMedia('(max-width: 992px)').matches) {
    $('#chatbot').css('height', "27em");
    $("#chat-button").css("bottom", "26.5em");
    $('#chatbot').css('border', '2px solid rgb(0, 0, 0)'); 
    $('#chatbot').css('box-shadow', 'rgba(0, 0, 0, 0.14) 0px 0px 4px 0px, rgba(0, 0, 0, 0.28) 0px 4px 8px 0px'); 

    if (testMode) assertChatHeightForScreenSize(27, 26.5);
  }
  else {
    $('#chatbot').css('height', "37em");
    $("#chat-button").css("bottom", "36.5em");
    $('#chatbot').css('border', '2px solid rgb(0, 0, 0)'); 
    $('#chatbot').css('box-shadow', 'rgba(0, 0, 0, 0.14) 0px 0px 4px 0px, rgba(0, 0, 0, 0.28) 0px 4px 8px 0px'); 

    if (testMode) assertChatHeightForScreenSize(37, 36.5);
  }
}

function assertChatBotIsClosed() {
  assert($('#webchat').css('display') == 'none');
  assert($('#chatbot').css('height') == '32px');
  assert($('#chatbot').css('border').includes('none'));
  assert($('#chatbot').css('box-shadow') == 'none');
  assert($('#chat-button').css('bottom') == oneEM * 1.5 + 'px');
}

function assertChatHeightForScreenSize(heightValueInEm, bottomValueInEm) {
  assert($('#chatbot').css('height') == oneEM * heightValueInEm + 'px');
  assert($("#chat-button").css("bottom") == oneEM * bottomValueInEm + 'px');
  assert($('#chatbot').css('border') == '2px solid rgb(0, 0, 0)');
  assert($('#chatbot').css('box-shadow') == 'rgba(0, 0, 0, 0.14) 0px 0px 4px 0px, rgba(0, 0, 0, 0.28) 0px 4px 8px 0px');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
  else if (condition) {
    console.log('Assertion passed.');
  }
}