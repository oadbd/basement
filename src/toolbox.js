//Some global config stuff, everthing else in the toolbox will need to use

W = "W";
H = "H";

pxWidth = 1600;
pxHeight = 1600;

inWidth = 33 * 12;
inHeight = 33 * 12;

widthRatio = pxWidth / inWidth;
heightRatio = pxHeight / inHeight;

elId = "floorplan";
el = null;
paper = null;

/**
 * Configure global options
 * @param (object) opts - 
 *      pxWidth: width of canvas in pixels
 *      pxHeight: height of canvas in pixels
 *      inWidth: width of canvas in inches
 *      inHeight: height of canvas in inches
 *      elId: id of main div element
 */
function config(opts) {
    var o = opts || {};
    
    pxWidth = o.pxWidth || pxWidth;
    pxHeight = o.pxHeight || pxHeight;
    
    inWidth = o.inWidth || inWidth;
    inHeight = o.inHeight || inHeight;

    widthRatio = pxWidth / inWidth;
    heightRatio = pxHeight / inHeight;
    
    elId = o.elId || elId;
}

function init() {
    el = document.getElementById(elId);
    el.style.height = pxHeight + 'px';
    el.style.width = pxWidth + 'px';
    
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

/**
 * Calculate the number of inches given feet, inches and eigths
 * @param (number) feet
 * @param (number) inches
 * @param (number) eigths
 * @returns (number) the number of inches specified by the parameters
 */
function down(feet, inches, eigths) {
    var l = (12 * (feet || 0)) + (inches || 0) + ((eigths || 0) / 8); 
    return pixels(l, H);
}
function right(feet, inches, eigths) {
    var l = (12 * (feet || 0)) + (inches || 0) + ((eigths || 0) / 8); 
    return pixels(l, W);
}

/**
 * Determine the number of pixels given the specified length in inches
 * for the provided direction.
 * @param (number) length - The length in inches to convert ot pixels
 * @param (dir) dir - Either W or H. Defaults to W
 * @returns (number) pixels
 */
function pixels(length, dir) {
    return length * (dir === H ? heightRatio : widthRatio);
}
