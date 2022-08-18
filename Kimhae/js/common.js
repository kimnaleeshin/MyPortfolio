//gnb
$(document).ready(function(){
    //초기실행 - 처음에는 하위메뉴 안보이게 처리
    $('.subNav').slideUp(0);

    //메인메뉴의 a태그에 마우스 올리면 
    $('.mainNav').mouseenter(function(){
        //현재 마우스 올린  a태그의 바로 뒤에 있는 하위메뉴가 나타나게 처리 
        $(this).find('+ .subNav').stop().slideDown('fast');

        //현재 마우스를 올린 a태그의 부모(li태그)에서 마우스가 떠나면 
        //li태그는 a태그와 하위메뉴를 모두 담고 있는 태그 
        $(this).parent().mouseleave(function(){
            //현재 하위메뉴가 사라지게 처리 
            $(this).find('.subNav').stop().slideUp('fast');
        });
    });
});

//main
$(document).ready(function(){
    //사진의 배열번호 지정 변수 - 첫번째 사진 0으로 지정 
    var num = 0; 

    //모든 사진 안보이게 처리 
    $('.main li').fadeOut(0);
    //첫번째만 보이게 처리
    $('.main li').eq(num).fadeIn(0);

    //3초마다 일어날 코드를 작성하는 함수 
    setInterval(function(){
        //만약 마지막 사진이 아니면 
        if(num<2) {
            num++;    //배열번호를 1씩 증가 
        } else {      // 마지막 사진이면 
            num = 0;  //첫번재 배열번호로 바꿈. 
        }

        // 모든 사진 사라지게 처리 
        $('.main li').fadeOut('slow');

        // 현재 num번호와 같은 배열에 있는 사진만 보이게 처리 
        $('.main li').eq(num).fadeIn('slow');
    }, 3000);
});

//board
$(document).ready(function(){
    //초기설정 
    $('.board .btn li').first().addClass('on');  //첫번째 버튼 활성화 
    $('.bWrap > div').first().fadeIn(0);  //첫번째 컨텐츠박스(공지사항) 보임 

    //버튼 클릭시 
    $('.board .btn li a').click(function(){
        //미리 활성화 되어 있던 버튼 활성화 제거 
        $('.board .btn li').removeClass('on');
        //클릭한 버튼의 부모(li)요소에 활성화 
        $(this).parent().addClass('on');

        //클릭한 버튼의 부모(li)의 배열번호 담는 변수 
        var i = $(this).parent().index();

        //모든 컨텐츠박스(공지사항, 갤러리) 안보이게 처리
        $('.bWrap > div').fadeOut(0);
        //클릭한 버튼의 부모 배열번호와 같은 컨텐츠박스만 보이게 처리 
        $('.bWrap > div').eq(i).fadeIn(0);

    });
});