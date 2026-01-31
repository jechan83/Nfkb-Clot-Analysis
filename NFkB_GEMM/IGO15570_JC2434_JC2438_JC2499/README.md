# HPCS_LUAD
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSExxxxxx. 

**_01_combine_lanes.ipynb_** - The Jupyter notebook to concatenate data from the IGO15770/JC2434/JC2438/JC2499 lanes. Enables comparison across experiments.

**_02_shNfkb1_analysis.ipynb_** - The Jupyter notebook to process the FACS sorted 18 week _KP Rosa26<sup>RIK/+</sup>_ tumors infected with shNfkb1 hairpin containing lentiviruses. Produces a part of Fig 1l, and produces Ext. Data Fig 2a,c,d.

**_03_IkbSR_analysis.ipynb_** - The Jupyter notebook to process FACS sorted LUAD tumors 17 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either a Cre or IkbSR-Cre construct. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression. Produces a part of Fig 1l, and produces Ext. Data Fig 2g, h, 3e.

**_04_shNfkb_components_analysis.ipynb_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 17 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either shRenilla, shNfkb1,  shRela, or shRel hairpins. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression. Produces a part of Fig 1l, and produces Ext. Data Fig 3c,d,f.