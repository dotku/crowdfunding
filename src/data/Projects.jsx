const projects = [
  {
    id: "001",
    name: "Tipi Travel",
    discription:
      "An affortable group booking service that could lower down the travel cost",
    image:
      "https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg",
    locations: [
      "Colombia",
      "Brazil",
      "Argentina",
      "Spain",
      "Portugal",
      "Morocco",
      "South France",
      "Algiers",
      "Balkans",
      "Italy",
      "Istanbul",
      "South Europe",
      "Egypt",
      "Asia",
      "South East Asia",
      "Central Europe",
    ],
    detail: `
An affortable group booking service that could lower down the travel cost

<ol class="list-decimal list-inside my-3 px-5">
  <li>The travler could stay for 3 months to 1 year (2 weeks minimum stays)</li>
  <li>The travler could pay by location pass or membership, e.g., if the traveler did the South America option then they could stay 1 month in Brazil, Colombia and Argentina.</li>
  <li>These places are  chosen because they are cheap, safe, fun and good for our audience.</li>
</ol>

Potential Groups:

<ul class="list-disc list-inside my-3 px-5">
  <li>Art 🎨</li>
  <li>History and Culture 🏛️</li>
  <li>Adventure 🗺️</li>
  <li>Nature 🌿</li>
  <li>Food 🍲</li>
</ul>

People could pick an interest and then we can provide a trip for them, which is excellent for any or multiple options from the above.
For example - it is a way to  sell places  that may not seem so amazing but actually they are  great for art or history.

PROGRAMMES - these could happen in the locations as listed  above, people can apply, then if accepted  they get a room and access to a co-working or space.
    `,
    targetedGroups: [
      "Art 🎨",
      "History and Culture 🏛️",
      "Adventure 🗺️",
      "Nature 🌿",
      "Food 🍲",
    ],
  },
];

export function genProjects() {
  return new Promise((rsv) => {
    setTimeout(() => {
      rsv(projects);
    }, 3000);
  });
}

export function genProject(id) {
  return new Promise((rsv, rej) => {
    setTimeout(() => {
      const project = projects.find((p) => p.id === id);
      project ? rsv(project) : rej(`not found item with id: ${id}`);
    }, 3000);
  });
}

export default projects;
