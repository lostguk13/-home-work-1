
const Phrase = ({phrases}) => {
  const renderPhrase = phrases.map((phrase, idx) => {
    return (
      <div key={idx} className="block"><h3>{phrase}</h3></div>
    )
  })

  return (
      <div className="list">
        {renderPhrase}
      </div>
  );
}

export default Phrase
