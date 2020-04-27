window.addEventListener('resize', function() {
    console.log(`Rozmiar okna: ${this.innerWidth} x ${this.innerHeight}`);
});

const test = document.getElementsByClassName('sidebar_container');
console.log(test);

window.addEventListener('size', function() {
    if (window.innerWidth < 1026)
      
    document.getElementsByClassName("sidebar_container").classList.remove("sidebar_container");
  });

