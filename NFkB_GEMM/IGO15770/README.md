# HPCS_LUAD
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSExxxxxx. 

**_IGO15770-shNfkb.ipynb_** - The Jupyter notebook to process FACS sorted LUAD tumors 17 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either shRenilla, shNfkb1,  shRela, or shRel hairpins. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression. Produces the processed h5ad file.