# Nfkb-Clot-Analysis
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

_Note_: This specific analysis was run on an Intel MacPro 64-bit machine.

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSExxxxxx. Run in the order shown.

**_Screen-1_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 18 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with the shRNA hairping library and mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression. First biological replicate.

**_Screen-2_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 18 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with the shRNA hairping library and mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression. Second biological replicate.

**_Combined_** - Contains the Jupyter notebook to process the combined data from the two biological replicates.
