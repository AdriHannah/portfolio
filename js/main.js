$(document).ready(function () {

    let $btns = $(".project-area .button-group button");

    $btns.click(function (e) {

        let $btns = $(".project-area .button-group button").removeClass("active");
        e.target.classList.add("active");
        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter: selector
        });
        return false
    });


    // close navbar when you click on it //
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });



    // animation for picture of Krivaya, the cat //
    const seeKrivaya = document.querySelector("#seeKrivaya");
    seeKrivaya.addEventListener('pointerenter', () => {
        var showKrivaya = document.getElementById('krivaya');
        showKrivaya.classList.add("show");
        console.log("test");
    });

    $(document).on('click', 'body *', () => {
        var showKrivaya = document.getElementById('krivaya');
        showKrivaya.classList.remove("show");
    });
});



    // $(function () {
    //     $('[data-toggle="tooltip"]').tooltip();
    // });




    // //Obtaining the default helper
    // var animationHelper = AniJS.getHelper();

    // //Defining afterAnimationFunction
    // animationHelper.beforeAnimationFunctionName = function (e, animationContext) {
    //     if (true) {

    //         var seeKrivaya = document.getElementById('krivaya');
    //         seeKrivaya.classList.toggle("show");

    //         animationContext.run();
    //     }
    // }
