function subCipher(text) {
  return text.toUpperCase().replace(/([A-Z])/g, function(x) {
    if (x == 'Z') {
      return 'A';
    }
    else {
      return String.fromCharCode(x.charCodeAt(0) + 1);
    }
  });
};
