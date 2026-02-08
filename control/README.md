# Nfkb-Clot-Analysis
Code base for high-plasticity cell state in lung adenocarcinoma study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

Generated processed data was retrieved from the NCBI Gene-Expression Omnibus under accession record GSE277777.

The code in these subdirectories are meant to preprocess the scRNA-seq sequencing data from depletion experiments which used Diphtheria toxin, pulling only the relevant saline control files.

**_01_getData.ipynb_** - Contains the Jupyter notebook to download data from GSE277777.

**_02_processData.ipynb_** - Contains the Jupyter notebook to concatenate tumor data downloaded from GSE277777, generates data for Fig 2c, Ext. Data Fig 4e-h, Ext. Data Fig 5d.
