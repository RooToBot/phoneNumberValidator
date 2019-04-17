function telephoneCheck(str) {
  var i = 0;
  str = str.replace(/\s/g, '');
  
  var strlist = str.split("");
  for (i = 0; i < strlist.length; i++) {

    if (strlist.includes('(') && !strlist.includes(')')) {
      return false;
    }

    else if (!strlist.includes('(') && strlist.includes(')')) {
      return false;
    }
    
    else if (strlist[0] == "(" && strlist.pop() == ")") {
      return false;
    }

    else if (strlist[0] == "-") {
      return false;
    }
  }

  str = str.replace(/[()]/g,"");
  strlist = str.split("");
  
  for (i = 0; i < strlist.length; i++) {
    if (strlist[i].includes('-', '?', ' ')) {
      strlist.splice(i, 1);
    }
  }

  if (strlist[0] == 1 && strlist.length == 11) {
    return true;
  }

  else if (strlist[0] != 1 && strlist.length == 10) {
    return true;
  }

  else {
    return false;
  }

  return true;
}

console.log(telephoneCheck("-1 (757) 622-7382"));
