window.addEventListener('load', ()=>{
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '80%',
        '75%',
        '50%',
        '60%',
        '55%',
    ];

    progressBars.forEach((progress, index)=>{
        progress.style.width = values[index];
    });
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});