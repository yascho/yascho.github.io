function copy(copyText) {
  const map = {
    ü: '{\\"u}',
    ä: '{\\"a}',
    ö: '{\\"o}',
  };

  navigator.clipboard.writeText(
    copyText
      .replace(/<br>/g, " ")
      .replace(/[üäö]/g, m => map[m])
	  .replace(/\*/g, "")
  );
} 

