function BooleanVariables() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let true1 = true;
    let false1 = false;
    let false2 = true1 && false1;
    let true2 = true1 || false1;
    let true3 = !false2;
    let true4 = numberVariable === 123;
    let true5 = floatingPointNumber !== 321.432;
    let false3 = numberVariable < 100;
    let sortaTrue = '1' === 1;
    let notTrue = '1' === 1;
  
    return (
      <div>
        <h2>Boolean Variables</h2>
        true1 = {true1.toString()} <br />
        false1 = {false1.toString()} <br />
        false2 = {false2.toString()} <br />
        true2 = {true2.toString()} <br />
        true3 = {true3.toString()} <br />
        true4 = {true4.toString()} <br />
        true5 = {true5.toString()} <br />
        false3 = {false3.toString()} <br />
        sortaTrue = {sortaTrue.toString()} <br />
        notTrue = {notTrue.toString()}
      </div>
    );
  }
  

export default BooleanVariables
