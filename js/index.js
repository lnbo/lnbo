/**
 * Created by bo on 15-4-3.
 */
$(document).ready(function(){

      impress().init();
    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });

    var stars =  $(".sk-content");
    $.each(stars,function(i,star){
            $star_num =  $(star).attr("sk-circle")  ;
            if($star_num > 0){
                i = 0 ;
                 for( i ; i < $star_num ; i++){
                     $(star).append('<span class="sk-circle"></span>\n');
                 }
                 for(i ; i < 10; i++ ){
                     $(star).append('<span class="sk-circle sk-circle-empty"></span>\n');
                 }
            }
            return ;
    })
});
