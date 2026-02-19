# Nfkb-Clot-Analysis
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

_Note_: This specific analysis was run on an Intel MacPro 64-bit machine.

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSE318469. 

**_Lentimix_all.ipynb_** - Contains the Jupyter notebook to process the combined data from the two biological replicates. Produces Fig. 1e-h, Ext. Data Fig 1g
