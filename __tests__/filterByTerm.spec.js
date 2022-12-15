const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];
    expect(filterByTerm(input, "link")).toEqual(output); //normal test
  });
  test("it should throw an error when the searchTerm is empty string", () => {
    const input = [{ id: 1, url: "https://www.url1.dev" }];
    expect(() => {
      filterByTerm(input, "");
    }).toThrowError(Error("searchTerm cannot be empty"));
  });
  test("it should throw an error when the inputArr is empty", () => {
    const input = [];
    expect(() => {
      filterByTerm(input, "link");
    }).toThrowError("inputArr cannot be empty");
  });
});
