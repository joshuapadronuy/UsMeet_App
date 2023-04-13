import Header from "../components/Header";
import NavCard from "../components/UI/NavCard";
import HomeStyles from "../styles/Home.module.css";
import PageBanner from "../components/UI/PageBanner";

export default function Home() {
  return (
    <div className={HomeStyles.rootContainer}>    
      {/* banner */}
      <PageBanner imageSrc={"/surface-collab.jpg"} alt={"two people collaborating"}>
        <Header />
      </PageBanner>
      {/* info section */}
      <section className={HomeStyles.infoSection}>
          <NavCard link={'/poll-availabilities'}>
            <div className={HomeStyles.cardContainer}>
              <h3>Try out polling for availabilities</h3>
            </div>
          </NavCard>
          <div className={HomeStyles.content}>
            <h4>Work together with the power of technology</h4>
            <p>
              This website offers a tools to helps teams
              to gather polls within the team to vote out
              decisions that needs to be made together. The
              main feature that we provide is a time chart where
              people can post their availabilities and provide
              graphic information about the results.
            </p>
          </div>
      </section>
    </div>
   
  )
}
