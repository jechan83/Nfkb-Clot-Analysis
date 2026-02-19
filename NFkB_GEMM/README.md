# Nfkb-Clot-Analysis
Code base for analysis of NF-kB and receptor pathways the LUAD study by Krause*, Chan* et. al. 

_Requirements_: SCANPY, AnnData, Scipy

## Part 1 - Processing of 10x Single Cell Mouse Sequencing Data (recommended to run these in the order shown).

All generated sequencing data and count matrices are available at the NCBI Gene-Expression Omnibus under accession record GSExxxxxx. 

**_JC2434_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 18 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either shRenilla or shNfkb1 hairpins. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression.

**_JC2438_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 18 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either shRenilla or shNfkb1 hairpins. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression.

**_IGO15570_** - Contains the Jupyter notebook to process FACS sorted LUAD tumors 17 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either shRenilla, shNfkb1,  shRela, or shRel hairpins. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression.

**_JC2499_** -  Contains the Jupyter notebook to process FACS sorted LUAD tumors 17 weeks post tumor induction derived from _KP Rosa26<sup>RIK/+</sup>_ mice. Tumors were initiated with lentivirus containing either Cre or IkbSR-Cre construct. Mice were treated with Doxycycline for 1 week prior to harvest to induce hairpin expression.

**IGO15570\_JC2434\_JC2438\_\_JC2499_** - Contains the Jupyter notebook to concatenate and process IGO15770/JC2434/JC2438/JC2499. Run after processing the code in the individual folders above.
