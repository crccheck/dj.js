walk(document.body);

function walk(node)
{
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
      break;
  }
}

function handleText(textNode) {
  // ['author', 'doctor', 'expert', 'farmer', 'lawyer', 'mayor', 'president', 'scientist', 'senator', 'veteran'].map(function (x) { return '[' + x[0].toUpperCase() + x[0].toLowerCase() + ']' + x.substr(1); }).join('|')
  // Case sensitive
  // ['Pope'].join('|')
  var v = textNode.nodeValue;
  v = v.replace(/\b([Aa]uthor|[Dd]octor|[Ee]xpert|[Ff]armer|[Ll]awyer|[Mm]ayor|[Pp]resident|[Ss]cientist|[Ss]enator|[Vv]eteran|Pope)(s)?\b/, "DJ$2");
  textNode.nodeValue = v;
}
