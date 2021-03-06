function codeToId(code){
  return `code_${code.replace('.', '_')}`;
}


function downloadPlot(svg){
  const svgData = svg.node().outerHTML;
  const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = "manhattan_plot.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function snapToGrid(x, grid_step){
  return Math.round(x / grid_step) * grid_step;
}

function moveToBack() {  
  return this.each(function() { 
    var firstChild = this.parentNode.firstChild; 
    if (firstChild) { 
      this.parentNode.insertBefore(this, firstChild); 
    } 
  });
}

function generateExportArray(tooltips){
  console.log('running update');
  alert(`Copy this text
c(${tooltips.reduce((all, d) => all + `${d.x}, ${d.y}\n`, '')})`);
}

const pval_formatter = d3.format(".2e");

module.exports = {
  codeToId: codeToId,
  downloadPlot: downloadPlot,
  snapToGrid: snapToGrid,
  moveToBack: moveToBack,
  pval_formatter: pval_formatter,
  generateExportArray: generateExportArray,
};