"use strict";

import {Shape, Point, Rectangle, Square, Circle} from "./index.js"

describe("Point", () => {
    describe("constructor", () => {
        it("should construct correctly", () => {
            let p = new Point(10,12);
            expect(p).toBeInstanceOf(Point);
            expect(p).toBeInstanceOf(Shape);
            expect(p.getX()).toEqual(10);
            expect(p.getY()).toEqual(12);
        });
    });
    describe("containsPoint", () => {
        it("should be defined", () => {
            let p = new Point(10,12);
            expect(p.containsPoint).toBeDefined();
        })
        it("should return true if points are the same", () => {
            let p = new Point(10,12);
            expect(p.containsPoint(p.getX(), p.getY())).toEqual(true);
        });
        it("should return false if points are different", () => {
            let p = new Point(10,12);
            expect(p.containsPoint(0,0)).toEqual(false);
        });
    });
});
describe("Rectangle", () => {
    describe("constructor", () => {
        it("should construct correctly", () => {
            let p = new Point(0,0);
            let width = 10;
            let height = 20;
            let r  = new Rectangle(p, width, height);
            expect(r).toBeInstanceOf(Rectangle);
            expect(r).toBeInstanceOf(Shape);
            expect(r.getTopLeft()).toEqual(p);
            expect(r.getWidth()).toEqual(width);
            expect(r.getHeight()).toEqual(height);
        });
    });
    describe("containsPoint", () => {
        it("should return true if point is within rect", () => {
            let p = new Point(0,0);
            let width = 5;
            let height = 7;
            let r  = new Rectangle(p, width, height);
            for (let x = p.x; x < p.x + width; x++) {
                for (let y = p.y; y < p.y + height; y++) {
                    expect(r.containsPoint(x, y)).toBe(true);
                }
            }
        });
        it("should return false if point is outside rect", () => {
            let r = new Rectangle(new Point(0,0), 5, 7);
            expect(r.containsPoint(10,20)).toBe(false);
            expect(r.containsPoint(-10,-20)).toBe(false);
        });
    });
});
describe("Square", () => {
    describe("constructor", () => {
        it("should construct correctly", () => {
            let p = new Point(0,0);
            let widthHeight = 10;
            let s  = new Square(p, widthHeight);
            expect(s).toBeInstanceOf(Square);
            expect(s).toBeInstanceOf(Rectangle);
            expect(s).toBeInstanceOf(Shape);
            expect(s.getTopLeft()).toEqual(p);
            expect(s.getWidth()).toEqual(widthHeight);
            expect(s.getHeight()).toEqual(widthHeight);
        });
    });
    describe("containsPoint", () => {
        it("should return true if point is within square", () => {
            let p = new Point(0,0);
            let widthHeight = 5;
            let s  = new Square(p, widthHeight);
            for (let x = p.x; x < p.x + widthHeight; x++) {
                for (let y = p.y; y < p.y + widthHeight; y++) {
                    expect(s.containsPoint(x, y)).toBe(true);
                }
            }
        });
        it("should return false if point is outside rect", () => {
            let s = new Square(new Point(0,0), 5);
            expect(s.containsPoint(10,20)).toBe(false);
            expect(s.containsPoint(-10,-20)).toBe(false);
        });
    });
});
describe("circle", () => {
    describe("constructor", () => {
        it("should construct correctly", () => {
            let p = new Point(10,10);
            let r = 4;
            let c = new Circle(p, r);
            expect(c).toBeInstanceOf(Circle);
            expect(c).toBeInstanceOf(Shape);
            expect(c.center).toEqual(p);
            expect(c.radius).toEqual(r);
        });
    });
    describe("containsPoint", () => {
        it("should return true if point is within circle", () => {
            let p = new Point(10,10);
            let r = 4;
            let c = new Circle(p, r);
            expect(c.containsPoint(11,11)).toBe(true);            
            expect(c.containsPoint(9,9)).toBe(true);            
        });
        it("should return false if point is outside circle", () => {
            let p = new Point(10,10);
            let r = 4;
            let c = new Circle(p, r);
            expect(c.containsPoint(100,100)).toBe(false);
            expect(c.containsPoint(-100,-100)).toBe(false);
        });
    });
});