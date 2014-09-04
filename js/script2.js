/* some funky experiements */



$(document).ready(function() {


    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#336699";


    $("#btn").on("click", function(ev) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0,0,1000,1000);
        ctx.fillStyle = "#336699";
    });

    $('#myCanvas').on("mousemove", function(ev) {
        var pageX = ev.pageX;
        var pageY = ev.pageY;

        $("#x").text("X " + pageX);
        $("#y").text("Y " + pageY);

        aX = pageX - 10;
        aY = pageY - 25;

        ctx.fillRect(aX, aY, 10, 10);
    });


//
//    $(document).on("mousemove" , function(ev){
////        console.log("hi!",ev);
//
//        var pageX = ev.pageX;
//        var pageY = ev.pageY;
//
//
//
//    });

//    console.log(add(1,3));
//    console.log(sayMyName("Kalle"));
//
//    console.log(rechner.add(1,3));
//    console.log(rechner.sayMyName("Kalle"));
//    console.log(rechner.sayMyName("Peter"));
//    console.log(rechner.sayMyName("Bla"));

    var r1 = new Rechner(23);
    var r2 = new Rechner(42);

    console.log(r1.sayMyName("karl"));
    console.log(r2.sayMyName("pjotr"));
    console.log(r1.add(14,2));
    console.log();
    console.log();
    console.log();

    var tier1 = new Tier();
    var tier2 = new Tier("ben");
    var tier3 = new Tier("don");

    console.log(tier1.sayMyName());
    console.log(tier2.sayMyName());
    console.log(tier3.sayMyName());

    tier1.setName("Ferd");
    console.log(tier1.sayMyName());
    console.log();
    console.log();
    console.log();


    tier1.save();





});


/* lose funktionen */

function add(a,b) {
    return a+b;
}

function sayMyName(name) {
    return "hallo, " + name;
}


/* gekapseltes "objekt" */

var rechner = {
    zahl: 1,

    add: function(a, b) {
        return a + b;
    },
    sayMyName: function() {
        return "Yiha, " + name + " (zahl=" + this.zahl++ + ")";
    }

};


/* klassen - müssen erst isntanziiert werden */

function Rechner(start) {
    this.zahl = start || 1;

    this.add = function(a, b) {
        return a + b;
    };
    this.sayMyName = function(name) {
        return "Yiha, " + name + " (zahl=" + this.zahl++ + ")";
    }
}

function Tier() {
    this.name = "Default";

    this.setName = function(name) {
        this.name = name;
    };

    this.sayMyName = function() {
        return "My name is " + this.name;
    };


    this.save = function() {
        console.log("SAVE ME! (" + this.name + ")");
    };
}

