var xmldoc = require("xmldoc");
var xhr = require("nets");

var blast = {};
module.exports = blast;

blast.read = function(url,callback){
  xhr(url,function(err,resp,body){
    callback(blast.parse(body));
  });
}

blast.parse = function(str){
  var doc = new xmldoc.XmlDocument(str);
  var res = {};
  
  // assign general attributes
  var rootName = doc.name + "_";
  doc.eachChild(function(child,index){
    var name = child.name.replace(rootName, "");
    switch(name){
      case "iterations":
      case "SequenceSimilaritySearchResult":
        res[name] = parseArray(child,parseIteration);
        break;
      case "param":
        // somehow the 2.29 format has a double nested parameter format
        res[name] = child2Json(child.children[0]); 
        break;
      case "Header":
        res[name] = child2Json(child); 
        break;
      default: 
        res[name] = child.val; 
    }
  });

  return res;
}


// ---------------------
// helper functions for parsing the XML
// ---------------------

// only returns leaf nodes 
function child2Json(node){
  if(node.children.length == 0  ){
    return node.val;
  }
  var obj = {};
  var parentName = node.name + "_";
  node.eachChild(function(child,index){    
    var name = child.name.replace(parentName, "");
    if(child.children.length == 0  ){
      obj[name] = child.val; 
    }
  });
  return obj;
}

// converts a xml node into an array
function parseArray(node,fn){
  var iters = [];
  var parentName = node.name + "_";
  node.eachChild(function(child,index){
    var name = child.name.replace(parentName, "");
    iters.push(fn(child));
  });
  return iters;
}

// a BLAST iteration
function parseIteration(node){
  var iter = {};
  var parentName = node.name + "_";
  node.eachChild(function(child,index){
    var name = child.name.replace(parentName, "");
    switch(name){
      case "hits":
        iter[name] = parseArray(child,parseHit); 
        break;
      case "stat":
        // somehow the 2.29 format has a double nested parameter format
        iter[name] = child2Json(child.children[0]); 
        break;
      default:
        iter[name] = child2Json(child); 
    }
  });
  return iter;
}

// a BLAST hit
function parseHit(node){
  var obj = child2Json(node);
  obj.hsps = parseArray(node.childNamed(node.name + "_hsps"), parseHSP);
  return obj;
}

// a BLAST HSP (part of an hit)
function parseHSP(node){
  var obj = child2Json(node);
  return obj;
}

