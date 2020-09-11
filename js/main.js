
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

    // $(function () {
    //     $('[data-toggle="tooltip"]').tooltip();
    // });

    const seeKrivaya = document.querySelector("#seeKrivaya");
    seeKrivaya.addEventListener('pointerenter', () => { 
        var showKrivaya = document.getElementById('krivaya');
        showKrivaya.classList.add("show");
        console.log("test");
    });

    $(document).on('click','body *', () => {
        var showKrivaya = document.getElementById('krivaya');
        showKrivaya.classList.remove("show");
    });



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
});