const numberOfTiles = 1600;

function randomTriangleClass() {
  const classes = ['sw', 'nw', 'ne', 'se'];
  return classes[Math.floor(Math.random() * classes.length)];
}

for (let i = 0; i < numberOfTiles; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.classList.add(randomTriangleClass());

  document.querySelector('.tile-wrapper').appendChild(tile);
}
