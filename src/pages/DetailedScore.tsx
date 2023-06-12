import data from '../data/data.json'
import ShowDetailedScore from '../components/ShowDetailedScore'
export default function DetailedScore() {
  return (
    <>
      <section className="detailed-wrapper">
        <h2>Summary</h2>
        <div className="detailed-score-wrapper">
          {data.map((item) => (<ShowDetailedScore key={item.category} {...item}/>))} 
        </div>
        <button>
          Continue
        </button>
      </section>
    </>
  )
}
