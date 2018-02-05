"use strict";

import * as index from "./index.js";
import records from "../data/yob1997.json";

describe("getRecordsWithNamePrefix", () => {
    it("should return the correct records given a prefix", () => {
        let output = index.getRecordsWithNamePrefix(records, "Zoh");
        expect(output).toEqual([ 
            { name: 'Zoha', sex: 'F', count: 8 },
            { name: 'Zohra', sex: 'F', count: 6 },
            { name: 'Zohaib', sex: 'M', count: 12 },
            { name: 'Zohair', sex: 'M', count: 5 },
            { name: 'Zohar', sex: 'M', count: 5 } 
        ]);
    });
});
describe("nameWithMaxCount", () => {
    it("should return the correct result", () => {
        let output = index.getNameWithMaxCount(records);
        expect(output).toEqual("Michael");
    });
});
describe("getMostPopularNames", () => {
    it("should return the top 10 female names", () => {
        let output = index.getMostPopularNames(records, "F", 5);
        expect(output).toHaveLength(5);
        expect(output).toEqual(["Emily","Jessica","Ashley","Sarah","Hannah"]);
    });
    it("should return the top 10 males names", () => {
        let output = index.getMostPopularNames(records, "M", 5);
        expect(output).toHaveLength(5);
        expect(output).toEqual(["Michael", "Jacob", "Matthew", "Christopher", "Joshua"]);
    });
});
