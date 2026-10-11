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
    { name: "Sweet somethings", upTo: 1000 },
    { name: "Big hugs",         upTo: 2000 },
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
  // Prices were checked on 11 October 2026 and may have changed since.
  wishes: [
    { name: "Kawaii sticker book", price: 259,
      link: "https://amzn.in/d/0e4drdSy",
      emoji: "📒", note: "Maruko & Friends, 50 sheets",
      image: "https://m.media-amazon.com/images/I/51K1hXGSIQL._SX679_.jpg" },
    { name: "Capybara pencil pouch", price: 283,
      link: "https://amzn.in/d/0cFk5FHM",
      emoji: "🦫", note: "Capybara Brown",
      image: "https://m.media-amazon.com/images/I/6123e2RyZVL._SX679_.jpg" },
    { name: "Pilot black ink", price: 380,
      link: "https://makoba.com/products/pilot-black-ink-bottle-30ml",
      emoji: "🖋️", note: "30ml bottle",
      image: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/PilotBlackInkBottle-30ml_image1.jpg?v=1736421726&width=700" },
    { name: "Sailor ink cartridges, purple", price: 400,
      link: "https://makoba.com/products/sailor-shikiori-fuji-sugata-ink-cartridge-pack-of-3-purple",
      emoji: "💜", note: "Shikiori Fuji Sugata, pack of 3",
      image: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/SailorShikioriFujiSugataInkCartridgePackof3-Purple_image1.jpg?v=1744721314&width=700" },
    { name: "Sailor ink cartridges, brown", price: 400,
      link: "https://makoba.com/products/sailor-shikiori-kamoshika-ink-cartridge-pack-of-3-brown",
      emoji: "🤎", note: "Shikiori Kamoshika, pack of 3",
      image: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/SailorShikioriKamoshikaInkCartridgePackof3-Brown_image1.jpg?v=1744725628&width=700" },
    { name: "Pelikan violet ink", price: 430,
      link: "https://makoba.com/products/pelikan-4001-ink-violet-30ml",
      emoji: "🔮", note: "Pelikan 4001, 30ml bottle",
      image: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/Pelikan-4001-Ink-Bottle-Violet-Image-2_5f0e9361-6533-4a91-93da-540534e6f352.jpg?v=1716376881&width=700" },
    { name: "Laneige lip sleeping mask", price: 540,
      link: "https://www.nykaa.com/laneige-lip-sleeping-mask-berry/p/15227410?skuId=15227397",
      emoji: "💋", note: "Berry, mini 8g",
      image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/2/d204539LANEI00000343_a1.jpg" },
    { name: "Jimin Muse tee", price: 550,
      link: "https://www.closetbangtan.com/products/jimin-muse-tee?variant=48791292870908",
      emoji: "👕", note: "",
      image: "https://cdn.shopify.com/s/files/1/0750/2610/4572/files/Untitleddesign_10.png?v=1747825188&width=700" },
    { name: "Shea body butter", price: 748,
      link: "https://www.nykaa.com/the-body-shop-shea-body-butter/p/25289",
      emoji: "🧴", note: "The Body Shop, 200ml",
      image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/6/a61e34dE000284_1.jpg" },
    { name: "Diamine maroon ink", price: 760,
      link: "https://makoba.com/products/diamine-india-ink-bottle-maroon-30ml?variant=43584027197669",
      emoji: "🍷", note: "30ml bottle",
      image: "https://cdn.shopify.com/s/files/1/0582/0819/0643/products/Diamine-India-Ink-Bottle-Maroon.jpg?v=1672900771&width=700" },
    { name: "Lip treatment mini kit", price: 899,
      link: "https://www.nykaa.com/inde-wild-dewy-lip-treatment-mini-s-kit/p/24250725",
      emoji: "💄", note: "inde wild Dewy Lip Treatment minis",
      image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/c/8cd7922INDEW00000063_r01.jpg" },
    { name: "Acrylic paint markers", price: 949,
      link: "https://amzn.in/d/0dezus1h",
      emoji: "🖍️", note: "Brush tip, set of 36",
      image: "https://m.media-amazon.com/images/I/71odd9ZbT4L._SX679_.jpg" },
    { name: "Jinhao 9019 fountain pen", price: 950,
      link: "https://amzn.in/d/0018fWsY",
      emoji: "🖋️", note: "Transparent wine red, medium nib",
      image: "https://m.media-amazon.com/images/I/61mXNkZajCL._SX679_.jpg" },
    { name: "Pilot Iroshizuku Yama Budo ink", price: 950,
      link: "https://makoba.com/products/pilot-iroshizuku-ink-bottle-yama-budo-purple-15ml?variant=52097403519205",
      emoji: "🍇", note: "Purple, 15ml bottle",
      image: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/PilotIroshizukuInkBottle_YamaBudo_Purple_-15ml_image1.jpg?v=1786688222&width=700" },
    { name: "BTS Arirang jersey", price: 1199,
      link: "https://www.closetbangtan.com/products/arirang-jersey-preorder-only",
      emoji: "🎽", note: "Preorder only",
      image: "https://cdn.shopify.com/s/files/1/0750/2610/4572/files/jersey_54195abd-6775-48e9-bb28-85434fe3ad6e.png?v=1774594410&width=700" },
    { name: "Pelikan Jazz fountain pen", price: 1320,
      link: "https://makoba.com/products/pelikan-jazz-noble-elegance-fountain-pen-viola-rgt",
      emoji: "✒️", note: "Noble Elegance, in Viola",
      image: "https://cdn.shopify.com/s/files/1/0582/0819/0643/files/PelikanJazzNobleEleganceFountainPen-ViolaRGT_image1.jpg?v=1776173039&width=700" },
    { name: "Secret Alchemist Rare Vanilla perfume", price: 1349,
      link: "https://www.nykaa.com/secret-alchemist-rare-vanilla-clean-perfume/p/25742315",
      emoji: "🍦", note: "100ml",
      image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/3/6395e33SECAE000000610ab_0ab1.jpg" },
    { name: "Maison Moi Bisous perfume", price: 1350,
      link: "https://www.nykaa.com/moi-by-nykaa-joie-de-vivre-eau-de-parfum-luxury-perfume-for-women/p/17493667?skuId=583358",
      emoji: "🌹", note: "Bisous Velvet Vanilla, 100ml",
      image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/d/8d247838904245710675_1.jpg" },
    { name: "Leather trifold journal", price: 1599,
      link: "https://theleatherchef.in/products/handmade-leather-trifold-field-journal-old-mauve",
      emoji: "📔", note: "Old Mauve, A5 with blank pages",
      image: "https://cdn.shopify.com/s/files/1/0128/4096/0057/files/7_3f5b4017-f235-410d-9989-d40e419c5128.jpg?v=1778139647&width=700" },
    { name: "Knee-high boots", price: 3606,
      link: "https://www.myntra.com/26328224",
      emoji: "👢", note: "Delize, in tan",
      image: "https://assets.myntassets.com/assets/images/26328224/2023/12/9/9c787b7e-ad3d-4e8f-85e1-4403ff7dd65c1702108023934DelizeTanwomenveganleatherchelseawesternKneeboot1.jpg" }
  ]
};
