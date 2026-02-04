#!/bin/bash

# Subsample for prototyping purposes
#samtools view -b --subsample .05 --subsample-seed 1 -o test.bam unmapped.bam 
#picard FilterSamReads I=test.bam O=output.bam JAVASCRIPT_FILE=script.js FILTER=includeJavascript
##samtools fastq output.bam > output.fastq

# Actually do the real processing
picard FilterSamReads I=possorted_genome_bam.bam O=final.bam JAVASCRIPT_FILE=script.js FILTER=includeJavascript
samtools index final.bam
#samtools fastq final.bam > final.fastq
