const { formatTitle, shortenBio, convertLength } = require("./public/utils");

let testData = {
  id: 1,
  firstName: "Patten",
  lastName: "Goforth",
  bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  datetime: "2022-03-14 8:00:00",
  title: "nulla ac",
  length: 65,
  floor: 5,
  roomNumber: 3,
};

// test("2 should equal 2", () => {
//   expect(2).toBe(2);
// });

// test("the firstname should be 'Patten'", () => {
//   expect(testData.firstName).toBe("Patten");
// });

// describe - way to group all tests together
// same syntax as test - description, callback

describe("format title tests", () => {
  test("format title should return a string", () => {
    let formattedTitle = formatTitle(testData.title);
    // console.log(formattedTitle);
    // console.log(typeof formattedTitle);
    expect(typeof formattedTitle).toBe("string");
  });

  test("formatTitle should return a correctly formatted title", () => {
    let formattedTitle = formatTitle(testData.title);
    expect(formattedTitle).toBe("Nulla Ac");
  });

  // test("description", () => {});
});

describe("shortenBio tests", () => {
  test("shortenBio should return a string", () => {
    let shortBio = shortenBio(testData.bio);
    expect(typeof shortBio).toBe("string");
  });
  test("shortenBio should return shorter than the bio string", () => {
    let shortBio = shortenBio(testData.bio);
    expect(shortBio.length).toBeLessThan(testData.bio.length);
  });
  test("shortenBio should add periods to the end of the string", () => {
    let shortBio = shortenBio(testData.bio);
    expect(shortBio).toContain("...");
  });
});
