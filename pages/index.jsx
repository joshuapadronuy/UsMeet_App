import Image from "next/image";
import Header from "../components/Header";
import NavCard from "../components/UI/NavCard";
import HomeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={HomeStyles.rootContainer}>          
      <Image
        src="/blessing-ri-calendar-image.jpg"
        alt="calendar in desk photo"
        width={700}
        height={700}
      />
      {/* right container for welcome and card */}
      <div className={HomeStyles.rightSide}>
          <Header />
          <NavCard link={'/poll-availabilities'}>
            <div className={HomeStyles.cardContainer}>
              <Image
                src="/poll-colored.png"
                alt="gradient calendar"
                width={80}
                height={80}
              />
              <h3>Try polling for availabilities</h3>
            </div>
          </NavCard>
        </div>
    </div>
   
  )
}
