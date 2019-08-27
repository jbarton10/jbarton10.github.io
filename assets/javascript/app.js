$("#homeContent").css("display", "inline");
$("#resumeContent").css("display", "none");
$("#bioContent").css("display", "none");
$("#projectsContent").css("display", "none");

$(".home").on("click", function () {
    $("#homeContent").css("display", "inline");
    $("#resumeContent").css("display", "none");
    $("#bioContent").css("display", "none");
    $("#projectsContent").css("display", "none");



});

$(".bio").on("click", function () {
    $("#homeContent").css("display", "none");
    $("#resumeContent").css("display", "none");
    $("#bioContent").css("display", "inline");
    $("#projectsContent").css("display", "none");

});

$(".resume").on("click", function () {
    $("#homeContent").css("display", "none");
    $("#resumeContent").css("display", "inline");
    $("#bioContent").css("display", "none");
    $("#projectsContent").css("display", "none");

})

$(".projects").on("click", function () {
    $("#homeContent").css("display", "none");
    $("#resumeContent").css("display", "none");
    $("#bioContent").css("display", "none");
    $("#projectsContent").css("display", "inline");

})
