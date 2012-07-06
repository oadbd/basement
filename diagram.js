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
    wall(new Point(len(X + 0),  len(Y + 0)),     len(29,6),  0, len(0,6));
    wall(new Point(len(X + 29), len(Y + 0)),     len(28),   90, len(0,6));
    wall(new Point(len(X + 0),  len(Y + 27, 6)), len(29,6),  0, len(0,6));

    //left (top)
    wall(new Point(len(X + 0),  len(Y + 0)),     len(13),   90, len(0,6));


              
    wall(new Point(len(X + 0,3), len(Y + 12,7)), hyp, 135, len(0,6));
    wall(new Point(len(X + 0,3), len(Y + 19,11)),hyp, 225, len(0,6));
    
    //left (bottom)
    wall(new Point(len(X + 0),  len(Y + 27, 6)), len(8),   270, len(0,6));
    
    //covering up the angle errors
    floor(new Point(len(X,6), len(Y,6)), len(28,6), len(27));
    
    win(new Point(len(X + 4,6), len(Y + 27,6)), len(4), 0, len(0,6));
    win(new Point(len(X + 29), len(Y + 22,6)), len(4), 90, len(0,6));
    
}

//stairs/furnace etc
function misc() {
    stairs(new Point(len(X + 6,2), len(Y + 12,8)), len(10,10) + defaultWallWidth, len(3,6) + defaultWallWidth);
    furnace(new Point(len(X + 10,6), len(Y + 3,6)), len(2,6), len(2));
    waterheater(new Point(len(X + 11,8), len(Y + 7)), len(1,2));
}

function bedroom() {
    //right wall
    wall(new Point(len(X + 15), len(Y + 27,6)), len(11,10), 270, len(0,6));
    
    //door wall (point horiz)
    wall(new Point(len(X + 0), len(Y + 19,10)), hyp, 315);
    wall(new Point(len(X,4) + three_6, len(Y + 16,2)), three_6);
    //covering up the angle errors
    floor(new Point(len(X,6), len(Y+15,8)), len(4), len(0,6));
    
    //closet (top right)
    wall(new Point(len(X), len(Y + 21,2)), len(3));
    wall(new Point(len(X + 3), len(Y + 27,8)), len(6,10), 270);
}

function bathroom() {
    wall(new Point(len(X + 8), len(Y)), len(9,8), 90); 
    wall(new Point(len(X), len(Y + 9,4)), len(8));
}

function familyroom() {
    wall(new Point(len(X + 17), len(Y)), len(9,8), 90);
}

function rulers() {
    //perimeter (top  right left)
    ruler(new Point(len(X), len(Y - 1)), len(29,6), "29' 6\"");    
    ruler(new Point(len(X + 31,6), len(Y)), len(28), "28' 0\"", 90);
    ruler(new Point(len(X - 1), len(Y + 13)), len(13), "13' 0\"", 270);
    ruler(new Point(len(X - 1), len(Y + 28)), len(8), "8' 0\"", 270);
    
    //windows (bottom right)
    ruler(new Point(len(X), len(Y + 28,8)), len(6,6), "6' 6\"");
    ruler(new Point(len(X + 30), len(Y + 24,6)), len(3,6), "3' 6\"", 90);
}

perimeter();
misc();
bedroom();
bathroom();
familyroom();

rulers()


