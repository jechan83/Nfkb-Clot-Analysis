# HPCS_LUAD
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSExxxxxx. 

**_JC2434_** - Contains the Jupyter notebook to process FACS sorted 18-19 week _KP Rosa26<sup>RIK/+</sup>_ tumors infected with shNfkb1 hairpin containing lentivirus and induced with Doxycycline for 1 week prior to harvest.

**_JC2438_** - Contains the Jupyter notebook to process FACS sorted 18-19 week _KP Rosa26<sup>RIK/+</sup>_ tumors infected with shNfkb1 hairpin containing lentivirus and induced with Doxycycline for 1 week prior to harvest.

**_JC2434\_JC2438\_combined_** - Contains the Jupyter notebook to concatenate JC2434 and JC2438. Run after processing the code in JC2434 and JC2438.  
