const projects = [
  {
    id: "001",
    name: "Tipi Travel initial fund",
    targetFund: 60000,
    currentFund: 5000,
    description:
      "An affortable group booking service that could lower down the travel cost",
    image: {
      url: "https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg",
      className: "object-center",
    },
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
  {
    id: "002",
    name: "Medium membership for JY Tech LLC",
    image: {
      url: "https://images.inc.com/uploaded_files/image/1920x1080/sebastien-gabriel-igK8lcBHaHE-unsplash_399292.jpg",
      className: "object-top",
    },

    targetFund: "40",
    description: `We are trying to create customized domain on Medium to share more content on tech, business and media topics`,
    detail: `
<p>We are a San Francisco based software company, not profit yet... but we build many websites, apps for the community and some startup companies, including
🤝 <a href="https://github.com/dotku/crowdfunding" class="font-bold">Crowdfunding</a> 🚀.<p>
<p>We are looking for funding for our projects.</p>
<p>We want to build a Decentralized Autonomous Organization (DAO) company that everyone can get involed and contribute. You can learn, play and get varied help.</p>
<p>Plaese support us! 🙏</p>
    `,
  },
  {
    id: "003",
    name: "X membership",
    image: {
      url: "https://userguide.skylum.com/hc/article_attachments/18557437146386",
      className: "object-top",
    },

    targetFund: "32",
    description: `We are trying to publish free content on X to on tech, business and media topics`,
    detail: `
<p>We are a San Francisco based software company, not profit yet... but we build many websites, apps for the community and some startup companies, including
🤝 <a href="https://github.com/dotku/crowdfunding" class="font-bold">Crowdfunding</a> 🚀.<p>
<p>We are looking for funding for our projects.</p>
<p>We want to build a Decentralized Autonomous Organization (DAO) company that everyone can get involed and contribute. You can learn, play and get varied help.</p>
<p>Plaese support us! 🙏</p>
    `,
  },
  {
    id: "004",
    name: "Mecury Credit Card",
    image: {
      url: "https://www.bookskeep.com/wp-content/uploads/2021/11/Featured-6.png",
      className: "object-top",
    },
    targetFund: "25000",
    description: `try to get $25,000 to get mecury bank credit card`,
    detail: `
<p>We are a San Francisco based software company, not profit yet... but we build many websites, apps for the community and some startup companies, including
🤝 <a href="https://github.com/dotku/crowdfunding" class="font-bold">Crowdfunding</a> 🚀.<p>
<p>We are looking for funding for our projects.</p>
<p>We want to build a Decentralized Autonomous Organization (DAO) company that everyone can get involed and contribute. You can learn, play and get varied help.</p>
<p>Plaese support us! 🙏</p>
    `,
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
