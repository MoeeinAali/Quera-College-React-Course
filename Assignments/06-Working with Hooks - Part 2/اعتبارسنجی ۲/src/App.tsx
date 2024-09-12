import useValidation from "./hooks/useValidation";

function App() {
  const { value, setValue, isValid } = useValidation('');

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <>
      <div>
        <input id="birthYear-input" type="number" value={value} onChange={onChangeInput}/>
      </div>

      <div>
        { !isValid && <span style={{color: 'red'}}>Invalid Birth Year!</span> }
        { isValid && <span style={{color: 'green'}}>Birth Year is OK!</span> }
      </div>
    </>
  )
}

export default App;