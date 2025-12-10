# HPCS_LUAD
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSExxxxxx. Data from GSE277777 is used here as well.

_Part1.conda.env_ - Conda package list used to analyze data from Part 1. Use "conda create --name <env> --file Part1.conda.env" to recreate the environment used to analyze the data in from this section.  Data originally run on a conda environment within a Linux 64bit system.

#![Part I Summary Image](Part1_Overview.png)

**_Marjanovic\_et\_al\_2020_** - Contains the Jupyter notebook to process the data from Marjanovic*, Hofree*, Chan* et al., Cancer Cell 2020, previously analyzed from GSE277777. A prerequisite to classify the cell states required to generate the figures in the paper. 

**_control_** - Contains the Jupyter notebooks to process _KP Slc4a11<sup>MCD/+</sup> Rosa26<sup>GGCB/+</sup>_ control tumors.  
   1. **_IGO15123_** - Contains the Jupyter notebook to process FACS sorted 16 week _KP Slc4a11<sup>MCD/+</sup> Rosa26<sup>GGCB/+</sup>_ tumors ablated for 1 week via diphitheria toxin treatment. The saline control data is used here. 
   2. **_IGO15342_** - Contains the Jupyter notebook to process FACS sorted 15 week _KP Slc4a11<sup>MCD/+</sup> Rosa26<sup>GGCB/+</sup>_ tumors ablated for 1 week via diphtheria toxin treatment. The saline control data is used here. 
   3. **_IGO15123\_IGO15342\_combined_** - Contains the Jupyter notebook to concatenate IGO15123 and IGO15342. Run after processing the code in IGO15123 and IGO15342.

## Part 2 - Processing of previously published scRNA-seq data

We downloaded publicly available scRNA-seq data from mouse and human studies across different tissues including colon, skin, prostate, pancreas, and breast. Below is the breakdown of which files were used to analyze the data and the corresponding figures in the publication.

Each dataset was downloaded individually then quality control and analysis was done per dataset as run in the associated python notebook. 

The information was aggregated and compared in the `hpcsQuant-rev.ipynb` file to generate the figures.

We used the `panCancerEnv.yml` to create a conda environment to run the files below.

This Directory generates data for:
- **Figure 5**
- **Extended Data Figures 18 & 19**

### Information Table

| Tissue        | ipynb File                | Gene Signature| Figure                   | PMID     |
|---------------|---------------------------|---------------|--------------------------|----------|
| **Mouse**     |                           |               |                          |          |
| Colon         | mouseColon                | coreHRC       | 5a,e; ED18a              | 36352230 |
| Skin          | mouseSkin                 | lower spike   | 5a,e; ED18a              | 38815020 |
| Prostate      | mouseProstate             | Plasticity    | 5a,b,c,e; ED18a          | 35981096 |
| Pancreas_T    | mousePancreas             | Basal         | 5a,b,c,e; ED18a          | 35952360 |
| Pancreas_B    | mousePancreasB            |               | 5a; ED18a                | 33536616 | 
| Breast        | mouseBreast               |               | 5a; ED18a                | 32840210 |
| Lung          | makeLuadAdata             | HPCS          | 5a,b,c,e; ED18a; ED19a,b | 32707077 |
| Lung          | mouseLung                 | DATP          | 5e; ED18a; ED19b,c       | 32750316 |
| Lung          | mouseLung                 | ADI           | 5e                       | 32678092 |
| Lung          | mouseLung                 | PATS          | 5e                       | 32661339 |
| Skin Injury   | regen_mouseSkin           | wound         | 5e                       | 32187560 | 
|               |                           |               |                          |          |
| **Human**     |                           |               |                          |          |
| Colon         | humanColorectalPelka2021  |               | 5a; ED18a                | 34450029 |
| Skin          | humanSkinJi2020           |               | 5a,c; ED18a              | 32579974 |
| Prostate      | humanProstateDong2020     |               | 5a,c; ED18a              | 33328604 |
| Pancreas      | humanPancreasSteele2020   |               | 5a,c; ED18a              | 34296197 |
| Breast        | humanBreastPal2021        |               | 5a; ED18a                | 33950524 |
| Lung          | humanLungMDA              | KAC           | 5a,c; ED18a,b,c          | 38418883 |
| Lung          | humanLungKim              |               | 5a,c; ED18a              | 32385277 |
| Lung          | humanLungBischoff         |               | 5a,c; ED18a              | 34663877 |
| Lung          | humanLungDost             |               | 5a,c; ED18a              | 32891189 |
| HeadandNeck_C | humanHead-and-Neck        |               | 5a,c; ED18a              | 34921143 |
| HeadandNeck_K | humanHead-and-Neck_K      |               | 5a,c; ED18a              | 32686767 |
| Ovarian       | humanOvarianQ             |               | 5a,c; ED18a              | 35196078 |
| Hematologic(MM) | humanHematologic_L      |               |                          | 33963182 |
| Hematologic(ALL)| humanHematologic        |               |                          | 32415257 |
| Colon Injury  | regen_humanIntestine      | revSSR, revSC | 5e                       | 37162959 | 
|               |                           |               |                          |          |
| **Pan Cancer** |                          |               |                          |          |
| Yanai         |                           | Stress        | ED18a                    | 35931863 |
| Tirosh        |                           | Stress        | 5a                       | 37258682 |



