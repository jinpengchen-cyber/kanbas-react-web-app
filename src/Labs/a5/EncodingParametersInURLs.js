import axios from "axios";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  
  const fetchSum = async (a, b) => {
    const response = await axios.get(`https://kanbas-node-server-app-gov7.onrender.com/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  
  const fetchSubtraction = async (a, b) => {
    const response = await axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  useEffect(() => { /* ... */ }, []);

  return (
    <div>
      ...
      <h4>Calculator</h4>
      <input /* ... */ value={a} /* ... */ />
      <input /* ... */ value={b} /* ... */ />
      <input value={result} className="form-control mb-2" type="number" readOnly />
      
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)}
              className="btn btn-primary mb-2 w-100">
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)}
              className="btn btn-danger me-2 w-100">
        Fetch Subtraction of {a} - {b}
      </button>
      ...
    </div>
  );
}
export default EncodingParametersInURLs;
