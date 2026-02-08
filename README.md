# HPCS_LUAD
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSE318469. Data from GSE277777 is used here as well.

_autochthonous.yml_ - Conda package list used to analyze data from Marjanovic\_et\_al\_2020, control, and NFkB_GEMM.  Use "conda create --name <env> --file autochthonous.conda.yml" to recreate the environment used to analyze the data in from this section.  Data originally run on a conda environment within a Linux 64-bit system.

_screen.conda.yml_ - Conda package list used to analyze the lentiviral screen. Data originally run on a conda environment within a Intel MacPro 64-bit system.

_samtools.conda.yml_ - Conda package list used to analyze the degenerate barcodes.

**_Marjanovic\_et\_al\_2020_** - Contains the Jupyter notebook to process the data from Marjanovic*, Hofree*, Chan* et al., Cancer Cell 2020, previously analyzed from GSE277777. A prerequisite to classify the cell states required to generate the figures in the paper. 

**_control_** - Contains the Jupyter notebooks to process _KPfrt Slc4a11<sup>MCD/+</sup> Rosa26<sup>GGCB/+</sup>_ control tumors.  
   1. **_IGO15123_** - Contains the Jupyter notebook to process FACS sorted 16 week _KP Slc4a11<sup>MCD/+</sup> Rosa26<sup>GGCB/+</sup>_ tumors ablated for 1 week via diphitheria toxin treatment. The saline control data is used here. 
   2. **_IGO15342_** - Contains the Jupyter notebook to process FACS sorted 15 week _KP Slc4a11<sup>MCD/+</sup> Rosa26<sup>GGCB/+</sup>_ tumors ablated for 1 week via diphtheria toxin treatment. The saline control data is used here. 
   3. **_IGO15123\_IGO15342\_combined_** - Contains the Jupyter notebook to concatenate IGO15123 and IGO15342. Run after processing the code in IGO15123 and IGO15342.

**_NFkB_GEMM_** - Contains the Jupyter notebooks to process _KP Rosa26<sup>RIK</sup>_ tumors with knockdown of canonical NF-kB components.
   1. **_JC2434_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 18 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either shRenilla or shNfkb1 hairpins. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression.
   2. **_JC2438_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 18 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either shRenilla or shNfkb1 hairpins. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression.
   3. **_IGO15570_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 17 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either shRenilla, shNfkb1,  shRela, or shRel hairpins. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression.
   4. **_JC2499_** -  Contains the Jupyter notebook to process FACS sorted LUAD tumors 17 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either Cre or IkbSR-Cre construct. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression.
   5. **IGO15570\_JC2434\_JC2438\_\_JC2499_** - Contains the Jupyter notebook to concatenate and process IGO15770/JC2434/JC2438/JC2499. Run after processing the code in the individual folders above.

## Part 2 - Processing of previously published scRNA-seq data

We downloaded publicly available scRNA-seq data from mouse and human studies across different tissues including colon, skin, prostate, pancreas, and breast. Below is the breakdown of which files were used to analyze the data and the corresponding figures in the publication.

Each dataset was downloaded individually then quality control and analysis was done per dataset as run in the associated python notebook. 

The information was aggregated and compared in the `hpcsQuant-rev.ipynb` file to generate the figures.

We used the `panCancerEnv.conda.yml` to create a conda environment to run the files below.

This Directory generates data for:
- **Figure 5**
- **Extended Data Figure 11**

### Information Table

| Tissue        | ipynb File                | Gene Signature| Figure                   | PMID     |
|---------------|---------------------------|---------------|--------------------------|----------|
| **Mouse**     |                           |               |                          |          |
| Colon         | mouseColon                | coreHRC       | 5                        | 36352230 |
| Skin          | mouseSkin                 | lower spike   | 5                        | 38815020 |
| Prostate      | mouseProstate             | Plasticity    | 5                        | 35981096 |
| Pancreas_T    | mousePancreas             | Basal         | 5                        | 35952360 |
| Pancreas_B    | mousePancreasB            |               | 5                        | 33536616 | 
| Breast        | mouseBreast               |               | 5                        | 32840210 |
| Lung          | makeLuadAdata             | HPCS          | 5; ED11                  | 32707077 |
| Lung          | mouseLung                 | DATP          | 5; ED11                  | 32750316 |
| Lung          | mouseLung                 | ADI           | 5; ED11                  | 32678092 |
| Lung          | mouseLung                 | PATS          | 5; ED11                  | 32661339 |
| Skin Injury   | regen_mouseSkin           | wound         | 5                        | 32187560 | 
|               |                           |               |                          |          |
| **Human**     |                           |               |                          |          |
| Colon         | humanColorectalPelka2021  |               | 5                        | 34450029 |
| Skin          | humanSkinJi2020           |               | 5                        | 32579974 |
| Prostate      | humanProstateDong2020     |               | 5                        | 33328604 |
| Pancreas      | humanPancreasSteele2020   |               | 5                        | 34296197 |
| Breast        | humanBreastPal2021        |               | 5                        | 33950524 |
| Lung          | humanLungMDA              | KAC           | 5; ED11                  | 38418883 |
| Lung          | humanLungKim              |               | 5; ED11                  | 32385277 |
| Lung          | humanLungBischoff         |               | 5; ED11                  | 34663877 |
| Lung          | humanLungDost             |               | 5; ED11                  | 32891189 |
| HeadandNeck_C | humanHead-and-Neck        |               | 5                        | 34921143 |
| HeadandNeck_K | humanHead-and-Neck_K      |               | 5                        | 32686767 |
| Ovarian       | humanOvarianQ             |               | 5                        | 35196078 |
| Hematologic(MM) | humanHematologic_L      |               |                          | 33963182 |
| Hematologic(ALL)| humanHematologic        |               |                          | 32415257 |
| Colon Injury  | regen_humanIntestine      | revSSR, revSC | 5                        | 37162959 | 
| **Pan Cancer** |                          |               |                          |          |
| Yanai         |                           | Stress        | ED18a                    | 35931863 |

