# HPCS_LUAD
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSExxxxxx. 

**_shNfkb1_JC2434.ipynb_** - The Jupyter notebook to preprocess FACS sorted 18 week _KP Rosa26<sup>RIK/+</sup>_ tumors infected with shNfkb1 hairpin containing lentivirus and induced with Doxycycline for 1 week prior to harvest. Produces the processed h5ad file.