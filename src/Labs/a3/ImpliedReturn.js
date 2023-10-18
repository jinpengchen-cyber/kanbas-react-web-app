
const multiply = (a, b) => a * b;

const ImpliedReturn = () => {
    const fourTimesFive = multiply(4, 5);

    return (
        <div>
            <h3>Implied return</h3>
            fourTimesFive = {fourTimesFive} <br />
            multiply(4, 5) = {multiply(4, 5)} <br />
        </div>
    );
}

export default ImpliedReturn;
