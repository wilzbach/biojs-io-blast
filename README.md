# biojs-io-blast

[![NPM version](http://img.shields.io/npm/v/biojs-io-blast.svg)](https://www.npmjs.org/package/biojs-io-blast)
[![Build Status](https://secure.travis-ci.org/greenify/biojs-io-blast.png?branch=master)](http://travis-ci.org/greenify/biojs-io-blast)
[![Coverage Status](https://img.shields.io/coveralls/greenify/biojs-io-blast.svg)](https://coveralls.io/r/greenify/biojs-io-blast)
[![NPM version](https://badge-me.herokuapp.com/api/npm/biojs-io-blast.png)](http://badges.enytc.com/for/npm/biojs-io-blast) 

> BLAST parser

It parses the XML output of BLAST. You can activate the XML output by adding the 
`-outfmt 5` flag to your BLAST program.

[More info about BLAST](http://www.ncbi.nlm.nih.gov/books/NBK143764/)

## Getting Started
Install the module with: `npm install biojs-io-blast`

```javascript
var blast = require('biojs-io-blast');
blast.read("http://files.biojs.net/blast/examples/syne1.xml", function(data){
	console.log("blast object", data);
}); 
```

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
