function isInside(x, y, w, h, sw, sh){
    return r2r(0,0,sw,sh, x, y, w, h)
}


function r2r(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h){
    if (r1x + r1w >= r2x &&     // r1 right edge past r2 left
        r1x <= r2x + r2w &&       // r1 left edge past r2 right
        r1y + r1h >= r2y &&       // r1 top edge past r2 bottom
        r1y <= r2y + r2h) {       // r1 bottom edge past r2 top
          return true;
      }
      return false;
}

function c2c(x1, y1, r1, x2, y2, r2){
    let dist = Math.sqrt(Math.pow((x2 - x1), 2) +  Math.pow((y2 - y1), 2))
    return (r1 + r2) / 2 + 3 >= dist
}