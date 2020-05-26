jQuery(function($){
    $("#js-fast-reservation__masca-data").mask("99/99/9999",{placeholder:"ДД/ММ/ГГГГ"});
    $("#js-fast-reservation__masca-day").mask("99");
    $("#js-fast-reservation__masca-parlor").mask("9",{placeholder:"0-3"});
    $("#js-write-to-us__input-mask").mask("+7 - (999) - 999 - 99 - 99",{placeholder:"+7 - (xxx) - xxx - xx - xx"});
 });