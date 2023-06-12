interface ShowDetailedScoreProps {
  category: string;
  score: number;
  icon: string;
  color: string;
}

export default function ShowDetailedScore(item: ShowDetailedScoreProps) {

  return (
    <>
      <div className="detailed-score-item-wrapper">
        <div className="detailed-score-item">
          <img className="detailed-score-item-icon" src={item.icon} alt="icon"/>
          <span className="detailed-score-item-category" style={{color:`${item.color}`}}>{item.category}</span>
        </div>
        <div className="detailed-score-item-score">
          <p>{item.score} <span>/ 100</span></p>
        </div>
      </div>
    </>
  )
}