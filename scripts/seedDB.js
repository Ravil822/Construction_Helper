const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Projects collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/constructionProject");

const projectSeed = [
  {
    id: 1,
    title: "Bathroom Remodels",
    imageURL: "https://www.immersestl.com/wp-content/uploads/2017/10/Evanescence_Oval-6636_preview-300x326.jpeg",
    description: "We need to remodel our bathroom. We have all materials. Need to finish it by July 4, 2020. Please contact me by my phone number: 004-564-4564 Linda. ",
    date: { type: Date, default: Date.now }
  },
  {
    id: 2,
    title: "Granite countertop",
    imageURL: "https://farmhousegoals.com/wp-content/uploads/2019/12/Signature-Hardware-214146-30-18-Vine-Design-Farmhouse-Single-Basin-Copper-Kitchen-Sink-0-300x360.jpg",
    description: "We need to remodel our kitchen.  Need to finish it by July 4, 2020. Please contact me by my phone number: 004-564-4564 Linda.",
    date: { type: Date, default: Date.now }
  },
  {
    id: 3,
    title: "Inground Swimming Pool",
    imageURL: "https://www.tierranicarealestate.com/wp-content/uploads/2019/10/open-area-300x386-300x326.jpg",
    description: "We need to build Inground Swimming Pool. Need to finish it by July 4, 2020. Please contact me by my phone number: 004-564-4564 Linda.",
    date: { type: Date, default: Date.now }
  },
  {
    id: 4,
    title: "A new home construction",
    imageURL: "https://www.sitterlehomes.com/files/2017/09/Monteola5151-300x326.jpg",
    description: "We need to build a new house.  Please contact me by my phone number: 004-564-4564 Linda.",
    date: { type: Date, default: Date.now }
  },
  {
    id: 5,
    title: "Free help with Painting",
    imageURL: "https://homesexhibition.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-29-at-09.19.59-300x326.png",
    description: "We need free help to painting our room. Please contact me by my phone number: 004-564-4564 Linda.",
    date: { type: Date, default: Date.now }
  },
  {
    id: 6,
    title: "Install new Windows",
    imageURL: "https://www.scorpionhome.com/images/pages/replacement-windows-doors-belleville-il.jpg",
    description: "We need to install new windows in our house. Need to finish it by July 4, 2020. Please contact me by my phone number: 004-564-4564 Linda.",
    date: { type: Date, default: Date.now }
  }
  // {
  //   title: "Install new hardwood",
  //   imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMnZ6w2PAds00t5E_j7sZc80XGw7eFesMLCRmJJ1DwXnfUntZv&usqp=CAU",
  //   description: "We need to install new woodhard in our house. Need to finish it by July 4, 2020. Please contact me by my phone number: 004-564-4564 Linda.",
  // }
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
