/**
 * Draws a wall from a specified starting point
 * @param (Point) start
 * @param (number) len - Length in px's
 * @param (number) angle - angle to draw wall at. 0 is right, 90 down, 180 left 270 up
 * @param (number) width - in pixels. Defaults to 4 inches
 * @returns (Element) - The raphael element
 */
function wall(start, length, angle, width) {
    var wallWidth = width || defaultWallWidth;
    
    console.log("drawing wall: " + [start.x, start.y, length, wallWidth].join(", "));
    var w = paper.rect(start.x, start.y, length, wallWidth); 
    w.attr("stroke-width", DEBUG ? 1 : 0);

    w.attr("fill", C.wall);    
    
    if (angle) {
        w.rotate(angle, start.x + (wallWidth / 2.0), start.y + (wallWidth / 2.0));
    }
    return w;
}

function floor(start, width, height) {
    var w = paper.rect(start.x, start.y, width, height);
    w.attr("stroke-width", 0);

    w.attr("fill", C.floor);
    return w;
}

function ruler(start, length, txt, angle, inside) {
    var e = new Point(start.x + length, start.y);
    var arrows = inside || false;
    paper.setStart();
    paper.path(["M", start.coord(), "L", e.coord()].join(""));
//    if (arrows) {
//        paper.path(["M", start.coord(3,len(0,3) *  1), "L", start.coord(0,len(0,0))].join(""));
//        paper.path(["M", start.coord(3,len(0,3) * -1), "L", start.coord(0,len(0,0))].join(""));
//        paper.path(["M", e.coord(-3,len(0,3) *  1), "L", e.coord(0,len(0,0))].join(""));
//        paper.path(["M", e.coord(-3,len(0,3) * -1), "L", e.coord(0,len(0,0))].join(""));
//    } else {
//        paper.path(["M", start.coord(0,len(0,3) * -1), "L", start.coord(0,len(0,3))].join(""));
//        paper.path(["M", e.coord(0,len(0,3) * -1), "L", e.coord(0,len(0,3))].join(""));
//    }
    paper.text(start.x + (length / 2.0), start.y - len(0,4), txt);
    var r = paper.setFinish();    
    r.attr("stroke", C.ruler);

    if (angle) {
        r.rotate(angle, start.x, start.y);
    }
    return r;
}

function win(start, length, angle, width) {
    var windowWidth = width || defaultWallWidth;
    
    console.log("drawing window: " + [start.x, start.y, length, windowWidth].join(", "));
    paper.setStart();
    var w = paper.rect(start.x, start.y, length, windowWidth); 
    w.attr("stroke-width", DEBUG ? 1 : 0);
    w.attr("fill", C.window);    
    paper.path(["M", start.coord(0, windowWidth / 2), "L", start.coord(length, windowWidth / 2)]);
    
    var wind = paper.setFinish();
    
    if (angle) {
        wind.rotate(angle, start.x + (windowWidth / 2.0), start.y + (windowWidth / 2.0));
    }
    return wind;
}

function door(start, wallWidth, angle, length) {
    var doorWidth = wallWidth || defaultWallWidth;
    var doorLength = length || defaultDoorLength;
    
    console.log("drawing door: " + [start.x, start.y, length, doorWidth].join(", "));
    paper.setStart();
    var d = paper.rect(start.x, start.y, doorLength, doorWidth); 
    d.attr("stroke-width", DEBUG ? 1 : 0);
    d.attr("fill", C.door);    
    
    var doorLine = paper.path(["M", start.coord(), "L", start.coord(doorLength)]);
    doorLine.attr("stroke-width", len(0,2));
    doorLine.attr("stroke-linecap", "round");
    
    var dore = paper.setFinish();
    
    if (angle) {
        dore.rotate(angle, start.x + (doorWidth / 2.0), start.y + (doorWidth / 2.0));
    }
    doorLine.rotate(330, start.x, start.y);
    
    return dore;
}

function stairs(start, length, width) {
    paper.setStart();
    wall(start, length);
    wall(new Point(start.x, start.y + width - defaultWallWidth), length);
    wall(new Point(start.x + length - defaultWallWidth, start.y), width, 90);

    var numSteps = 14;
    var step = (length - defaultWallWidth) / numSteps;
    
    for (var i = 0; i < numSteps; i++) {
        paper.path(["M", start.coord((step * i) + 1, defaultWallWidth), "L", start.coord((step * i) + 1, width - (defaultWallWidth))]);
    }
    var s = paper.setFinish();
    return s;
}
function furnace(start, length, width) {
    var fullLen = length;
    var quarterLen = fullLen / 4.0;
    length = quarterLen * 3;
    paper.setStart();
    
    paper.rect(start.x, start.y, length, width);
    paper.path(["M",start.coord(),"L",start.coord(length,width)]);
    paper.path(["M",start.coord(0,width),"L",start.coord(length,0)]);
    paper.rect(start.x + length, start.y, quarterLen, width);
    paper.text(start.x + length + 6, start.y + (width / 2), "FURN.").rotate(90);
    
    var f = paper.setFinish();
    f.attr("stroke", C.misc);
    return f;
}
function waterheater(start, radius) {
    paper.setStart();
    paper.circle(start.x,start.y, radius); 
    paper.text(start.x,start.y, "W. H.");
    var wh = paper.setFinish();
    
    wh.attr("stroke", C.misc);
    return wh;
}
