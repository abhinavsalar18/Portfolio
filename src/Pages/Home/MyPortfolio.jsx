import data from "../../data/index.json";
import { DiGithubBadge } from "react-icons/di";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="skills--section--heading">Recent Projects</h1>
        </div>
        <div>
          <a className="btn btn-github" href="https://github.com/abhinavsalar18/">
            <DiGithubBadge size={30}/>
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className="main-links">
              <a className="text-sm portfolio--link" href={item.github_link}>
                View In GitHub
              </a>
              {
                item?.live  &&
                <a className="text-sm portfolio--link" href={item.live}>View Live</a>
              }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
