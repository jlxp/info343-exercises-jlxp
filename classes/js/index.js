//@ts-check
"use strict";

/**
 * The abstract base class for all shapes
 */
export class Shape {   
    /**
     * Returns true if the x/y coordinate is within the shape,
     * false otherwise
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    containsPoint(x, y) {
        throw new Error("you must override this method!");
    }
}

/**
 * Represents a single x/y point
 */
export class Point extends Shape {
    /**
     * Constructs a new point
     * @param {number} x - the x coordinate of the point
     * @param {number} y - the y coordinate of the point
     */
    constructor(x, y) {
        //TODO: implement this
    }
    
    /**
     * Returns the x coordinate of the point
     * @returns {number}
     */
    getX() {
        //TODO:
    }
    
    /**
     * Returns the y coordinate of the point
     * @returns {number}
     */
    getY() {
        //TODO:
    }
    
    /**
     * Returns true if the x/y coordinate is within the shape,
     * false otherwise
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    containsPoint(x, y) {
        //TODO:
    }
}

/**
 * Represents a rectangle with a top/left point,
 * as well as a width and height
 */
export class Rectangle extends Shape {
    /**
     * Constructs a new rectangle
     * @param {Point} topLeft
     * @param {number} width
     * @param {number} height
     */
    constructor(topLeft, width, height) {
        //TODO:
    }

    /**
     * Returns the rectangle's top/left Point
     * @returns {Point}
     */
    getTopLeft() {
        //TODO:
    }

    /**
     * Returns the rectangle's width
     * @returns {number}
     */
    getWidth() {
        //TODO:
    }
    
    /**
     * Returns the rectangle's height
     * @returns {number}
     */
    getHeight() {
        //TODO:
    }

    /**
     * Returns true if the x/y coordinate is within the shape,
     * false otherwise
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    containsPoint(x, y) {
        //TODO:
    }
}

/**
 * Represents a perfect square
 */
export class Square extends Rectangle {
    /**
     * Constructs a new square. Since a
     * square has the same width and height
     * callers only need to provide one number
     * for both of those measurements.
     * @param {Point} topLeft 
     * @param {number} widthHeight 
     */
    constructor(topLeft, widthHeight) {
        //TODO:
    }
}

/**
 * Represents a circle with a center Point
 * as well as a radius
 */
export class Circle extends Shape  {
    /**
     * Constructs a new Circle
     * @param {Point} center 
     * @param {number} radius 
     */
    constructor(center, radius) {
        //TODO:
    }

    /**
     * Returns true if the x/y coordinate is within the shape,
     * false otherwise
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    containsPoint(x, y) {
        //use this formula:
        //https://math.stackexchange.com/questions/198764/how-to-know-if-a-point-is-inside-a-circle
        //TODO:
    }
}

