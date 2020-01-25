$(function(){

  function buildHTML (message){
    var addImage = '';
      if(message.body && message.image){
        var addImage = `<img src="${message.image}">`;
          var html = 
          `<div class="main-chat__message-list__box__one__downer__body">`+
            message.body +
          `</div>`+
          `<div class="main-chat__message-list__box__one__downer__image">`+
                   addImage +
                 `</div>`
        }   else if(message.body)  {
          var html = `<div class="main-chat__message-list__box__one__upper" data-message-id=` + message.id + `>` +
                    `<div class="main-chat__message-list__box__one__upper__name">`+
                      message.user_name +
                    `</div>`+
                    `<div class="main-chat__message-list__box__one__upper__datetime">`+
                      message.created_at +
                    `</div>`+
                  `</div>`+
                    `<div class="main-chat__message-list__box__one__downer__body">`+
                      message.body +
                    `</div>`
        }   else if(message.image)  {
          var addImage = `<img src="${message.image}">`;
          var html=
                   `<div class="main-chat__message-list__box__one__upper" data-message-id=` + message.id + `>` +
                     `<div class="main-chat__message-list__box__one__upper__name">`+
                       message.user_name +
                     `</div>`+
                     `<div class="main-chat__message-list__box__one__upper__datetime">`+
                       message.created_at +
                     `</div>`+
                   `</div>`+
                   `<div class="main-chat__message-list__box__one__downer__image">`+
                   addImage +
                 `</div>`
                  }
                    return html;
                  }
$('#new_message').on('submit',function(e){
    e.preventDefault()
    var formData=new FormData(this)
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data)
      $('.main-chat__message-list__box').append(html)
      $('form')[0].reset()
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('.send').prop('disabled',false)
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました")
    })
  })  
  var reloadMessages=function(){
    last_message_id = $('.main-chat__message-list__box__one__upper:last').data("message-id");
    console.log(last_message_id)
    $.ajax({
      url:"api/messages",
      type:'get',
      dataType:'json',
      data:{id: last_message_id}
    })
    .done(function(message){
      if (message.length !== 0) {
      var insertHTML=''
      console.log(message)
      
      //console.log(buildHTML)
      $.each(message, function(i, message){
        insertHTML += buildHTML(message)
      })
      
      console.log (insertHTML)

      $('.main-chat__message-list__box').append(insertHTML)
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $("#new_message")[0].reset();
      $(".form__submit").prop("disabled", false);
    }
    })
    .fail(function(){
      console.log('自動更新でエラー')
    })
  }
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages,7000)
  }
})
