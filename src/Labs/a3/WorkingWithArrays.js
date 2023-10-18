import ArrayIndexAndLength from './ArrayIndexAndLength';
import AddingAndRemovingDataToFromArrays from './AddingAndRemovingDataToFromArrays';
import ForLoops from './ForLoops';
import MapFunction from './MapFunction';
import StringifiedSquares from './JsonStringify';
import DisplayFindFunctionResults from './FindFunction';
import DisplayFindIndexResults from './FindIndex';
import FilterFunction from './FilterFunction';


var functionScoped = 2;
let blockScoped = 5;
const constant = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
    functionScoped,
    blockScoped,
    constant,
    ...numberArray1,
    ...stringArray1
];

const WorkingWithArrays = () => {
    return (
        <div>
            <h3>Working with Arrays</h3>
            numberArray1 = {numberArray1.join('')} <br />
            stringArray1 = {stringArray1.join('')} <br />
            variableArray1 = {variableArray1.join('')} <br />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <StringifiedSquares/>
            <DisplayFindFunctionResults/>
            <DisplayFindIndexResults />
            <FilterFunction/>
        </div>
    );
}

export default WorkingWithArrays;
