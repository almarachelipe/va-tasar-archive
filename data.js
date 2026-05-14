/* ============================================================
   V&A Wild Silk Holdings — Data
   ------------------------------------------------------------
   Each item is one V&A object. To add new items (e.g. Forbes
   Watson 1866 swatches), simply append to the `items` array.

   Required fields per item:
     id, title, imageFile, accession, place, region,
     year, yearBucket, fibre, technique, dyeStatus, objectType,
     description, watsonRef, maker, isStarObject, notes

   Source: Victoria & Albert Museum, London — collections.vam.ac.uk
   ============================================================ */

const items = [

  /* ============= ★ STAR OBJECTS ============= */

  {
    id: 1,
    title: "Textile (Bhagalpur tasar large check)",
    imageFile: "Textile (Bhagalpur .png",
    accession: "7341(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O480816/textile-unknown/",
    place: "Bhagalpur, Bihar",
    region: "Bihar — Bhagalpur",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Tasar",
    technique: "Checked / Striped Woven",
    dyeStatus: "Dyed (natural)",
    objectType: "Sample length / textile",
    description: "Tasar silk length, white / pink / dark blue checks, 393 × 64cm. The single strongest 1866→2026 link in the entire V&A wild-silk collection.",
    watsonRef: "TMOI Vol. XIV, No. 558 — exact match: 9yd 18in × 25½in, 1lb 4oz, 13s, dyed large check, Bhagulpore, Bengal. The same fabric Watson held in 1866.",
    maker: null,
    isStarObject: true,
    starSignificance: "Same fabric Forbes Watson held in 1866. The single strongest historical bridge between the India Museum and the V&A.",
    notes: "Acquired by the India Museum, London. Transferred to V&A 1879."
  },

  {
    id: 2,
    title: "Embroidered Muslin / Seersucker (Dhaka)",
    imageFile: "Embroidered Muslin (Dhaka).png",
    accession: "5887(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O446933/embroidered-seersucker-unknown/",
    place: "Dhaka (then Bengal, now Bangladesh)",
    region: "East Bengal — Dhaka",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Muga + Cotton",
    technique: "Embroidered Chain Stitch",
    dyeStatus: "Undyed natural",
    objectType: "Embroidered decorative",
    description: "Striped cotton-and-muga-silk seersucker ground embroidered with muga silk, Dhaka, c.1855. V&A catalogues this object as 'Embroidered Seersucker'; Watson's 1866 slip pairs it with the muslin-ground variant under TMOI Nos. 292 and 293.",
    watsonRef: "TMOI No. 292 (paired with No. 293 — muslin variant) on India Museum slip 12653.",
    maker: null,
    isStarObject: true,
    starSignificance: "Watson catalogued this exact fabric family from Dhaka. Bridges the India Museum era to today.",
    notes: "Single V&A record (O446933) — earlier catalogues split this into Muslin (TMOI 293) and Seersucker (TMOI 292) but they are one acquisition."
  },

  {
    id: 4,
    title: "Allahabad Marigold (block-printed tussar)",
    imageFile: "Allahabad Marigold .png",
    accession: "AP 74(2)-1879",
    vaUrl: "https://collections.vam.ac.uk/item/O152571/allahabad-marigold-furnishing-fabric-thomas-wardle/",
    place: "Leek, Staffordshire (England) — block-printed on Indian tussar",
    region: "Britain — Leek (Wardle)",
    year: "1879",
    yearBucket: "1879 Wardle / Leek era",
    fibre: "Pure Tasar (Indian, British-printed)",
    technique: "Block Printed",
    dyeStatus: "Dyed (synthetic + natural)",
    objectType: "Sample length / textile",
    description: "Block-printed tussar silk by Thomas Wardle, Leek 1879. Wardle's 1885 Bengal visit triggered the entire British wild-silk push of the late 19th century.",
    watsonRef: "Direct historical parallel: Wardle's 1885 Bengal sourcing trip = the British model for what Obeetee is doing in 2026.",
    maker: "Thomas Wardle",
    isStarObject: true,
    starSignificance: "The historical playbook for Obeetee's 2026 launch. Wardle did exactly this 140 years ago.",
    notes: "Note: image preview is the PDF first page (no separate JPG available)."
  },

  {
    id: 5,
    title: "Sari (Rajesh Pratap Singh × Haji Sharfuddin)",
    imageFile: "Sari (Rajesh.png",
    accession: "IS.1495:1-2019",
    vaUrl: "https://collections.vam.ac.uk/item/O1497013/sari-singh-rajesh-pratap/",
    place: "Varanasi, Uttar Pradesh",
    region: "UP — Varanasi",
    year: "2019",
    yearBucket: "2010s–2020s Contemporary",
    fibre: "Pure Tasar",
    technique: "Plain Woven (handloom, jacquard)",
    dyeStatus: "Dyed",
    objectType: "Sari",
    description: "Tasar silk sari handwoven over 45 days by master weaver Haji Sharfuddin to a William Morris-inspired design by Rajesh Pratap Singh. 552 × 114cm.",
    watsonRef: "Closes the 1866→2019 loop: Morris published in the 1870s, Wardle printed Indian tasar in 1879, RPS reinterprets Morris on Indian tasar in 2019.",
    maker: "Rajesh Pratap Singh (designer) · Haji Sharfuddin (master weaver)",
    isStarObject: true,
    starSignificance: "Living proof that contemporary Indian designers can take wild silk into the V&A. Obeetee's positioning argument made physical.",
    notes: "45 days on the loom. Acquired by V&A as contemporary Indian design."
  },

  /* ============= GROUP A: INDIAN TASAR 19TH CENTURY ============= */

  {
    id: 6,
    title: "Tasar Silk (Birbhum)",
    imageFile: "Tasar Silk (Birbhum).png",
    accession: "7358(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O476269/textile-unknown/",
    place: "Birbhum, West Bengal",
    region: "West Bengal — Birbhum",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Tasar",
    technique: "Plain Woven",
    dyeStatus: "Undyed natural",
    objectType: "Sample length / textile",
    description: "Plain woven tasar length, 780 × 83cm. From the original 1855 India Museum cataloguing wave.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 3408."
  },

  {
    id: 7,
    title: "Tasar Silk (Bhagalpur 1867 batch)",
    imageFile: "Tasar Silk .png",
    accession: "7352(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477767/textile-unknown/",
    place: "Bhagalpur, Bihar",
    region: "Bihar — Bhagalpur",
    year: "1867",
    yearBucket: "1867 Bhagalpur batch",
    fibre: "Pure Tasar",
    technique: "Checked / Striped Woven",
    dyeStatus: "Dyed (natural)",
    objectType: "Sample length / textile",
    description: "Checked brown/blue tasar length, 1102 × 81.5cm. Original number 958, priced Rs.14 — part of the standardised 1867 Bhagalpur procurement batch.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 5963. Same batch as Tasar Silk 6 and Checked Silk 7346(IS)."
  },

  {
    id: 8,
    title: "Tasar Silk 2 (Warangal)",
    imageFile: "Tasar Silk 2 .png",
    accession: "05737(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O476181/textile-unknown/",
    place: "Warangal, Telangana",
    region: "Telangana — Warangal",
    year: "c.1858",
    yearBucket: "c.1858 Hyderabad / Telangana batch",
    fibre: "Pure Tasar",
    technique: "Plain Woven",
    dyeStatus: "Undyed natural",
    objectType: "Sample length / textile",
    description: "Plain woven tasar length described in the slip as 'inferior quality'. India Museum slip 3400.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Sequential accession to Textile 9 (05738(IS)) — coincidence of cataloguing order."
  },

  {
    id: 9,
    title: "Tasar Silk 3 (Hyderabad)",
    imageFile: "Tasar Silk 3.png",
    accession: "05682(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O476185/textile-unknown/",
    place: "Hyderabad",
    region: "Telangana — Hyderabad",
    year: "c.1858",
    yearBucket: "c.1858 Hyderabad / Telangana batch",
    fibre: "Pure Tasar",
    technique: "Plain Woven",
    dyeStatus: "Undyed natural",
    objectType: "Sample length / textile",
    description: "Plain tasar, slip notes 'injured by Moth & Worm' — useful documentation of storage conditions in 1858 India Museum holdings.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 3874. Part of 1858 Hyderabad batch (with Tasar Silk 4 and 5)."
  },

  {
    id: 10,
    title: "Tasar Silk 4 (Hyderabad — most photogenic)",
    imageFile: "Tasar Silk 4 .png",
    accession: "05641(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O476190/textile-unknown/",
    place: "Hyderabad",
    region: "Telangana — Hyderabad",
    year: "c.1858",
    yearBucket: "c.1858 Hyderabad / Telangana batch",
    fibre: "Pure Tasar",
    technique: "Plain Woven",
    dyeStatus: "Mixed (natural + dyed accents)",
    objectType: "Sample length / textile",
    description: "915 × 72cm tasar length with fringes and a red band — the most photogenic of the 1858 Hyderabad batch.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 3870. Recommended hero image of the Hyderabad batch."
  },

  {
    id: 11,
    title: "Tasar Silk 5 (Hyderabad / Madras)",
    imageFile: "Tasar Silk 5 (Hyderabad .png",
    accession: "7336(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O475527/textile-unknown/",
    place: "Hyderabad Deccan, via Madras",
    region: "Telangana — Hyderabad",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Tasar",
    technique: "Plain Woven",
    dyeStatus: "Undyed natural",
    objectType: "Sample length / textile",
    description: "Plain tasar length. Priced Rs. 3 for 5yd 16in. Acquired via the Madras presidency.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 3407."
  },

  {
    id: 12,
    title: "Tasar Silk 6 (Bhagalpur 1867 batch)",
    imageFile: "Tasar Silk 6 .png",
    accession: "5087(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477735/textile-unknown/",
    place: "Bhagalpur, Bihar",
    region: "Bihar — Bhagalpur",
    year: "1867",
    yearBucket: "1867 Bhagalpur batch",
    fibre: "Pure Tasar",
    technique: "Checked / Striped Woven",
    dyeStatus: "Dyed (natural)",
    objectType: "Sample length / textile",
    description: "Brown/pink stripes, 1196 × 80cm. Original number 960, priced Rs.14 — part of the 1867 standardised Bhagalpur batch.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 5832."
  },

  {
    id: 13,
    title: "Checked Silk (Bhagalpur 1867)",
    imageFile: "Checked Silk .png",
    accession: "7346(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O476642/textile-unknown/",
    place: "Bhagalpur, Bihar",
    region: "Bihar — Bhagalpur",
    year: "1867",
    yearBucket: "1867 Bhagalpur batch",
    fibre: "Pure Tasar",
    technique: "Checked / Striped Woven",
    dyeStatus: "Dyed (natural)",
    objectType: "Sample length / textile",
    description: "Black/red/blue/white check tasar, 100.5 × 60.5cm. Recommended visual for the 1867 Bhagalpur batch.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 5834+6017. (Acc 8542(IS) is a duplicate of this object.)"
  },

  {
    id: 14,
    title: "Dhoti (Bhagalpur)",
    imageFile: "Dhoti (Bhagal.png",
    accession: "5526A(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477787/dhoti-unknown/",
    place: "Bhagalpur, Bihar",
    region: "Bihar — Bhagalpur",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Tasar",
    technique: "Plain Woven",
    dyeStatus: "Mixed (natural + dyed accents)",
    objectType: "Garment — dhoti / lungi",
    description: "Tasar dhoti, 460 × 105cm. India Museum slip 3386.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "From the original 1855 India Museum cataloguing wave."
  },

  {
    id: 15,
    title: "Lungi (Gaya)",
    imageFile: "lungi(gaya).png",
    accession: "4834(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O480603/lungi-unknown/",
    place: "Gaya, Bihar",
    region: "Bihar — Gaya",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Tasar + Cotton",
    technique: "Checked / Striped Woven",
    dyeStatus: "Dyed (natural — lac red)",
    objectType: "Garment — dhoti / lungi",
    description: "'Tusser Loongees Gingam Gya' — tasar + cotton mixed-fibre lungi, lac-dyed red with yellow checks.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 3402."
  },

  {
    id: 16,
    title: "Textile 7 (Bhagalpur purple twill)",
    imageFile: "Textile 7 .png",
    accession: "5085(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477792/textile-unknown/",
    place: "Bhagalpur, Bihar",
    region: "Bihar — Bhagalpur",
    year: "1867",
    yearBucket: "1867 Bhagalpur batch",
    fibre: "Pure Tasar",
    technique: "Twill Woven",
    dyeStatus: "Dyed (natural)",
    objectType: "Sample length / textile",
    description: "Purple twill weave tasar, 1310 × 77cm. India Museum slip 5962.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Part of 1867 Bhagalpur procurement wave."
  },

  {
    id: 17,
    title: "Textile 8 (Bhagalpur blue checks)",
    imageFile: "Textile 8 .png",
    accession: "7343(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477344/textile-unknown/",
    place: "Bhagalpur, Bihar",
    region: "Bihar — Bhagalpur",
    year: "1867",
    yearBucket: "1867 Bhagalpur batch",
    fibre: "Pure Tasar",
    technique: "Checked / Striped Woven",
    dyeStatus: "Dyed (natural)",
    objectType: "Sample length / textile",
    description: "Tussar with blue checks, 938 × 60cm. India Museum slip 5837.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Part of 1867 Bhagalpur procurement wave."
  },

  {
    id: 18,
    title: "Textile 9 (Bhagalpur — natural with red stripes)",
    imageFile: "Textile 9.png",
    accession: "05738(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O476180/textile-unknown/",
    place: "Bhagalpur (UP / Bihar borderlands)",
    region: "Bihar — Bhagalpur",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Tasar",
    technique: "Checked / Striped Woven",
    dyeStatus: "Mixed (natural + dyed accents)",
    objectType: "Sample length / textile",
    description: "Natural tussar with broad red stripes, 2910 × 64cm — a substantial 19th-century length. India Museum slip 3401.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Sequential accession to Tasar Silk 2 (05737(IS))."
  },

  {
    id: 19,
    title: "Garment (Baharampur)",
    imageFile: "Garment(Baharampur).png",
    accession: "5544(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O476379/garment-unknown/",
    place: "Baharampur, West Bengal",
    region: "West Bengal — Baharampur",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Tasar",
    technique: "Plain Woven",
    dyeStatus: "Dyed (natural)",
    objectType: "Garment — wrapped",
    description: "Two complete wrapped garments, plain yellow with black + red borders, 1720 × 102cm. Slip 3405. Related: V&A also holds 7510(IS) — a saffron wrapped garment with grey/terracotta borders, slip 3339, from the same Baharampur source.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 3405."
  },

  /* ============= GROUP B: ERI / MUGA — NORTHEAST ============= */

  {
    id: 20,
    title: "Eri Silk (Darjeeling)",
    imageFile: "EriSilk(Darjeeling).png",
    accession: "05447(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477650/eri-silk-unknown/",
    place: "Darjeeling, West Bengal",
    region: "West Bengal — Darjeeling",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Eri",
    technique: "Checked / Striped Woven",
    dyeStatus: "Dyed (natural)",
    objectType: "Sample length / textile",
    description: "Eri silk pink/green check, 139 × 55cm. Slip 3342.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "India Museum slip 3342."
  },

  {
    id: 21,
    title: "Chaddar (Nepal)",
    imageFile: "chaddar.png",
    accession: "05676(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477303/chaddar-unknown/",
    place: "Nepal",
    region: "Nepal",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Mixed Wild Silk (Eri + Muga/Tasar)",
    technique: "Embroidered (other)",
    dyeStatus: "Dyed (natural)",
    objectType: "Shawl / stole / scarf",
    description: "Chaddar (large shoulder cloth) of eri ground with muga/tasar embroidery. India Museum slip 3363.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Rare cross-border (Indo-Nepal) wild-silk piece."
  },

  {
    id: 22,
    title: "Kerchief (Guwahati — Rajah Lulutsingh contribution)",
    imageFile: "Kerchief (Guwahati.png",
    accession: "5107(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477273/kerchief-unknown/",
    place: "Gauhati / Guwahati, Assam",
    region: "Assam — Guwahati",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Eri",
    technique: "Embroidered (other)",
    dyeStatus: "Dyed (natural — red)",
    objectType: "Shawl / stole / scarf",
    description: "Eri red kerchief, 190 × 36cm, with monkeys-on-elephants embroidered motifs. Inscription notes it was contributed by Rajah Lulutsingh — important stakeholder note for the tasar narrative.",
    watsonRef: null,
    maker: "Contributed by Rajah Lulutsingh (princely state donation)",
    isStarObject: false,
    notes: "India Museum slip 3346. Princely contribution — adds the Indian aristocratic stakeholder to the historical narrative."
  },

  {
    id: 23,
    title: "Mosquito Curtain (Darrang, Assam)",
    imageFile: "MosquitoCurtain(Darrang.png",
    accession: "7504(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O453956/mosquito-curtain-unknown/",
    place: "Darrang, Assam",
    region: "Assam — Darrang",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Muga",
    technique: "Plain Woven (gauze)",
    dyeStatus: "Dyed (natural)",
    objectType: "Mosquito net / curtain",
    description: "Muga loose-weave black/yellow check mosquito curtain, 890 × 135cm. India Museum slip 3355.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Functional textile use — mosquito netting was a major end-use of wild silks in 19th-C Bengal/Assam."
  },

  {
    id: 24,
    title: "Mosquito Netting (Murshidabad / Bankura)",
    imageFile: "MosquitoNetting(Murshi.png",
    accession: "8812(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O478721/mosquito-netting-unknown/",
    place: "Murshidabad or Bankura, West Bengal",
    region: "West Bengal — Murshidabad / Bankura",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Mixed Wild Silk",
    technique: "Plain Woven (gauze)",
    dyeStatus: "Dyed (natural — claret)",
    objectType: "Mosquito net / curtain",
    description: "Wild silk gauze, claret-coloured. India Museum slip 3395.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Bengal-side counterpart to the Assam mosquito curtain (7504)."
  },

  {
    id: 25,
    title: "Garment Cloth (Kolkata muga shawl)",
    imageFile: "Garment Cloth .png",
    accession: "8446(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O478211/garment-cloth-unknown/",
    place: "Kolkata, West Bengal",
    region: "West Bengal — Kolkata",
    year: "c.1872",
    yearBucket: "c.1872 Kolkata",
    fibre: "Pure Muga",
    technique: "Checked / Striped Woven",
    dyeStatus: "Mixed (natural + dyed accents)",
    objectType: "Shawl / stole / scarf",
    description: "Coarse muga shawl, white/blue bands, 130 × 77cm. Priced Rs.12. India Museum slip 11914.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Later acquisition (1872) than the main 1855 wave."
  },

  {
    id: 26,
    title: "Scarf 2 (Guwahati — Patun Kolah)",
    imageFile: "Scarf2Guwahati.png",
    accession: "05721(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477649/scarf-unknown/",
    place: "Gauhati / Guwahati, Assam",
    region: "Assam — Guwahati",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Mixed Wild Silk",
    technique: "Plain Woven",
    dyeStatus: "Dyed (natural — black borders)",
    objectType: "Shawl / stole / scarf",
    description: "Wild silk scarf with black borders, 324 × 56cm. Inscription: 'Patun Kolah, Price 3 Rs, contributed by Govt'. India Museum slip 3418.",
    watsonRef: null,
    maker: "Government contribution",
    isStarObject: false,
    notes: "Rare government-attributed piece with original Indian-language label term ('Patun Kolah')."
  },

  {
    id: 27,
    title: "Scarf (Assam muga fragment)",
    imageFile: "Scarf(Assam .png",
    accession: "05450(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O480580/scarf-unknown/",
    place: "Assam",
    region: "Assam — Guwahati",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Pure Muga",
    technique: "Plain Woven",
    dyeStatus: "Dyed (natural — red ends)",
    objectType: "Shawl / stole / scarf",
    description: "Muga fragment, plain centre with red ends. India Museum slip 3420.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Fragmentary — useful for showing weave structure / colour balance."
  },

  /* ============= GROUP C: MIXED-FIBRE TEXTILES ============= */

  {
    id: 28,
    title: "Border (Hugli, 17th century)",
    imageFile: "border.png",
    accession: "T.6-1936",
    vaUrl: "https://collections.vam.ac.uk/item/O73064/border-unknown/",
    place: "Hugli (Hooghly), Bengal",
    region: "West Bengal — Hugli / Hooghly",
    year: "17th century",
    yearBucket: "17th Century",
    fibre: "Tasar + Cotton",
    technique: "Embroidered Chain Stitch",
    dyeStatus: "Undyed natural",
    objectType: "Border / trim",
    description: "Cotton muslin ground with yellow tasar chain stitch — birds and deer motifs, 155 × 23cm. The earliest dated piece in the collection.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "17th-C Bengal embroidery tradition — predates the colonial cataloguing era by 200+ years."
  },

  {
    id: 29,
    title: "Quilt (Hooghly / Satgaon — bought from William Morris)",
    imageFile: "quilt.png",
    accession: "616-1886",
    vaUrl: "https://collections.vam.ac.uk/item/O88533/quilt-unknown/",
    place: "Hooghly / Satgaon, Bengal",
    region: "West Bengal — Hugli / Hooghly",
    year: "early 17th century",
    yearBucket: "17th Century",
    fibre: "Tasar + Cotton",
    technique: "Embroidered Chain Stitch / Quilted",
    dyeStatus: "Undyed natural (yellow tussar on white cotton)",
    objectType: "Quilt / coverlet",
    description: "Solomon-type colcha for the Portuguese market — cotton ground with yellow tussar embroidery, 330 × 279cm. Bought by the V&A from William Morris.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Provenance: William Morris collection. Direct link from 17th-C Bengal embroidery → Morris → V&A. Layered narrative weight."
  },

  {
    id: 30,
    title: "Rumal (Dhaka — kalka motifs)",
    imageFile: "Rumal (Dhaka.png",
    accession: "IS.118-1965",
    vaUrl: "https://collections.vam.ac.uk/item/O109833/rumal-unknown/",
    place: "Dhaka",
    region: "East Bengal — Dhaka",
    year: "19th century",
    yearBucket: "1880s late colonial",
    fibre: "Muga + Cotton",
    technique: "Embroidered Chain Stitch",
    dyeStatus: "Undyed natural (yellow on white)",
    objectType: "Embroidered decorative",
    description: "Coverlet — white cotton with yellow tussar/muga chain stitch, kalka (paisley) motifs.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Continuity of Dhaka mixed-fibre embroidery from c.1855 (TMOI 292/293) to late 19th C."
  },

  {
    id: 31,
    title: "Scarf (Nepal/Bengal — embroidered floral)",
    imageFile: "Scarf (Nepal.png",
    accession: "05674(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O106280/scarf-unknown/",
    place: "Nepal / Bengal",
    region: "Nepal",
    year: "c.1855",
    yearBucket: "c.1855 India Museum era",
    fibre: "Tasar + Cotton",
    technique: "Embroidered (floral)",
    dyeStatus: "Undyed natural",
    objectType: "Shawl / stole / scarf",
    description: "White cotton with tussar checks, embroidered floral motifs. India Museum slip 3361.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Cross-border Nepal/Bengal piece."
  },

  {
    id: 32,
    title: "Stole (Bengal — Cohen Brothers Manchester stamp)",
    imageFile: "Stole (Bengal.png",
    accession: "IS.107-1985",
    vaUrl: "https://collections.vam.ac.uk/item/O477280/stole-unknown/",
    place: "Bengal",
    region: "West Bengal — unspecified",
    year: "19th–20th century",
    yearBucket: "1880s late colonial",
    fibre: "Tasar + Cotton",
    technique: "Embroidered Chain Stitch",
    dyeStatus: "Undyed natural",
    objectType: "Shawl / stole / scarf",
    description: "White cotton with yellow tasar embroidery. Bears a 'Cohen Brothers Manchester' stamp + star/crescent motif — evidence of British wholesalers distributing Bengali tasar embroidery, another commercial India→Britain trade marker.",
    watsonRef: null,
    maker: "Distributed via Cohen Brothers, Manchester",
    isStarObject: false,
    notes: "Rare commercial-trade artefact: documents the Bengali → British wholesale chain."
  },

  {
    id: 33,
    title: "Textile 11 (Bengal chain stitch)",
    imageFile: "Textile 11 .png",
    accession: "IS.149-1965",
    vaUrl: "https://collections.vam.ac.uk/item/O477292/textile-unknown/",
    place: "Bengal",
    region: "West Bengal — unspecified",
    year: "19th century",
    yearBucket: "1880s late colonial",
    fibre: "Tasar + Cotton",
    technique: "Embroidered Chain Stitch",
    dyeStatus: "Undyed natural",
    objectType: "Embroidered decorative",
    description: "White cotton with tussar chain stitch, 113.75 × 18.875 inches.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "1965 acquisition — later cataloguing of earlier (19th-C) material."
  },

  {
    id: 34,
    title: "Muslin (Lucknow chikan, with tussur variation)",
    imageFile: "Muslin (Lucknow.png",
    accession: "IS.984-1883",
    vaUrl: "https://collections.vam.ac.uk/item/O164826/muslin-unknown/",
    place: "Lucknow, Uttar Pradesh",
    region: "UP — Lucknow",
    year: "c.1880",
    yearBucket: "1880s late colonial",
    fibre: "Tasar + Cotton",
    technique: "Embroidered (chikan)",
    dyeStatus: "Undyed natural (white on white)",
    objectType: "Embroidered decorative",
    description: "Chikankari white-on-white embroidery with mention of tussur silk used 'for variation'. 858 × 76cm. Bought 1882 by Caspar Purdon Clarke for £0.65 (12s 10d).",
    watsonRef: null,
    maker: "Purchased by Caspar Purdon Clarke for V&A",
    isStarObject: false,
    notes: "Tasar mentioned only as a 'variation' — included for chikankari context, not as a strictly tasar object."
  },

  /* ============= GROUP D: BRITISH-MADE WITH INDIAN WILD SILK ============= */

  {
    id: 35,
    title: "Chair Cover (Leek Embroidery Society)",
    imageFile: "Chair cover.png",
    accession: "4554(IS)",
    vaUrl: "https://collections.vam.ac.uk/item/O477396/chair-cover-leek-embroidery-society/",
    place: "Leek, England (on Indian tasar)",
    region: "Britain — Leek (Wardle)",
    year: "1879",
    yearBucket: "1879 Wardle / Leek era",
    fibre: "Pure Tasar",
    technique: "Embroidered (other)",
    dyeStatus: "Dyed",
    objectType: "Embroidered decorative",
    description: "Tasar silk chair cover embroidered with Wardle's 'Mooltan Mayblossom' design by the Leek Embroidery Society — the British workshop closely linked to Thomas Wardle's Indian silk experiments.",
    watsonRef: null,
    maker: "Leek Embroidery Society (Wardle circle)",
    isStarObject: false,
    notes: "Sister object to the Allahabad Marigold — same Leek workshop, same year."
  },

  {
    id: 36,
    title: "Shawl (GB / India 1883)",
    imageFile: "Shawl (GB .png",
    accession: "T.344-1996",
    vaUrl: "https://collections.vam.ac.uk/item/O350738/shawl-unknown/",
    place: "Great Britain / India",
    region: "Britain — Leek (Wardle)",
    year: "1883",
    yearBucket: "1880s late colonial",
    fibre: "Mixed Wild Silk",
    technique: "Embroidered (other)",
    dyeStatus: "Dyed",
    objectType: "Shawl / stole / scarf",
    description: "Embroidered silk, 'possibly tasar', 257 × 36cm. Late acquisition (1996) of an earlier 1883 piece.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Fibre identification uncertain — flagged as 'possibly tasar'."
  },

  {
    id: 37,
    title: "Shawl (Delhi 1898)",
    imageFile: "Shawl (Delhi .png",
    accession: "IS.161-1897",
    vaUrl: "https://collections.vam.ac.uk/item/O477094/shawl-unknown/",
    place: "Delhi",
    region: "Delhi",
    year: "1898",
    yearBucket: "1890s late colonial",
    fibre: "Pure Tasar",
    technique: "Embroidered (other)",
    dyeStatus: "Undyed natural",
    objectType: "Shawl / stole / scarf",
    description: "'Costume tussur silk natural embroidered, Delhi'. Placed in Room IV March 1898. Given by Mrs Sloane Stanley.",
    watsonRef: null,
    maker: "Donor: Mrs Sloane Stanley",
    isStarObject: false,
    notes: "Late-Victorian Delhi tasar — interesting late-colonial provenance."
  },

  /* ============= GROUP E: CONTEMPORARY DESIGNER / ARTIST ============= */

  {
    id: 38,
    title: "Coat / Choga (Asha Sarabhai, Raag)",
    imageFile: "Coat : Choga .png",
    accession: "IS.18-1995",
    vaUrl: "https://collections.vam.ac.uk/item/O470823/coat-sarabhai-asha/",
    place: "Ahmedabad, Gujarat",
    region: "Gujarat — Ahmedabad",
    year: "1994–95",
    yearBucket: "1990s Contemporary",
    fibre: "Pure Tasar",
    technique: "Applique",
    dyeStatus: "Dyed",
    objectType: "Garment — coat / dress",
    description: "Tasar silk choga with applique work, 117 × 148cm. Asha Sarabhai's 'Raag' label — a foundational 1990s contemporary Indian textile brand.",
    watsonRef: null,
    maker: "Asha Sarabhai (Raag label)",
    isStarObject: false,
    notes: "Cited in V&A contemporary South Asian design holdings."
  },

  {
    id: 39,
    title: "Sari (Urmila & Geeta Devi — Madhubani)",
    imageFile: "Sari (Urmila &.png",
    accession: "IS.2-2000",
    vaUrl: "https://collections.vam.ac.uk/item/O35106/sari-devi-geeta/",
    place: "Jitwarpur, Madhubani, Bihar",
    region: "Bihar — Madhubani",
    year: "1997",
    yearBucket: "1990s Contemporary",
    fibre: "Pure Tasar",
    technique: "Hand-Painted (Madhubani)",
    dyeStatus: "Dyed",
    objectType: "Sari",
    description: "Tasar silk sari hand-painted with Madhubani folk art motifs by Urmila and Geeta Devi. Acquired via Dastkar.",
    watsonRef: null,
    maker: "Geeta Devi & Urmila Devi (with Sushila Devi, assistant) — via Dastkar",
    isStarObject: false,
    notes: "Tasar as canvas for Madhubani — material as carrier of regional craft."
  },

  {
    id: 40,
    title: "Shoulder Cloth (Naupatna ikat)",
    imageFile: "Shoulder Cloth .png",
    accession: "IS.4-1988",
    vaUrl: "https://collections.vam.ac.uk/item/O453970/shoulder-cloth-unknown/",
    place: "Naupatna, Cuttack, Odisha",
    region: "Odisha — Naupatna / Cuttack",
    year: "c.1988",
    yearBucket: "1980s Contemporary",
    fibre: "Tasar + Cotton",
    technique: "Ikat",
    dyeStatus: "Dyed",
    objectType: "Shawl / stole / scarf",
    description: "Tasar + cotton ikat dupatta from Naupatna, Cuttack district. Reference: Crill, Indian ikat textiles, V&A 1998.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Odisha tasar — extends the geographical narrative beyond Bihar/Bengal."
  },

  {
    id: 41,
    title: "Perspective Drawing (Dinah Prentice)",
    imageFile: "Perspective Drawing .png",
    accession: "T.2-1987",
    vaUrl: "https://collections.vam.ac.uk/item/O367410/perspective-drawing-prentice-dinah/",
    place: "England",
    region: "Britain — Leek (Wardle)",
    year: "1982",
    yearBucket: "1980s Contemporary",
    fibre: "Mixed Wild Silk (tussah)",
    technique: "Pieced fabric hanging",
    dyeStatus: "Undyed natural",
    objectType: "Drawing / artwork",
    description: "'Perspective Drawing' hanging — pieced cream tussah and wild silk, 2.5 × 2.2m. British contemporary artist using Indian wild silk as a fine-art material.",
    watsonRef: null,
    maker: "Dinah Prentice",
    isStarObject: false,
    notes: "Continuation of the British → Indian silk → fine-art trajectory."
  },

  {
    id: 42,
    title: "Dress (Bengal — child's travel set)",
    imageFile: "Dress (Bengal.png",
    accession: "IS.100 to B-1985",
    vaUrl: "https://collections.vam.ac.uk/item/O453953/dress-unknown/",
    place: "Bengal",
    region: "West Bengal — unspecified",
    year: "19th century",
    yearBucket: "1880s late colonial",
    fibre: "Pure Tasar",
    technique: "Plain Woven",
    dyeStatus: "Undyed natural",
    objectType: "Garment — coat / dress",
    description: "Child's travel set — dress, cape, bonnet — tasar silk. 1985 acquisition of a 19th-century object.",
    watsonRef: null,
    maker: null,
    isStarObject: false,
    notes: "Domestic / colonial-era European child's wear in Indian tasar — unusual repurposing."
  }

];

