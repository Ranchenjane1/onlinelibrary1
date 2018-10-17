var moveTobottom = function () {
    $(".hotindustry_box img").animate({"top": "0"}, "slow", moveTotop);
};

var moveTotop = function () {
    $(".hotindustry_box img").animate({"top": "10px"}, "slow",moveTobottom);
};

$(function () {
    $(".hotindustry_box li").mouseover(moveTotop);
});
