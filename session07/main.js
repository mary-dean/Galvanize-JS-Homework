// MARY DEAN
// GALVANIZE HOMEWORK
// SESSION 7

$(document).ready(function () {

    // QUESTION 1
    $("#hover").mouseenter(function () {
        $("#hover").css("background-color", "red");
        $("#hover").click(function () {
            $("#hover").addClass("green");
            $("#hover").click(function () {
                $("#hover").removeClass("green");
            })

        })
    })


    // QUESTION 2
    $(".hideMe").click(function () {
        $(".hideMe").hide();
    })

    // QUESTION 3
    $(".changeColor").click(function () {
        $("li:nth-child(3)").css("color", "#8A2BE2");
    })


    // QUESTION 4
    // THE PROBLEM WITH THIS IS IT INSERTED ITSELF BEFORE THE CLOSING </LI>
    // OF THE PREVIOUS ITEM
    //$("li:nth-child(4)").click(function() {
    //    $("li:nth-child(4)").append("<li>I am an ALL NEW item!</li>");
    // })

    // USING AFTER INSTEAD OF APPEND FIXED THIS PROBLEM! 
    $("li:nth-child(4)").click(function () {
        $("li:nth-child(4)").after("<li>I am an ALL NEW item!</li>");
    })


    // QUESTION 5
    $("#removeLi").click(function () {
        $("li:nth-child(2)").remove();
    })

    // QUESTION 6
    // THIS ONLY WORKS IF I DON'T CLICK THE ABOVE MANIPULATORS... WHY? 
    // NO, I HAVE FIXED IT BY INSERTING WITH AFTER INSTEAD OF APPEND
    $("li:last-child").click(function () {
        $("li:last-child").css("font-size", "40px");
        $("li:nth-child(1)").hide();
        $("li:nth-child(2)").hide();
        $("li:nth-child(3)").hide();
        $("li:nth-child(4)").hide();
    })


    // QUESTION 7
    $(".cute").click(function () {
        $(".cute").clone().appendTo(".clones");
    })


    // QUESTION 8 

    $("body").dblclick(function () {
        //alert("You doubleclicked");
        $("#makeSquare").css("border-radius", "0px");

    })

    // QUESTION 9

    $("#dontClick").click(function () {

        alert("I said DON'T click me");
    })



    //QUESTION 10
    // ONE PROBLEM IS THAT ADDING A CLASS DOESN'T REMOVE THE PREVIOUS CLASS
    // BUT I DON'T KNOW WHICH PREVIOUS CLASS THEY MIGHT HAVE ADDED, IF ANY
    // SO I ADDED AN IF STATEMENT. THIS SEEMS TO WORK WELL. 
    $(".black").click(function () {
        var previousClass = $('body').attr('class');
        if (previousClass === undefined) {
            $("body").addClass("black");
        }
        else {
            $("body").removeClass(previousClass);
            $("body").addClass("black");
        }
        
    })

  $(".wood").click(function () {
        var previousClass = $('body').attr('class');
        if (previousClass === undefined) {
            $("body").addClass("wood");
        }
        else {
            $("body").removeClass(previousClass);
            $("body").addClass("wood");
        }
        
    })    
  
    $(".chaos").click(function () {
        var previousClass = $('body').attr('class');
        if (previousClass === undefined) {
            $("body").addClass("chaos");
        }
        else {
            $("body").removeClass(previousClass);
            $("body").addClass("chaos");
        }
        
    })
    
       // I RAN INTO TROUBLE WITH THIS ONE. SOLVED IT BY CREATING 
      // A SEPARATE CLASS CALLED restoreBG. 
    
        $(".restore").click(function () {
        var previousClass = $('body').attr('class');
        if (previousClass === undefined) {
            $("body").addClass("restoreBG");
        }
        else {
            $("body").removeClass(previousClass);
            $("body").addClass("restoreBG");
        }
        
    })
    
});