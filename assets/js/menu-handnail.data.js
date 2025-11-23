export const HANDNAIL_MENU = [
  // ----- GEL / NATURAL NAILS -----
  {
    number: 1,
    name: "Gel Manicure",
    price: "$40.00",
    description: "Shaping, cuticle care, and long-lasting gel polish finished with a hydrating treatment.",
    isActive: true,
    sortGroup: "gel",
    addons: [
      { name: "Designs" , price: "+$5 & up" },
      { name: "Gel Removal (No Service)", price: "+$10" }
    ]
  },
  {
    number: 2,
    name: "Builder Gel",
    price: "$60.00",
    description: "Builder-gel enhancement applied on natural nails to reinforce strength and provide optional extended length.",
    isActive: true,
    sortGroup: "gel",
    addons: [
      { name: "French Tip (White or Color)", price: "+$10" },
      { name: "Designs / Diamonds", price: "+$5 & up" },
      { name: "Extra Length (M / L / XL)", price: "+$5 & up" }

    ]
  },

  // ----- ACRYLIC / FAKE NAILS -----
  {
    number: 3,
    name: "Refill",
    price: "$45.00",
    description: "Refill and rebalance for existing acrylic or gel extensions to restore shape, strength, and smoothness.",
    isActive: true,
    sortGroup: "acrylic",
    addons: [
      { name: "Shape Change (Coffin, Almond, Stiletto)", price: "+$5" },
      { name: "French Tip (White or Color)", price: "+$10" },
      { name: "Repairs", price: "+$5 & up" },
      { name: "Designs / Diamonds", price: "+$5 & up" }
    ]
  },
  {
    number: 4,
    name: "Full Set",
    price: "$55.00",
    description: "New acrylic or gel extensions with custom shaping and a polished finish.",
    isActive: true,
    sortGroup: "acrylic",
    addons: [
      { name: "White or Color French Tip", price: "+$10" },
      { name: "Designs / Diamonds", price: "+$5 & up" },
      { name: "Extra Length (M / L / XL)", price: "+$5 & up" }
    ]
  },
  {
    number: 5,
    name: "Dipping Powder",
    price: "$50.00",
    description: "Durable dip application on natural nails for added strength and a sleek, glossy finish.",
    isActive: true,
    sortGroup: "acrylic",
    addons: [
      { name: "Tip Extension", price: "+$10" },
      { name: "French Tip (White or Color)", price: "+$10" },
      { name: "Designs / Diamonds", price: "+$5 & up" }
    ]
  }
];