/* ============= FILTER BUCKET DEFINITIONS =============
   Order matters — these define the order shown in the sidebar.
   Each unique value in the items above appears as a filter option.
   Counts are computed dynamically by script.js.
*/

const filterDefinitions = {
  region: [
    "Bihar — Bhagalpur",
    "Bihar — Gaya",
    "Bihar — Madhubani",
    "West Bengal — Birbhum",
    "West Bengal — Baharampur",
    "West Bengal — Hugli / Hooghly",
    "West Bengal — Darjeeling",
    "West Bengal — Murshidabad / Bankura",
    "West Bengal — Kolkata",
    "West Bengal — unspecified",
    "East Bengal — Dhaka",
    "UP — Lucknow",
    "UP — Varanasi",
    "Telangana — Hyderabad",
    "Telangana — Warangal",
    "Assam — Guwahati",
    "Assam — Darrang",
    "Odisha — Naupatna / Cuttack",
    "Gujarat — Ahmedabad",
    "Delhi",
    "Nepal",
    "Britain — Leek (Wardle)"
  ],
  yearBucket: [
    "17th Century",
    "c.1855 India Museum era",
    "c.1858 Hyderabad / Telangana batch",
    "1867 Bhagalpur batch",
    "c.1872 Kolkata",
    "1879 Wardle / Leek era",
    "1880s late colonial",
    "1890s late colonial",
    "1980s Contemporary",
    "1990s Contemporary",
    "2010s–2020s Contemporary"
  ],
  fibre: [
    "Pure Tasar",
    "Pure Tasar (Indian, British-printed)",
    "Tasar + Cotton",
    "Pure Eri",
    "Pure Muga",
    "Muga + Cotton",
    "Mixed Wild Silk",
    "Mixed Wild Silk (tussah)",
    "Mixed Wild Silk (Eri + Muga/Tasar)"
  ],
  technique: [
    "Plain Woven",
    "Plain Woven (handloom, jacquard)",
    "Plain Woven (gauze)",
    "Checked / Striped Woven",
    "Twill Woven",
    "Embroidered Chain Stitch",
    "Embroidered (other)",
    "Embroidered (chikan)",
    "Embroidered (floral)",
    "Block Printed",
    "Hand-Painted (Madhubani)",
    "Ikat",
    "Applique",
    "Embroidered Chain Stitch / Quilted",
    "Drawing / artwork"
  ],
  dyeStatus: [
    "Undyed natural",
    "Undyed natural (white on white)",
    "Undyed natural (yellow on white)",
    "Undyed natural (yellow tussar on white cotton)",
    "Dyed",
    "Dyed (natural)",
    "Dyed (natural — lac red)",
    "Dyed (natural — red)",
    "Dyed (natural — red ends)",
    "Dyed (natural — black borders)",
    "Dyed (natural — claret)",
    "Dyed (synthetic + natural)",
    "Mixed (natural + dyed accents)"
  ],
  objectType: [
    "Sari",
    "Garment — dhoti / lungi",
    "Garment — wrapped",
    "Garment — coat / dress",
    "Shawl / stole / scarf",
    "Embroidered decorative",
    "Quilt / coverlet",
    "Mosquito net / curtain",
    "Sample length / textile",
    "Border / trim",
    "Drawing / artwork"
  ],
  sampleType: [
    "Woven",
    "Embroidered",
    "Block Printed",
    "Hand-Painted",
    "Applique",
    "Artwork"
  ],
  dyeBinary: [
    "Dyed",
    "Undyed",
    "Mixed"
  ]
};

