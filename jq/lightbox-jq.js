const pics = $('.pic');
const lightbox = $('#lightbox');
const lightboxImg = $('#lightboxImg');
pics.on('click', function () {
    // 가져와 attr('속성')
    // 바꿔 attr('속성','바꿀속성값')
    const big = $(this).attr('data-src');
    console.log(big);
    lightboxImg.attr('src', big);
    lightbox.css('display', 'block')
    $('html').addClass('on');
    lightbox.on('click', function () {
    lightbox.css('display', 'none');
    $('html').removeClass('on');
    })
})