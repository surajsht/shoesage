import { Link } from "react-router-dom";
import { JournalData } from "../../Data";

const JournalList = () => {
  return (
    <>
      {JournalData.map((item) => {
        let { id, img, title, category } = item;

        return (
          <div className="journal-item" key={id}>
            <Link to="#" className="journal-img image-hover">
              <img src={img} alt={title} />

              <span className="journal-category">{category}</span>
            </Link>

            <div className="journal-details">
              <div className="meta-items">
                <span className="author-meta">Post By: John Doe</span>

                <span className="date meta">July 27 2024</span>
              </div>
              <h2 className="journal-title">
                <Link to="#">{title}</Link>
              </h2>

              <Link to="#" className="journal-post-link">
                Continur Reading
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JournalList;
