const ErrorExample = () => {
  let count = 0;
  function countAdd() {
    count++;
    console.log(count);
  }
  return (<>
  <h2>{count}</h2>
  <button onClick={() => countAdd()} className="btn">click</button>
  </>)
  
};

export default ErrorExample;
