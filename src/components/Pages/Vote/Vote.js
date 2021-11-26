import TopHeader from "../../TopHeader/TopHeader.js";
import Footer from "../../Footer/Footer.js";
import Card from "../../Card/Card.js";
import "./vote.css";

const Vote = () => (
    <section className="vote" >
        <TopHeader />
        <section className="vote-container" >
            <div>
                <p  className="vote-tittle" >Video del año</p>
            </div>
            <div className="vote-listcards"  >
                <Card
                    urlImage="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DojaAndSza.jpg"
                    artistName="Doja Cat ft Sza"
                    nomination="Kiss me more"
                />
                <Card
                    urlImage="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DojaAndSza.jpg"
                    artistName="Doja Cat ft Sza"
                    nomination="Kiss me more"
                />

                <Card
                    urlImage="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DojaAndSza.jpg"
                    artistName="Doja Cat ft Sza"
                    nomination="Kiss me more"
                />
            </div>
        </section>

        <section className="vote-container" >
            <div>
                <p  className="vote-tittle" >Video del año</p>
            </div>
            <div className="vote-listcards"  >
                <Card
                    urlImage="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DojaAndSza.jpg"
                    artistName="Doja Cat ft Sza"
                    nomination="Kiss me more"
                />
                <Card
                    urlImage="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DojaAndSza.jpg"
                    artistName="Doja Cat ft Sza"
                    nomination="Kiss me more"
                />

                <Card
                    urlImage="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DojaAndSza.jpg"
                    artistName="Doja Cat ft Sza"
                    nomination="Kiss me more"
                />
            </div>
        </section>
        <Footer />
    </section>
)

export default Vote