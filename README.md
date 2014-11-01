# biojs-io-blast

[![NPM version](http://img.shields.io/npm/v/biojs-io-blast.svg)](https://www.npmjs.org/package/biojs-io-blast)
[![Build Status](https://secure.travis-ci.org/greenify/biojs-io-blast.png?branch=master)](http://travis-ci.org/greenify/biojs-io-blast)
[![NPM version](https://badge-me.herokuapp.com/api/npm/biojs-io-blast.png)](http://badges.enytc.com/for/npm/biojs-io-blast) 

> BLAST parser

It parses the XML output of BLAST. You can activate the XML output by adding the 
`-outfmt 5` flag to your BLAST program.

[More info about BLAST](http://www.ncbi.nlm.nih.gov/books/NBK153387/)  

## Getting Started
Install the module with: `npm install biojs-io-blast`

```javascript
var blast = require('biojs-io-blast');
blast.read("http://files.biojs.net/blast/examples/syne1.xml", function(data){
	console.log("blast object", data);
}); 
```

[Play on JSBin](http://jsbin.com/cidoga/1/edit?js,console)

## Documentation

#### .read(url)

**Parameter**: `URL of a BLAST output (in xml)`
**Type**: `String`
**Example**: `http://files.biojs.net/blast/examples/syne1.xml`

**Parameter**: `Callback`
**Type**: `function`

Downloads the XML BLAST file and parses it to JSON.

```javascript
blast.read('http://files.biojs.net/blast/examples/syne1.xml', function(data){
	console.log("blast object", data);
}); 
```

As downloading the file is asynchronous, it will call your callback with the
resulting data object.

#### .parse(str)

**Parameter**: `XML Output of BLAST`
**Type**: `String`
**Example**: `<BlastOutput><BlastOutput_program>blastp</BlastOutput_program></BlastOutput>`

Parses the BLAST XML output to JSON.

```javascript
blast.parse('<BlastOutput><BlastOutput_program>blastp</BlastOutput_program></BlastOutput>'); 
```

## CLI version

Install it globally `npm install -g biojs-io-blast` and then you can pipe directly into the parser. 

```
cat <blast-file.xml> | biojs-blast
```
## Output

* there can be multiple iterations
* there can be multiple per hits per iteration
* there can be multiple HSPS per hit

### Full example

```
{
    "program": "blastp",
    "version": "BLASTP 2.2.29+",
    "reference": "Stephen F. Altschul, Thomas L. Madden, Alejandro A. Sch&auml;ffer, Jinghui Zhang, Zheng Zhang, Webb Miller, and David J. Lipman (1997), \"Gapped BLAST and PSI-BLAST: a new generation of protein database search programs\", Nucleic Acids Res. 25:3389-3402.",
    "db": "/home/xsebi/tmp/blast/swiss",
    "query-ID": "Query_1",
    "query-def": "sp|Q8NF91|SYNE1_HUMAN Nesprin-1 OS=Homo sapiens GN=SYNE1 PE=1 SV=4",
    "query-len": "8797",
    "param": {
        "matrix": "BLOSUM62",
        "expect": "10",
        "gap-open": "11",
        "gap-extend": "1",
        "filter": "F"
    },
    "iterations": [
        {
            "iter-num": "1",
            "query-ID": "Query_1",
            "query-def": "sp|Q8NF91|SYNE1_HUMAN Nesprin-1 OS=Homo sapiens GN=SYNE1 PE=1 SV=4",
            "query-len": "8797",
            "hits": [
                {
                    "num": "1",
                    "id": "gnl|BL_ORD_ID|140988",
                    "def": "gi|425906075|sp|Q8NF91.4|SYNE1_HUMAN RecName: Full=Nesprin-1; AltName: Full=Enaptin; AltName: Full=Myocyte nuclear envelope protein 1; Short=Myne-1; AltName: Full=Nuclear envelope spectrin repeat protein 1; AltName: Full=Synaptic nuclear envelope protein 1; Short=Syne-1 [Homo sapiens]",
                    "accession": "140988",
                    "len": "8797",
                    "hsps": [
                        {
                            "num": "1",
                            "bit-score": "17954.1",
                            "score": "46598",
                            "evalue": "0",
                            "query-from": "1",
                            "query-to": "8797",
                            "hit-from": "1",
                            "hit-to": "8797",
                            "query-frame": "0",
                            "hit-frame": "0",
                            "identity": "8797",
                            "positive": "8797",
                            "gaps": "0",
                            "align-len": "8797",
                            "qseq": "MATSRGASRCPR...",
                            "hseq": "MATSRGASRCPR...",
                            "midline": "MATSRGASRCPR..."
                        }
                    ]
            "stat": {
                "db-num": "459767",
                "db-len": "171814008",
                "hsp-len": "143",
                "eff-space": "917906647858",
                "kappa": "0.041",
                "lambda": "0.267",
                "entropy": "0.14"
            }
        }
    ]
}
```

[Official BLAST XML spec](http://tinyurl.com/ncbi-blast-xml)


## Contributing

Please submit all issues and pull requests to the [greenify/biojs-io-blast](http://github.com/greenify/biojs-io-blast) repository.

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/greenify/biojs-io-blast/issues).

## License 


This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2014, greenify

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
