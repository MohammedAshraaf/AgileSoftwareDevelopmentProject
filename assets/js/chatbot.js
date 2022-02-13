// Make chatbot closed by default.
var isChatOpen = false;
var isBotCreated = false;
$('#chat-button').click(function(){
  if(isChatOpen)
  {
    // Close chatbot.
    $('#webchat').css('display', 'none');
    $('#chatbot').css('height', '32px'); 
    $('#chatbot').css('border', 'none'); 
    $('#chatbot').css('box-shadow', 'none'); 

    $("#chat-button").css("bottom", "1.5em");

    // Update boolean to reflect that chatbot is now closed.
    isChatOpen = false;  
  }
  else
  {
    // Open chatbot.
    $('#webchat').css('display', 'block');
    isChatOpen = true;
    increaseChatHeight();
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
  increaseChatHeight();
});


/* Displays the chatbot by setting its height for different screen sizes. */
function increaseChatHeight() {
  if(!isChatOpen)
  {
    $('#chatbot').css('height', '32px'); 
    $('#chatbot').css('border', 'none'); 
    $('#chatbot').css('box-shadow', 'none'); 
    $("#chat-button").css("bottom", "1.5em");
    return;
  }
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('#chatbot').css('height', "22em");
    $("#chat-button").css("bottom", "21.5em");
    $('#chatbot').css('border', '2px solid black'); 
    $('#chatbot').css('box-shadow', '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'); 


  }
  else if (window.matchMedia('(max-width: 992px)').matches) {
    $('#chatbot').css('height', "27em");
    $("#chat-button").css("bottom", "26.5em");
    $('#chatbot').css('border', '2px solid black'); 
    $('#chatbot').css('box-shadow', '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'); 


  }
  else {
    $('#chatbot').css('height', "37em");
    $("#chat-button").css("bottom", "36.5em");
    $('#chatbot').css('border', '2px solid black'); 
    $('#chatbot').css('box-shadow', '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'); 


  }
}
