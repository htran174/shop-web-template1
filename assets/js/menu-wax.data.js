// Fields: number, name, price, description, isActive, sortGroup ("eyebrow" | "fullbody"), addons?[{name, price}]

export const WAX_MENU = [
  // ----- EYEBROW / FACE -----
  {
    number: 1,
    name: "Eyebrow",
    price: "$15.00",
    description: "Precision brow shaping with mapping, trimming, and a clean, defined finish.",
    isActive: true,
    sortGroup: "face",
    addons: [
      { name: "Brow Tinting color", price: "+$35" },
    ]
  },
  {
    number: 2,
    name: "Lip",
    price: "$10.00",
    description: "Quick, gentle removal for a smooth, polished upper lip.",
    isActive: true,
    sortGroup: "face",
  },
  {
    number: 3,
    name: "Chin",
    price: "$10.00",
    description: "Targeted chin wax to smooth stubborn or uneven hairs.",
    isActive: true,
    sortGroup: "face"
  },
  {
    number: 4,
    name: "Sideburns",
    price: "$12",
    description: "Soft, gentle wax to refine and clean up the sideburn area.",
    isActive: true,
    sortGroup: "face",
  },

  {
    number: 5,
    name: "Full Face",
    price: "$50.00",
    description: "Complete facial waxing including brows, lip, chin, and sideburns.",
    isActive: true,
    sortGroup: "face",
  },


  // ----- BODY -----
  {
    number: 6,
    name: "Underarm",
    price: "$30.00",
    description: "Gentle wax for smooth underarms.",
    isActive: true,
    sortGroup: "fullbody"
  },
  {
    number: 7,
    name: "Half Leg",
    price: "$30.00",
    description: "Lower-leg waxing (knee to ankle) for a smooth, refined finish.",
    isActive: true,
    sortGroup: "fullbody",
  },
  {
    number: 8,
    name: "Full Leg",
    price: "$60.00",
    description: "Complete leg waxing from ankle to upper thigh for sleek, even results.",
    isActive: true,
    sortGroup: "fullbody"
  },
  {
    number: 9,
    name: "Bikini",
    price: "$70.00",
    description: "Neat cleanup just outside the bikini line for a tidy, natural look.",
    isActive: true,
    sortGroup: "fullbody",
  }
];
