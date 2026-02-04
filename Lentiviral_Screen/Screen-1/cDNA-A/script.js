/** reads having a soft clip larger than 2 bases in beginning of read*/ 

function reverseComplement(rt) {
    var newString = "";
    for (var i = rt.length-1; i >= 0; i--) {
	switch(rt[i]) {
            case "A":
		newString += "T";
                break;
            case "T": 
		newString += "A";
                break;
            case "C": 
		newString += "G";
                break;
            case "G": 
		newString += "C";
                break;
	    default:
		throw "rt[i]: " + rt[i] + " is not a valid character!";
        }
     }
     return newString;
}

function accept(rec) { 
    if (!rec.getReadUnmappedFlag()) return false; 
    var readStr = rec.getReadString();
    var taghash = ["TGTCTAGT", "CTGAATCT", "TTAATTAG", "CGGGAATG", "GCCTACGT", "GCCAATCG", "CGTTTCCT", "ACACGTGA", "CAGTGCAT", "CGTTAGGG", "CGTTCAAG", "GGTAGGGA", "ACAGAGCC", "GTACTTGC", "CCATTACT", "CATAGTCA", "TCTGGGGC"];
    for (var i = 0; i < taghash.length; i++) {
        if (RegExp('GT[ATCG]{5}AA[ATCG]{5}TT[ATCG]{5}AA' + taghash[i]).test(readStr+ 'ACTAATCACTGGATAAAA')) {
	   return true;
        }
    }
    return false;
/* Reverse complement seems to pick up 0 reads */
//    var re2 = new RegExp(reverseComplement('TTAATTAG') + 'TT[ATCG]{5}AA[ATCG]{5}TT[ATCG]{5}AC'); // this isn't needed (always returns 0).
//    return re.test(readStr) || re2.test(readStr);
} 

accept(record); 
