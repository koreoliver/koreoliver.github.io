/*----------------------------------------------------------------------------- 
01=NAV BAR
-----------------------------------------------------------------------------*/
jQuery(function(){
  $('.nav-container li').click(function() {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
});

