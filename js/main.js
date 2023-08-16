$(document).ready(function () {

    $(".divOne").mouseover(function () {
        $(".h6One").css("color", "#fff");
        $(".pOne").css("color", "#fff");
        $(".secondIOne").css({ "color": "#3761AD", "background-color": "#fff" });
        $(".iOne").css("color", "#fff");
    });

    $(".divOne").mouseout(function () {
        $(".h6One").css("color", "#000");
        $(".pOne").css("color", "#000000a1");
        $(".secondIOne").css({ "color": "#fff", "background-color": "#3761AD" });
        $(".iOne").css("color", "#3761AD");
    });

    $(".divTwo").mouseover(function () {
        $(".h6Two").css("color", "#fff");
        $(".pTwo").css("color", "#fff");
        $(".secondITwo").css({ "color": "#3761AD", "background-color": "#fff" });
        $(".iTwo").css("color", "#fff");
    });

    $(".divTwo").mouseout(function () {
        $(".h6Two").css("color", "#000");
        $(".pTwo").css("color", "#000000a1");
        $(".secondITwo").css({ "color": "#fff", "background-color": "#3761AD" });
        $(".iTwo").css("color", "#3761AD");
    });

    $(".divThree").mouseover(function () {
        $(".h6Three").css("color", "#fff");
        $(".pThree").css("color", "#fff");
        $(".secondIThree").css({ "color": "#3761AD", "background-color": "#fff" });
        $(".iThree").css("color", "#fff");
    });

    $(".divThree").mouseout(function () {
        $(".h6Three").css("color", "#000");
        $(".pThree").css("color", "#000000a1");
        $(".secondIThree").css({ "color": "#fff", "background-color": "#3761AD" });
        $(".iThree").css("color", "#3761AD");
    });

    $(".divFour").mouseover(function () {
        $(".h6Four").css("color", "#fff");
        $(".pFour").css("color", "#fff");
        $(".secondIFour").css({ "color": "#3761AD", "background-color": "#fff" });
        $(".iFour").css("color", "#fff");
    });

    $(".divFour").mouseout(function () {
        $(".h6Four").css("color", "#000");
        $(".pFour").css("color", "#000000a1");
        $(".secondIFour").css({ "color": "#fff", "background-color": "#3761AD" });
        $(".iFour").css("color", "#3761AD");
    });

    $(".memberOne").mouseover(function () {
        $(".one").css("display", "block");
    });

    $(".memberOne").mouseout(function () {
        $(".one").css("display", "none");
    });

    $(".memberTwo").mouseover(function () {
        $(".two").css("display", "block");
    });

    $(".memberTwo").mouseout(function () {
        $(".two").css("display", "none");
    });

    $(".memberThree").mouseover(function () {
        $(".three").css("display", "block");
    });

    $(".memberThree").mouseout(function () {
        $(".three").css("display", "none");
    });

    $(".memberFour").mouseover(function () {
        $(".four").css("display", "block");
    });

    $(".memberFour").mouseout(function () {
        $(".four").css("display", "none");
    });

    $(".memberFive").mouseover(function () {
        $(".five").css("display", "block");
    });

    $(".memberFive").mouseout(function () {
        $(".five").css("display", "none");
    });

    $(".memberSix").mouseover(function () {
        $(".six").css("display", "block");
    });

    $(".memberSix").mouseout(function () {
        $(".six").css("display", "none");
    });

    $(".hamburgerMenu").click(function () {
        $(".hamburgerNav").toggleClass("showHamburgerNav");
    });

});