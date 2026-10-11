// ============================================================
//  YOUR WISH LIST. This is the only file you need to edit.
//  Keep the quotes and commas exactly as they are.
// ============================================================
window.WISHBOOK = {

  name: "",          // your first name, e.g. "Kiara"  (leave "" to show "My")
  birthday: "",      // e.g. "14 November"            (leave "" to hide)
  currency: "₹",

  // Budget tags. Each one covers prices from the one above it up to "upTo".
  // The last one has no "upTo", so it catches everything more expensive.
  budgets: [
    { name: "Little treats",    upTo: 500 },
    { name: "Sweet somethings", upTo: 1500 },
    { name: "Big hugs",         upTo: 5000 },
    { name: "Dream big" }
  ],

  // One block per gift. Copy a block, paste it below, change the words.
  //   name   what it is (don't rename it after people start reserving,
  //          or its "taken" stamp is lost)
  //   price  numbers only, no commas
  //   link   the page where people can buy it
  //   emoji  shown as the picture
  //   image  optional: a photo instead of the emoji. Upload the photo to
  //          this repository and write its file name, e.g. "candle.jpg"
  //   note   optional: colour, size, why you love it
  //
  // These eight are SAMPLES. Replace them with your real wishes and
  // delete the  sample: true  part.
  wishes: [
    { name: "Silk scrunchie set", price: 350,  link: "", emoji: "🎀", note: "Pastels, please", sample: true },
    { name: "Scented candle",     price: 450,  link: "", emoji: "🕯️", note: "Vanilla, or anything that smells like cake", sample: true },
    { name: "Hardcover journal",  price: 900,  link: "", emoji: "📔", note: "Dotted pages for scrapbooking", sample: true },
    { name: "Gold hoop earrings", price: 1200, link: "", emoji: "✨", note: "Small and dainty", sample: true },
    { name: "Spa day voucher",    price: 2500, link: "", emoji: "🛁", note: "", sample: true },
    { name: "Perfume",            price: 3800, link: "", emoji: "🌸", note: "Something floral and soft", sample: true },
    { name: "Instant camera",     price: 6500, link: "", emoji: "📸", note: "In pink, obviously", sample: true },
    { name: "Weekend bag",        price: 7500, link: "", emoji: "👜", note: "", sample: true }
  ]
};
