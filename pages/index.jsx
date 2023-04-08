import Image from "next/image";
import Header from "../components/Header";
import NavCard from "../components/UI/NavCard";
import HomeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={HomeStyles.rootContainer}>    
      <div className={HomeStyles.image}>
        <p>test</p>
        <Image
          src="/surface-collab.jpg"
          alt="calendar in desk photo"
          width={1000}
          height={700}
        />
      </div>   
      <p>test</p>
      {/* right container for welcome and card */}
      <div className={HomeStyles.rightSide}>
          <Header />
          <NavCard link={'/poll-availabilities'}>
            <div className={HomeStyles.cardContainer}>
              <h3>Try out polling for availabilities</h3>
            </div>
          </NavCard>
        </div>
    </div>
   
  )
}
