/**
 * Created by joel on 2/3/17.
 */
export default (function Model() {
  return {
    data: {
      id: 123,
      name: "Introduction to Advertising",
      description: "Learn about advertising",
      textbooks: [
        {
          id: 1,
          author: "Joe Smith",
          title: "Mobile Advertising Fundamentals"
        },
        {
          id: 2,
          author: "Eli Hinnegan",
          title: "Introduction to Location-Based Advertising"
        },
        {
          id: 3,
          author: "Edward Bernays",
          title: "Public Relations"
        }
      ]
    }
  };
})();
