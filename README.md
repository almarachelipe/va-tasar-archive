# V&A Wild Silk Archive — Interactive Website

A self-contained interactive archive of the Victoria & Albert Museum's wild silk holdings (tasar / eri / muga), compiled at Obeetee Craft Studio for internal reference.

## What it does

- **41 objects** sorted across 8 classification dimensions
- **Filter** by Geography, Year, Fibre, Sample Type, Technique, Dye, Dye Status, Object Type (multi-select)
- **Search** by title, place, accession, description
- **Sort** by year (oldest/newest), title, or region
- **Click any card** to see full details, Watson cross-references, and a direct link to the V&A page

## File structure

```
_WEBSITE/
├── index.html      ← open this in browser
├── style.css
├── data.js         ← all 41 items + filter buckets
├── script.js       ← filter / sort / search / modal logic
├── images/         ← object photographs
└── README.md
```

## How to add more items

Open `data.js` and append a new object to the `items` array. Use this template:

```js
{
  id: 42,
  title: "Object title",
  imageFile: "filename.png",         // place file in images/
  accession: "TMOI No. 558",
  vaUrl: "https://collections.vam.ac.uk/item/...",
  place: "Bhagalpur, Bihar",
  region: "Bihar — Bhagalpur",
  year: "1866",
  yearBucket: "1866 Forbes Watson archive",
  fibre: "Pure Tasar",
  technique: "Checked / Striped Woven",
  dyeStatus: "Dyed (natural)",
  objectType: "Sample length / textile",
  description: "...",
  watsonRef: "...",
  maker: "...",
  notes: "..."
}
```

If you add a new value to any classification, also add it to the `filterDefinitions` object at the bottom of `data.js`.

## Data source

All metadata extracted from the V&A's online collection at [collections.vam.ac.uk](https://collections.vam.ac.uk/). Photographs are reference captures of public V&A holdings.
