# V&A Wild Silk Archive — Interactive Website

A self-contained interactive archive of the V&A's wild silk holdings (tasar / eri / muga), built for Obeetee Craft Studio's London market launch (September 2026).

## How to open

1. Open Finder
2. Navigate to: `Downloads/obeetee/v&a/_WEBSITE/`
3. Double-click `index.html` — it opens in your default browser
4. No internet connection required (except for the V&A links and Google Fonts)

## What it does

- **42 objects** sorted into 6 classification dimensions
- **Filter** by Geography / Year / Fibre / Technique / Dye Status / Object Type (multi-select)
- **Search** by title, place, accession, description
- **Sort** by year (oldest/newest), title, or region
- **Click any card** to see full details, Watson cross-references, link to V&A page, and open the original PDF
- **Star Objects** highlighted at the top — the 5 hero pieces for the deck

## File structure

```
_WEBSITE/
├── index.html      ← open this in browser
├── style.css       ← museum-grade aesthetic
├── data.js         ← all 42 items + filter buckets
├── script.js       ← filter / sort / search / modal logic
└── README.md       ← this file
```

## How to add more items (e.g. Forbes Watson 1866 swatches)

Open `data.js` and append a new object to the `items` array. Use this template:

```js
{
  id: 43,                                        // next available ID
  title: "Watson swatch — Bhagulpore tussur",
  imageFile: "watson-swatch-558.jpg",            // place file in v&a/ folder
  accession: "TMOI No. 558",
  place: "Bhagalpur, Bihar",
  region: "Bihar — Bhagalpur",
  year: "1866",
  yearBucket: "1866 Forbes Watson archive",      // can be a new bucket
  fibre: "Pure Tasar",
  technique: "Checked / Striped Woven",
  dyeStatus: "Dyed (natural)",
  objectType: "Sample length / textile",
  description: "...",
  watsonRef: "Direct sample. Pairs with V&A 7341(IS).",
  maker: "Compiled by John Forbes Watson, India Museum London",
  isStarObject: true,
  starSignificance: "...",
  notes: "..."
}
```

If you add a new value to any classification (e.g. a new region or year bucket), also add it to the `filterDefinitions` object at the bottom of `data.js` — that's all.

## How to share with Shreya

Three options:

1. **Send the whole `_WEBSITE/` folder** + the original v&a/ folder via Drive / WeTransfer. She opens `index.html` locally — no setup needed.
2. **Take screenshots** of the website at different filter states and paste into PPT.
3. **Host online** (later) on GitHub Pages or Netlify for free — give her a single URL.

## Data source

All metadata extracted from the V&A's online collection (collections.vam.ac.uk) and consolidated in `_VA_CATALOG_consolidated.md` (in the parent v&a/ folder). The 5 star objects represent the strongest narrative bridges between the 1866 India Museum era (John Forbes Watson) and the 2026 London market launch.
