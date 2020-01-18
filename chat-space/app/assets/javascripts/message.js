$(function(){
     function buildHTML (message){
      var addImage = '';
        if(message.image){
          var addImage = `<img src="${message.image}">`;
            var html = `<div class="main-chat__message-list__box__upper">
                          <div class="main-chat__message-list__box__upper__name">
                          ${message.user_name}
                          </div>
                          <div class="main-chat__message-list__box__upper__datetime">
                          ${message.created_at}
                          </div>
                        </div>
                          <div class="main-chat__message-list__box__downer__body">
                            ${message.body}
                          </div>
                          <div class="main-chat__message-list__box__downer__image">
                            ${addImage}
                          </div>`
            return html;
        }   else  {
           var html=`<div class="main-chat__message-list__box__upper">
                      <div class="main-chat__message-list__box__upper__name">
                        ${message.user_name}
                      </div>
                      <div class="main-chat__message-list__box__upper__datetime">
                        ${message.created_at}
                      </div>
                    </div>
                      <div class="main-chat__message-list__box__downer__body">
                        ${message.body}
                      </div>`
            return html
                      }}
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
      $('.main-chat__message-list').append(html)
      $('form')[0].reset()
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('.send').prop('disabled',false)
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました")
    })
  })  
})
