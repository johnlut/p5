let song, analyzer, fft;

function preload() {
  song = loadSound('song.mp3');
}

function setup() {
  createCanvas(800, 800);
  song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fft= new p5.FFT();
}

function draw() {
clear(); 
 
background('rgba(0, 0, 255, 0)');
noFill(); 

let spectrum = fft.analyze();

let spectrum_no_bass = spectrum.slice(50, 1024); 
let spectrum_less_bass = spectrum.slice(20, 1024); 
let spectrum_no_treb = spectrum.slice(50, 400); 

let max_volume = max(spectrum_no_bass); 

let min_volume = min(spectrum_no_treb); 

var smoothed = []; 

 for (i = 0; i < spectrum_less_bass.length; i++) {
  var sum = 0; 
  for (j = 0; j < 20; j++) {
  	sum += spectrum_less_bass[i]; 
  }
  smoothed.push(sum/20); 
 }
 translate (0, );

stroke(100, min_volume, max_volume); 
translate (0, 200);
  for (j = 0; j < 30; j++){
  	translate (0, -6);
  	beginShape(); 
  	for (i = 0; i < smoothed.length; i++) {
    	 curveVertex(i * 20 - 20, map(smoothed[i], 0, 255, 500 - i *3, 100 + j* 3));
  	}
 		endShape();
  }
}



