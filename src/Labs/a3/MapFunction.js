const MapFunction = () => {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => a * a;
  
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
  
    return (
      <div>
        <h2>Map</h2>
        <p>squares = {squares.join('')}</p>
        <p>cubes = {cubes.join('')}</p>
      </div>
    );
  };
  export default MapFunction;
  