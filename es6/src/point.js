export default class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    distanceTo(otherPoint) {
        let xDiff = Math.abs(this.x - otherPoint.x);
        let yDiff = Math.abs(this.y - otherPoint.y);
        return Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));        
    }
}
