  var chat= 0;
  $('.chat-input input').keyup(function(e) {
    if ($(this).val() == '')
      $(this).removeAttr('good');
    else
      $(this).attr('good', '');

  });
  $('#chat-button button').click(function(){
    var height = $(".chatbox").css( "height" ).split("px");
    if(chat % 2 == 0)
    {
      $('#chatbox').css('display', 'none');
      $('#chatbot').css('height', '32px');
    }
    else
    {
      $('#chatbox').css('display', 'flex');
    changeChatSize();

    }
    chat++;
      
  });
  $(window).resize(function()
  {
    if(chat % 2)
    {
      return;
    }
    changeChatSize();
  });

  function changeChatSize()
  {
    if (window.matchMedia('(max-width: 767px)').matches)
      {
        $('#chatbot').css('height', "22em");
      }
      else if (window.matchMedia('(max-width: 992px)').matches)
      {
        $('#chatbot').css('height', "27em");
      }
      else
      {
        $('#chatbot').css('height', "37em");

      }
  }
  
