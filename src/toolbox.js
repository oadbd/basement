//Some global config stuff, everthing else in the toolbox will need to use
var DEBUG = 0;

var pxWidth = 1600;
var pxHeight = 1600;

var inWidth = 44 * 12;
var inHeight = 34 * 12;

var pxPerIn = 2;

var elId = "floorplan";
var el = null;
var paper = null;

var defaultWallWidth = 0;
var defaultDoorLength = 0;

var C = {
    wall:     DEBUG ? "#EAEAEA" : "#5C3317",
    floor:    DEBUG ? "#FF0000" : "#FFFFFF",
    ruler:    DEBUG ? "#AAAAAA" : "#AAAAAA",
    misc:     DEBUG ? "#AAAAAA" : "#AAAAAA",
    door:     DEBUG ? "#EAEAEA" : "#FFFFFF",
    _window:   DEBUG ? "#FAFAFA" : "#FAFAFA"
};

/**
 * Configure global options
 * @param (object) opts - 
 *      inWidth: width of canvas in inches (default 32)
 *      inHeight: height of canvas in inches (default 32)
 *      pxPerIn: pixels per inch (default 4)
 *      elId: id of main div element
 */
function config(opts) {
    var o = opts || {};
        
    inWidth = o.inWidth || inWidth;
    inHeight = o.inHeight || inHeight;

    pxPerIn = o.pxPerIn || pxPerIn;
    
    pxWidth = pxPerIn * inWidth;
    pxHeight = pxPerIn * inHeight;
    
    elId = o.elId || elId;
}

function init() {
    el = document.getElementById(elId);
    el.style.height = pxHeight + 'px';
    el.style.width = pxWidth + 'px';
 
    defaultWallWidth = len(0,4,0);
    defaultDoorLength = len(0,32,0);
    paper = Raphael(el);
    
}

/**
 * A single pixel point
 * @param (number) x
 * @param (number) y
 */
function Point(x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.coord = function (xOff, yOff) {
    return [this.x + (xOff || 0), this.y + (yOff || 0)].join(",");
};

/**
 * Calculate the number of inches given feet, inches and eigths
 * @param (number) feet
 * @param (number) inches
 * @param (number) eigths
 * @returns (number) the number of inches specified by the parameters
 */
function len(feet, inches, eigths) {
    var l = (12 * (feet || 0)) + (inches || 0) + ((eigths || 0) / 8); 
    return pixels(l);
}
function pxToIn(pixels) {
    var inches = pixels / pxPerIn;
    var feet = parseInt(inches / 12,10);
    inches = inches - (feet * 12)
    
    return feet + "' " + inches + '"';
}

/**
 * Determine the number of pixels given the specified length in inches
 * for the provided direction.
 * @param (number) length - The length in inches to convert ot pixels
 * @param (dir) dir - Either W or H. Defaults to W
 * @returns (number) pixels
 */
function pixels(length) {
    return length * pxPerIn;
}
