(function($){
  window.agendaDetail = function(date, time, room){
    var currentAgendaContent = agendaData[date][time]['list'][room];
    var swalOptions = {
      imageWidth: 100,
      showCloseButton: true,
      showConfirmButton: false
      // confirmButtonText: '關閉'
    }
if(currentAgendaContent.people>1){
  swalOptions = {
    imageWidth: 100*currentAgendaContent.people,
    showCloseButton: true,
    showConfirmButton: false
    // confirmButtonText: '關閉'
  }
}

    if (currentAgendaContent.speaker) {
      var currentSpeakerData = speakerData[currentAgendaContent.speaker];
      var currntAgendaData = currentSpeakerData.agenda;
      var formatString;

      swalOptions.title = currentSpeakerData.name;
      swalOptions.imageUrl = './images/speakers/' + currentSpeakerData.image;

      swalOptions.html = '<h4 class="agenda-title">'+currntAgendaData.title+'</h4>';
      if (currntAgendaData.outline)
        swalOptions.html += '<div class="agenda-outline">' +
          currntAgendaData.outline +
          '</div>';
      else
        swalOptions.html += '<div class="agenda-outline">噓！講者保密到家。</div>';
    } else {
      // swalOptions.title = '我是犀牛啦！';
      // swalOptions.imageUrl = './images/jsdc-mascot-150.jpg';
      swalOptions.html = '<h4>晚點告訴大家這位講者是誰</h4>';
    }

    swal(swalOptions).catch(swal.noop);
  };
})(jQuery);
