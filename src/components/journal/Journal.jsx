import JournalList from "./JournalList";
import "./journal.css";

const Journal = () => {
  return (
    <section className="journal-container section-spacing">
      <div className="wrapper">
        <div className="section-header">
          <h2 className="section-title">Read Journal</h2>

          <p className="section-desc">
            Latest trends and inspirations in fashion design.
          </p>
        </div>

        <div className="section-body">
          <JournalList />
        </div>
      </div>
    </section>
  );
};

export default Journal;
