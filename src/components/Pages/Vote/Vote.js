import TopHeader from "../../TopHeader/TopHeader.js";
import Footer from "../../Footer/Footer.js";
import Card from "../../Card/Card.js";


const Vote =() => (
    <section>
        <TopHeader/>
            <section>
                <div>
                  <p>Video del año</p>  
                </div>
                <div>
                    <Card 
                        urlImage = "https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DojaAndSza.jpg"
                        artistName = "Doja Cat ft Sza"
                        nomination = "Kiss me more"
                    />
                </div>
            </section>
        <Footer/>
    </section>
)

export default Vote