/* Derive a high-level sample type from each item's technique field.
   Lets us add an Embroidered vs Woven filter without editing all 42 items. */
function getSampleType(item) {
  const t = (item.technique || '').toLowerCase();
  if (t.includes('embroider') || t.includes('quilted')) return 'Embroidered';
  if (t.includes('printed')) return 'Block Printed';
  if (t.includes('painted')) return 'Hand-Painted';
  if (t.includes('applique')) return 'Applique';
  if (t.includes('drawing') || t.includes('artwork')) return 'Artwork';
  if (t.includes('woven') || t.includes('ikat')) return 'Woven';
  return 'Woven';
}

/* Derive a simple Dyed / Undyed / Mixed bucket from the detailed dyeStatus. */
function getDyeBinary(item) {
  const d = (item.dyeStatus || '').toLowerCase();
  if (d.startsWith('undyed')) return 'Undyed';
  if (d.startsWith('mixed')) return 'Mixed';
  if (d.startsWith('dyed')) return 'Dyed';
  return 'Dyed';
}

/* Construct V&A search URL from accession number */
function buildVaUrl(item) {
  // Prefer the verified direct V&A item URL if present
  if (item && item.vaUrl) return item.vaUrl;
  const accession = item && item.accession;
  if (!accession || accession === "—" || accession === "(modern acquisition)") {
    return "https://collections.vam.ac.uk/search/?q=tussar";
  }
  return "https://collections.vam.ac.uk/search/?q=" + encodeURIComponent(accession);
}
