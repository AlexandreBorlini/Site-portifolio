
var projectsPositions = [0, 1, 2, 3];
var artsPositions = [0, 1, 2, 3];

$(document).ready(function () {


    // Projetos

    $("#right").click(function () {

        if(projectsPositions[3] != 0){

            for(var i = 0; i < projectsPositions.length; i++)
                projectsPositions[i] -= 1;


            $("#project01").animate({
                marginLeft: 200 * projectsPositions[0] + "%"
            }, 700);

            $("#project02").animate({
                marginLeft: 200 * projectsPositions[1] + "%"
            }, 700);

            $("#project03").animate({
                marginLeft: 200 * projectsPositions[2] + "%"
            }, 700);

            $("#project04").animate({
                marginLeft: 200 * projectsPositions[3] + "%"
            }, 700);
        }
    })

    $("#left").click(function () {
   
        if(projectsPositions[0] != 0){

            for(var i = 0; i < projectsPositions.length; i++)
                projectsPositions[i] += 1;


            $("#project01").animate({
                marginLeft: 200 * projectsPositions[0] + "%"
            }, 700);

            $("#project02").animate({
                marginLeft: 200 * projectsPositions[1] + "%"
            }, 700);

            $("#project03").animate({
                marginLeft: 200 * projectsPositions[2] + "%"
            }, 700);

            $("#project04").animate({
                marginLeft: 200 * projectsPositions[3] + "%"
            }, 700);
        }
    })



    // Artes

    
    $("#artRight").click(function () {

        if(artsPositions[3] != 0){

            for(var i = 0; i < artsPositions.length; i++)
                artsPositions[i] -= 1;


            $("#art01").animate({
                marginLeft: 200 * artsPositions[0] + "%"
            }, 700);

            $("#art02").animate({
                marginLeft: 200 * artsPositions[1] + "%"
            }, 700);

            $("#art03").animate({
                marginLeft: 200 * artsPositions[2] + "%"
            }, 700);

            $("#art04").animate({
                marginLeft: 200 * artsPositions[3] + "%"
            }, 700);
        }
    })

    $("#artLeft").click(function () {
   
        if(artsPositions[0] != 0){

            for(var i = 0; i < artsPositions.length; i++)
                artsPositions[i] += 1;


            $("#art01").animate({
                marginLeft: 200 * artsPositions[0] + "%"
            }, 700);

            $("#art02").animate({
                marginLeft: 200 * artsPositions[1] + "%"
            }, 700);

            $("#art03").animate({
                marginLeft: 200 * artsPositions[2] + "%"
            }, 700);

            $("#art04").animate({
                marginLeft: 200 * artsPositions[3] + "%"
            }, 700);
        }
    })
})