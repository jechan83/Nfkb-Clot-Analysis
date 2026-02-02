# Pan-Cancer Analysis
Code base for Plasminogen activation drives plasticity in lung cancer
Klavdija*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 2 - Processing of previously published scRNA-seq data

We downloaded publicly available scRNA-seq data from mouse and human studies across different tissues including colon, skin, prostate, and pancreas. Below is the breakdown of which files were used to analyze the data and the corresponding figures in the publication.

Each dataset was downloaded individually then quality control and analysis was done per dataset as run in the associated python notebook. 

The information was aggregated and compared in the `panCancerFigures.ipynb` file to generate the figures.

We used the `panCancerEnv.yml` to create a conda environment to run the files below.

This Directory generates data for:
- **Figure 5**
- **Extended Data Figures 11**


### Information Table

| Tissue        | ipynb File                | Gene Signature| Figure                   | PMID     |
|---------------|---------------------------|---------------|--------------------------|----------|
| **Mouse**     |                           |               |                          |          |
| Colon         | mouseColon                | coreHRC       | 5a                       | 36352230 |
| Skin          | mouseSkin                 | lower spike   | 5a                       | 38815020 |
| Prostate      | mouseProstate             | Plasticity    | 5a                       | 35981096 |
| Pancreas_T    | mousePancreas             | Basal         | 5a                       | 35952360 |
| Pancreas_B    | mousePancreasB            |               | 5a                       | 33536616 | 
| Lung          | makeLuadAdata             | HPCS          | 5a; ED11d,e,f            | 32707077 |
| Lung          | mouseLung                 | DATP          | 5e; ED11d,e,f            | 32750316 |
| Lung          | mouseLung                 | ADI           | 5e; ED11d,e,f            | 32678092 |
| Lung          | mouseLung                 | PATS          | 5e; ED11d,e,f            | 32661339 |
|               |                           |               |                          |          |
| **Human**     |                           |               |                          |          |
| Colon         | humanColorectalPelka2021  |               | 5a                       | 34450029 |
| Skin          | humanSkinJi2020           |               | 5a                       | 32579974 |
| Prostate      | humanProstateDong2020     |               | 5a                       | 33328604 |
| Pancreas      | humanPancreasSteele2020   |               | 5a                       | 34296197 |
| Lung          | humanLungMDA              | KAC           | 5a; ED11d,e,f            | 38418883 |
| Lung          | humanLungKim              |               | 5a; ED11d,e,f            | 32385277 |
| Lung          | humanLungBischoff         |               | 5a; ED11d,e,f            | 34663877 |
| Lung          | humanLungDost             |               | 5a; ED11d,e,f            | 32891189 |
| Ovarian       | humanOvarianQ             |               | 5a                       | 35196078 |



