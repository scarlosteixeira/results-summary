import data from '../data/data.json';
import average from '../utils/average';

export default function SumarizedScore(): JSX.Element{

    return (
        <section className="result-wrapper">
            <h1>Your Result</h1>
            <div className="score-wrapper">
                <p>{average(...data)}</p>
                <p>of 100</p>
            </div>
            <div className='grade-wrapper'>
                <p>Great</p>
            </div>
            <div className='description-wrapper'>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </section>
    )
}