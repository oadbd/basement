config();
init();

var X = 8;
var Y = 3;

//left (point)
var three_6 = len(3,6);
var six_in = len(0,6);
var hyp = Math.sqrt((three_6 * three_6) + (three_6 * three_6)) + 
          Math.sqrt((six_in  * six_in)  + (six_in  * six_in));

function perimeter() {
    
    
    //top, right, bottom
    wall(new Point(len(X + 0),  len(Y + 0)),     len(29,6),  0, len(0,6)).attr("fill", "#000000");
    wall(new Point(len(X + 29), len(Y + 0)),     len(28),   90, len(0,6)).attr("fill", "#000000");
    wall(new Point(len(X + 0),  len(Y + 27, 6)), len(29,6),  0, len(0,6)).attr("fill", "#000000");


    //top, right, bottom (inside walls)
    wall(new Point(len(X + 0,6),  len(Y + 0,6)), len(28,6),  0, len(0,6));
    wall(new Point(len(X + 28,6), len(Y + 0,6)), len(27,0), 90, len(0,6));
    wall(new Point(len(X + 0,6),  len(Y + 27)),  len(28,6), 0, len(0,6));

    //left (top)
    wall(new Point(len(X + 0),  len(Y + 0)),     len(13),   90, len(0,6)).attr("fill", "#000000");

    //left point
    wall(new Point(len(X + 0,3), len(Y + 12,7)), hyp, 135, len(0,6)).attr("fill", "#000000");
    wall(new Point(len(X + 0,3), len(Y + 19,11)),hyp, 225, len(0,6)).attr("fill", "#000000");
    
    //left (bottom)
    wall(new Point(len(X + 0),  len(Y + 27, 6)), len(8),   270, len(0,6)).attr("fill", "#000000");


    //left top (inside)
    wall(new Point(len(X + 0,6),  len(Y + 0,6)), len(12,8),   90, len(0,6));

    //left point (inside)
    wall(new Point(len(X + 0,11), len(Y + 12,7)), hyp, 135, len(0,6));
    wall(new Point(len(X + 0,12), len(Y + 19,12)),hyp, 225, len(0,6));
    
    //left bottom (inside)
    wall(new Point(len(X + 0,6),  len(Y + 27)), len(7,8),   270, len(0,6));

    //covering up the angle errors
    floor(new Point(len(X,12), len(Y,12)), len(27,6), len(26));
    
    win(new Point(len(X + 4,6), len(Y + 27)), len(4), 0, len(1));
    win(new Point(len(X + 28,6), len(Y + 22,4)), len(4), 90, len(1));
    
}


//stairs/furnace etc
function misc() {
    stairs(new Point(len(X + 6,2), len(Y + 12,8)), len(10,10) + defaultWallWidth, len(3,6) + defaultWallWidth);
    furnace(new Point(len(X + 8,6), len(Y + 4,4)), len(3), len(2,4));
    waterheater(new Point(len(X + 10), len(Y + 7,8)), len(0,10));
    
}

function bedroom() {
    //right wall
    wall(new Point(len(X + 15), len(Y + 27)), len(11,4), 270, len(0,6));
    door(new Point(len(X + 15), len(Y + 17)), len(0,6,4), 90);
    
    //door wall (point horiz)
    wall(new Point(len(X + 0,4), len(Y + 19,5)), hyp - len(0,8), 315);
    wall(new Point(len(X,4) + three_6, len(Y + 16,2)), three_6);
    
    //covering up the angle errors
    floor(new Point(len(X+1,6), len(Y+15,8)), len(2,6), len(0,6));
    
    door(new Point(len(X + 1,2), len(Y + 18,6,4)), len(0,4,4), 315);

    //closet (top right)
    wall(new Point(len(X + 0, 6), len(Y + 21,2)), len(2,6));
    wall(new Point(len(X + 3), len(Y + 27,2)), len(6,4), 270);
    
}

function bathroom() {
    wall(new Point(len(X + 7),   len(Y + 0,6)), len(9,2), 90); 
    wall(new Point(len(X + 0,10), len(Y + 9,4)), len(6,6));
    door(new Point(len(X + 1,10), len(Y + 9,4)));
}

function familyroom() {
    wall(new Point(len(X + 17), len(Y,6)), len(9,2), 90);
}

function rulers() {
    //ruler(new Point(len(X,0), len(Y + 24,6)), len(0,6), "T");
    
    ruler(new Point(len(X), len(Y - 1)), len(29,6), "29' 6\"");
    
    //perimeter (top  right left)
    ruler(new Point(len(X), len(Y - 1)), len(29,6), "29' 6\"");    
    ruler(new Point(len(X + 31,6), len(Y)), len(28), "28' 0\"", 90);
    ruler(new Point(len(X - 1), len(Y + 13)), len(13), "13' 0\"", 270);
    ruler(new Point(len(X - 1), len(Y + 28)), len(8), "8' 0\"", 270);
    
    //windows (bottom right)
    ruler(new Point(len(X), len(Y + 28,8)), len(6,6), "6' 6\"");
    ruler(new Point(len(X + 30), len(Y + 24,6)), len(3,6), "3' 6\"", 90);
    
    
    //family room
    ruler(new Point(len(X + 17,4), len(Y + 2,6)), len(11,2), "11' 2\"", 0, true);
    
    //furnace room
    ruler(new Point(len(X + 8,10), len(Y + 2,6)), len(8,2), "8' 2\"", 0, true);


}

perimeter();
misc();
bedroom();
bathroom();
familyroom();

rulers()

var mainfloor = paper.rect(0, 0, pxWidth, pxHeight).attr({"fill": "transparent", "stroke-width": 0});
var dLine = null;
var down = false;
var downX = 0;
var downY = 0;
mainfloor.mousedown(function (evt) {
    downX = evt.offsetX;
    downY = evt.offsetY;
    down = true;
});
var mouseupHandler = function () {
    down = false;
};
mainfloor.mouseup(mouseupHandler);

mainfloor.dblclick(function () {
    if (dLine) {
        dLine.remove();
        dLine = null;
        document.getElementById("length").innerHTML = "";
    }
});

mainfloor.mousemove(function (evt, x, y) {
    if (down) {
        if (dLine) {
            dLine.remove();
        }
        var xdiff = Math.abs(downX - evt.offsetX);
        var ydiff = Math.abs(downY - evt.offsetY);
        var toX = xdiff >= ydiff ? evt.offsetX : downX;
        var toY = ydiff > xdiff ? evt.offsetY : downY;
        dLine = paper.path(["M",downX, downY,"L",toX,toY]).attr("stroke", "FF0000");
        dLine.mouseup(mouseupHandler);
        document.getElementById("length").innerHTML = "Length: " + pxToIn(xdiff >= ydiff ? xdiff : ydiff);
    }
    document.getElementById("coords").innerHTML = "X: " + pxToIn(evt.offsetX - len(X)) + " &nbsp;&nbsp; Y: " + pxToIn(evt.offsetY - len(Y));
});

