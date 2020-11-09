// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}
// Factpry function for pAequor

const pAequorFactory = (number, dnaBases) => {
  return {
    specimenNum: number,
    dna: dnaBases,
    mutate () {
      let delta = returnRandBase();
      let newNum = Math.floor(Math.random() * 14);
      if (this.dna[newNum] === delta) {
        this.mutate();
      }
      else 
        this.dna[newNum] = delta;
    },
    compareDNA (example) {
      let counter = 0;
      for (let i=0; i<example.dna.length; i++) {
        if (example.dna[i] === this.dna[i]) {
          counter++;
        }
      }
      let percent = Math.round((counter/example.dna.length) * 100);
      console.log (`pAequor specimen ${this.specimenNum} and specimen ${example.specimenNum} share ${percent}% DNA in common.`)
    },
    willLikelySurvive () {
      let counter = 0;
      for (let i=0; i<this.dna.length;i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          counter++
        }
      }
      if (counter/this.dna.length < .60) {
        return false;
      }
      else return true;
    }
  }
}

// Create Array of surviving pAequor 

const teamArray = () => {
  let arr = [];
  let x;
  for (let i=1; i<=30; i++) {
    x = pAequorFactory(i,mockUpStrand());
    console.log(x.willLikelySurvive());
    if (x.willLikelySurvive() === true) {
    arr.push(x);
    }
  }
  return arr;
}

console.log (teamArray());









