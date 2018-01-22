/**
 * Automated Tests for js/exercises.js
 * DO NOT MODIFY THIS FILE
 */

describe("exercises", function() {
    //allows me to use `expect()` rather than `chai.expect()`
    let expect = chai.expect;

    describe("caseInsensitiveEquals", function() {
        it("should return true when strings are exactly the same", function() {
            expect(caseInsensitiveEquals("testing", "testing")).to.equal(true, "I passed the same string for both parameters but you didn't return true");
        });
        it("should return true when strings are the same but with different casing", function() {
            expect(caseInsensitiveEquals("testing", "TESTING")).to.equal(true, "remember to compare the strings in a case-insensitive manner (e.g., `testing` and `TESTING` should be considered equal)");
        });
        it("should return false when strings are different", function() {
            expect(caseInsensitiveEquals("testing", "different")).to.equal(false, "I passed two different strings but you didn't return false");
        });
    });

    describe("startsWith", function() {
        it("should return true when string starts with prefix", function() {
            expect(startsWith("testing", "test")).to.equal(true, "I passed `testing` and `test` but you didn't return true");
        });
        it("should return false when string doesn't start with prefix", function() {
            expect(startsWith("testing", "diff")).to.equal(false, "I passed `testing` and `diff` but you didn't return false");
        });
        it("should handle the prefix being longer than the string", function() {
            expect(startsWith("test", "longer")).to.equal(false, "if the prefix is longer than the stringValue, you should return false");
        });
        it("should handle a zero-length stringValue", function() {
            expect(startsWith("", "different")).to.equal(false, "if the stringValue is zero-length, you should return false");
        });
        it("should handle a zero-length prefix", function() {
            expect(startsWith("test", "")).to.equal(true, "if the prefix is zero-length, you should return true since any string starts with a zero-length string");
        });
    });

    describe("toTitleCase", function() {
        it("should return capitalized form of word", function() {
            expect(toTitleCase("test")).to.equal("Test", "you should return `Test` given `test`");
        });
        it("should return capitalized form of upper-case", function() {
            expect(toTitleCase("TEST")).to.equal("Test", "you should return `Test` given `TEST`");
        });
        it("should handle a zero-length input", function() {
            expect(toTitleCase("")).to.equal("", "you should return an empty string given an empty string");
        });
    });

    describe("randomInteger", function() {
        it("should return an integer not a decimal", function() {
            let output = randomInteger(0,10);
            expect(output % 1).to.equal(0, "remember to use Math.floor() to return an integer, not a decimal");
        });
        it("should return a number in the correct range", function() {
            //generate 100 random integers and ensure each is within range
            //this should help catch the edge cases
            for (let i = 0; i < 100; i++) {
                let output = randomInteger(10,11);
                expect(output).to.be.at.least(10, "number should be >= min");
                expect(output).to.be.below(11, "number should be < max");    
            }
        });
    });

    describe("createPrioritiesArray", function() {
        it("should return a new array with the correct elements", function() {
            let output = createPrioritiesArray();
            expect(output).to.be.an.instanceOf(Array);
            expect(output).to.have.length(3);
            expect(output).to.deep.equal(["low", "medium", "high"], "you should return an array with the elements 'low', 'medium', and 'high' in that order");
        });
    });

    describe("evensUnder", function() {
        it("should return an array", function() {
            expect(evensUnder(10)).to.be.instanceOf(Array);
        });
        it("should return correct values", function() {
            expect(evensUnder(10)).to.deep.equal([0,2,4,6,8]);
        });
        it("should return an empty array given a negative max", function() {
            let output = evensUnder(-10);
            expect(output).to.be.instanceOf(Array);
            expect(output).to.have.length(0);
        });
    });

    describe("elementIndex", function() {
        it("should return index of element", function() {
            expect(elementIndex([1,2,3], 2)).to.equal(1);
        });
        it("should return -1 if element is not in array", function() {
            expect(elementIndex([1,2,3], 4)).to.equal(-1, "remember to return -1 if the element is not in the array");
        });
        it("should use strict equality matching", function() {
            expect(elementIndex([1,2,3], "2")).to.equal(-1, "remember to compare elements using the strict equality operator");
        });
    });
    
    describe("largestNumber", function() {
        it("should return largest number from an array of positive numbers", function() {
            expect(largestNumber([1,2,3])).to.be.equal(3);
        });
        it("should handle array with all negative numbers", function() {
            expect(largestNumber([-1,-2,-3])).to.be.equal(-1, "remember that all the elements might be negative")
        });
        it("should handle zero-length array", function() {
            expect(largestNumber([])).to.be.equal(undefined, "remember to handle a zero-length input array");
        });
    });

    describe("average", function() {
        it("should return the correct average", function() {
            expect(average([1,2,3])).to.equal(2);
        });
        it("should return undefined for an empty array", function() {
            expect(average([])).to.equal(undefined, "remember to return undefined if the array is empty");
        });
    });

    describe("reverseArray", function() {
        it("should return a new array, not the original array", function() {
            let input = [1,2,3];
            let output = reverseArray(input);
            expect(output).to.be.instanceOf(Array);
            expect(output === input).to.equal(false, "make sure you build and return a new array; don't modify the input array");
        });
        it("should return a new array with elements in reverse order", function() {
            expect(reverseArray([1,2,3])).to.deep.equal([3,2,1], "remember to add the elements to the output array in reverse order");
        });
        it("should handle an empty input array", function() {
            let output = reverseArray([]);
            expect(output).to.be.instanceOf(Array);
            expect(output).to.have.length(0);
        });
    });
    
    describe("createTask", function() {
        it("should return a new JavaScript object with the correct properties", function() {
            let taskTitle = "test";
            let output = createTask(taskTitle);
            expect(output).to.be.instanceOf(Object);
            expect(output).to.have.property("title", taskTitle, "remember to set the `title` property on the new object to the `taskTitle` parameter value");
            expect(output).to.have.property("done", false, "remember to add a `done` property set to false");
        });        
    });

    describe("setPriority", function() {
        it("should set the priority", function() {
            let task = {title: "test", done: false};
            setPriority(task, 1);
            expect(task).has.property("priority", 1);
        });
    });

    describe("toggleDone", function() {
        it("should change `done` property from false to true", function() {
            let task = {title: "test", done: false};
            toggleDone(task);
            expect(task).has.property("done", true, "if the `done` property is true, set it to false");
        });
        it("should change `done` property from true to false", function() {
            let task = {title: "test", done: true};
            toggleDone(task);
            expect(task).has.property("done", false, "if the `done` property is false, set it to true");
        });
        it("should add a `done` property set to true if there is no done property", function() {
            let task = {title: "test"};
            toggleDone(task);
            expect(task).has.property("done", true, "if there is no `done` property, add one set to true");
        });
    });

    describe("addTag", function() {
        it("should create the tags array if not already there", function() {
            let tagName = "tag";
            let task = {title: "test", done: false};
            addTag(task, tagName);
            expect(task.tags).to.be.instanceOf(Array, "remember to check if the `tags` property exists, and add it if it's not there yet");
            expect(task.tags).to.have.length(1);
            expect(task.tags).to.include(tagName);
        });        
        it("should add a tag to an existing array of tags", function() {
            let tagName = "tag";
            let task = {title: "test", done: false, tags: ["other"]};
            addTag(task, tagName);
            expect(task.tags).to.have.length(2, "remember to push the tag into the array of tags");
            expect(task.tags).to.include(tagName, "remember to push the tag into the array of tags");
        });
        it("should not add a tag if it's already in the existing array of tags", function() {
            let tagName = "tag";
            let task = {title: "test", done: false, tags: [tagName]};
            addTag(task, tagName);
            expect(task.tags).to.have.length(1, "don't add a tag to the array if it's already in the array")
            expect(task.tags).to.include(tagName);
        });
    });

    describe("removeTag", function() {
        it("should remove a tag from the tags array", function() {
            let tagName = "tag"
            let task = {title: "test", done: false, tags: [tagName, "other"]};
            removeTag(task, tagName);
            expect(task.tags).to.have.length(1, "remember to remove the tag from the array");
            expect(task.tags).to.include("other");
        });
        it("should delete the tags property if no more tags", function() {
            let tagName = "tag"
            let task = {title: "test", done: false, tags: [tagName]};
            removeTag(task, tagName);
            expect(task.tags).to.be.undefined;
        });
    });

    describe("createTasksArray", function() {
        it("should create an array of tasks objects given titles", function() {
            let titles = ["test 1", "test 2"];
            let tasks = createTasksArray(titles);
            expect(tasks).to.be.instanceOf(Array);
            expect(tasks).to.have.length(2);
            for (let i = 0; i < titles.length; i++) {
                expect(tasks[i]).to.deep.equal(createTask(titles[i]));
            }    
        });
    });

    describe("getProperty", function() {
        let nestedObj = {
            a: {
                m: {
                    x: "foo"
                }
            },
            b: "bar"
        };

        it("should return a deeply-nested property", function() {
            expect(getProperty(nestedObj, "a.m.x")).to.equal("foo", "remember to follow all the properties in the path");
        });
        it("should return a first-level property", function() {
            expect(getProperty(nestedObj, "b")).to.equal("bar", "remember that the path may contain only one level");
        });
        it("should return undefined for a path with invalid properties", function() {
            expect(getProperty(nestedObj, "a.b.c")).to.equal(undefined, "remember to return undefined if one of the properties doesn't exist");
        });
        it("should return undefined for a path with more levels than the object", function() {
            expect(getProperty(nestedObj, "a.m.x.z")).to.equal(undefined, "remember to return undefined if the current value doesn't have the next property");
        });
        it("should return undefined for an empty path", function() {
            expect(getProperty(nestedObj, "")).to.equal(undefined, "if the path is zero-length, return undefined");
        });
    });

});
